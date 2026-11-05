#!/usr/bin/env python3
"""Build the Reflective AI Fluency skill from source/ and the authored files in skill/.

    python3 scripts/build.py           # build, validate, write dist/reflective-ai-fluency.skill
    python3 scripts/build.py --check   # fail if dist/ is out of date (for pre-commit or CI)

Reference files that come from source/ are generated and carry a header saying so.
Files in skill/ (SKILL.md and the review protocol) are written by hand.
"""
import re, shutil, sys, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC, AUTHORED = ROOT / "source", ROOT / "skill"
NAME = "reflective-ai-fluency"
BUILD, DIST = ROOT / "build" / NAME, ROOT / "dist" / f"{NAME}.skill"

# Generated reference files: output name -> (title, source file, H2 headings to keep in order).
# A heading is matched by its leading words, so numbering changes in a source file do not break the build.
# "" stands for the intro that sits before the first H2.
REFERENCES = {
    "framework-core.md": ("Framework core", "manifest.md", [
        "", "What we believe", "Precondition", "The four competencies", "Fluency in your own work",
        "What this is not", "Attribution"]),
    "ways-of-working.md": ("Ways of working", "manifest.md", ["Axis 1"]),
    "quality-and-traces.md": ("Quality, traces and behaviours", "manifest.md", ["Axis 2", "The behaviours"]),
    "arguments.md": ("Arguments and evidence", "knowledge-base.md", [
        "How to use it", "A.", "B.", "C.", "D.", "E."]),
    "sources.md": ("Sources", "knowledge-base.md", ["G."]),
    "frameworks-reference.md": ("Frameworks reference", "frameworks-reference.md", [
        "Contents", "1.", "2.", "3.", "4.", "5.", "6."]),
    "design-rules.md": ("Design rules", "learning-design-foundation.md", ["2.", "3.", "4.", "5."]),
    "cross-layer-checks.md": ("Cross-layer checks and limits", "learning-design-foundation.md", [
        "6.", "7.", "8.", "9."]),
}


def sections(text):
    """Split a markdown file into {heading: body} by H2, plus '' for the intro. Ignores fenced code."""
    out, cur, buf, fence = {}, "", [], False
    for line in text.splitlines():
        if line.startswith("```"):
            fence = not fence
        if not fence and line.startswith("## "):
            out[cur] = "\n".join(buf).strip()
            cur, buf = line[3:].strip(), [line]
        else:
            buf.append(line)
    out[cur] = "\n".join(buf).strip()
    return out


def pick(secs, key):
    if key == "":
        intro = secs[""].splitlines()
        return "\n".join(l for l in intro if not l.startswith("# ") and not re.match(r"^[A-Z][a-z]{2} \d", l)).strip()
    hits = [h for h in secs if h.startswith(key)]
    if len(hits) != 1:
        raise SystemExit(f"build: heading '{key}' matched {hits} in source")
    return secs[hits[0]]


def generate(name, title, src, keys):
    secs = sections((SRC / src).read_text())
    body = "\n\n".join(pick(secs, k) for k in keys)
    note = f"<!-- Generated from source/{src} by scripts/build.py. Do not edit; change the source and rebuild. -->"
    return f"{note}\n\n# {title}\n\n{body}\n"


def validate(skill_dir):
    errs = []
    skill_md = (skill_dir / "SKILL.md").read_text()
    n_lines = len(skill_md.splitlines())
    if n_lines >= 500:
        errs.append(f"SKILL.md has {n_lines} lines (limit 500)")
    fm = re.match(r"^---\nname: (.+)\ndescription: (.+)\n---\n", skill_md)
    if not fm:
        errs.append("SKILL.md needs frontmatter with name and description on single lines")
    else:
        if fm.group(1) != NAME:
            errs.append(f"name is '{fm.group(1)}', expected '{NAME}'")
        d = len(fm.group(2))
        if d > 1024:
            errs.append(f"description is {d} characters (platform limit 1024)")
        elif d > 200:
            print(f"warning: description is {d} characters; claude.ai's help article lists 200 (open question in CONTRIBUTING.md)")
    refs = sorted(p.name for p in (skill_dir / "references").glob("*.md"))
    for r in refs:
        if f"references/{r}" not in skill_md:
            errs.append(f"references/{r} is not linked from SKILL.md")
    for link in re.findall(r"\]\((references/[^)#]+)", skill_md):
        if not (skill_dir / link).exists():
            errs.append(f"SKILL.md links to missing {link}")
    return errs, n_lines


def assemble():
    if BUILD.parent.exists():
        shutil.rmtree(BUILD.parent)
    (BUILD / "references").mkdir(parents=True)
    shutil.copy(AUTHORED / "SKILL.md", BUILD / "SKILL.md")
    for p in (AUTHORED / "references").glob("*.md"):
        shutil.copy(p, BUILD / "references" / p.name)
    for name, (title, src, keys) in REFERENCES.items():
        (BUILD / "references" / name).write_text(generate(name, title, src, keys))


def package(dest):
    dest.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(dest, "w", zipfile.ZIP_DEFLATED) as z:
        for p in sorted(BUILD.rglob("*")):
            if p.is_file():
                info = zipfile.ZipInfo(f"{NAME}/{p.relative_to(BUILD).as_posix()}", (2026, 1, 1, 0, 0, 0))
                info.compress_type, info.external_attr = zipfile.ZIP_DEFLATED, 0o644 << 16
                z.writestr(info, p.read_bytes())  # fixed timestamps keep the archive reproducible


def main():
    assemble()
    errs, n = validate(BUILD)
    if errs:
        raise SystemExit("build failed:\n- " + "\n- ".join(errs))
    if "--check" in sys.argv:
        tmp = ROOT / "build" / "check.skill"
        package(tmp)
        same = DIST.exists() and DIST.read_bytes() == tmp.read_bytes()
        tmp.unlink()
        sys.exit(0 if same else "dist/ is out of date: run python3 scripts/build.py")
    package(DIST)
    print(f"SKILL.md: {n} lines; {len(list((BUILD / 'references').glob('*.md')))} reference files")
    print(f"wrote {DIST.relative_to(ROOT)} ({DIST.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
