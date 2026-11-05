#!/usr/bin/env python3
"""Run baseline cases through `claude -p` under two conditions and grade them.

A: plain Claude, minimal system prompt.
B: same, with source/manifest.md and source/learning-design-foundation.md as context.

Grades come from a model judge and are provisional: Sebastian labels the real ones.
"""
import json, re, subprocess, sys, uuid, tempfile, datetime
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MODEL = "sonnet"
BASE_PROMPT = "You are a helpful assistant."
WORKDIR = tempfile.mkdtemp(prefix="raf-eval-")  # empty cwd so no project files leak in


def parse_cases(path):
    cases = []
    for block in re.split(r"^## ", path.read_text(), flags=re.M)[1:]:
        title, _, rest = block.partition("\n")
        turns = re.findall(r"^- \*\*Turn \d+:\*\* (.*)$", rest, flags=re.M)
        asserts = re.findall(r"^- \[ \] (.*)$", rest, flags=re.M)
        cases.append({"id": title.split(" · ")[0].strip(), "title": title.strip(),
                      "turns": turns, "assertions": asserts})
    return cases


def claude(prompt, system, session=None, resume=False):
    cmd = ["claude", "-p", "--model", MODEL, "--system-prompt", system,
           "--tools", "", "--disable-slash-commands", "--setting-sources", ""]
    if session:
        cmd += ["--resume" if resume else "--session-id", session]
    r = subprocess.run(cmd + [prompt], capture_output=True, text=True, cwd=WORKDIR)
    if r.returncode:
        raise RuntimeError(r.stderr.strip() or r.stdout.strip())
    return r.stdout.strip()


def run_case(case, cond, context):
    system = BASE_PROMPT if cond == "A" else f"{BASE_PROMPT}\n\n{context}"
    sid, replies = str(uuid.uuid4()), []
    for i, turn in enumerate(case["turns"]):
        replies.append(claude(turn, system, sid, resume=i > 0))
    return replies


def grade(case, replies):
    convo = "\n\n".join(f"USER: {t}\nASSISTANT: {r}" for t, r in zip(case["turns"], replies))
    items = "\n".join(f"{i+1}. {a}" for i, a in enumerate(case["assertions"]))
    prompt = (f"Grade this conversation against each assertion. Be strict; an assertion passes only if "
              f"the text clearly meets it.\n\n{convo}\n\nASSERTIONS:\n{items}\n\n"
              'Reply with JSON only: [{"n":1,"pass":true,"note":"<=15 words"}, ...]')
    out = claude(prompt, "You are a strict evaluator. Output JSON only.")
    return json.loads(re.search(r"\[.*\]", out, re.S).group(0))


def main():
    ids = set(sys.argv[1:])
    cases = [c for c in parse_cases(ROOT / "evals/baseline-cases.md") if not ids or c["id"] in ids]
    context = "\n\n".join((ROOT / f"source/{f}").read_text()
                          for f in ("manifest.md", "learning-design-foundation.md"))
    out = ROOT / "evals/runs" / datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
    out.mkdir(parents=True)

    def job(args):
        case, cond = args
        try:
            replies = run_case(case, cond, context)
            res = {"case": case, "cond": cond, "replies": replies, "grades": grade(case, replies)}
        except Exception as e:
            res = {"case": case, "cond": cond, "error": str(e)}
        (out / f"{case['id']}-{cond}.json").write_text(json.dumps(res, indent=2))
        print(f"done {case['id']} {cond}", flush=True)
        return res

    with ThreadPoolExecutor(4) as ex:
        results = list(ex.map(job, [(c, k) for c in cases for k in "AB"]))

    lines = ["| Case | A | B |", "|---|---|---|"]
    for c in cases:
        cells = []
        for k in "AB":
            r = next(x for x in results if x["case"]["id"] == c["id"] and x["cond"] == k)
            g = r.get("grades")
            cells.append("error" if not g else f"{sum(x['pass'] for x in g)}/{len(c['assertions'])}")
        lines.append(f"| {c['title']} | {cells[0]} | {cells[1]} |")
    (out / "summary.md").write_text("\n".join(lines) + "\n")
    print("\n".join(lines), f"\n\nResults in {out}")


if __name__ == "__main__":
    main()
