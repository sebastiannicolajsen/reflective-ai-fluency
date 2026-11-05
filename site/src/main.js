import { CLUSTERS, TYPES, NODES, LINKS, ENTRIES, OVERVIEW } from "./content.js";
import { createScene } from "./scene.js";

const $ = (id) => document.getElementById(id);
const nodeById = new Map(NODES.map((n) => [n.id, n]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const visited = new Set();
let view = { level: "overview", cluster: null, id: null };
let ownStep = "";

const el = (tag, props = {}, ...kids) => { const e = Object.assign(document.createElement(tag), props); e.append(...kids); return e; };
const tint = (k) => `var(${CLUSTERS[k].color})`;
const GLYPH = { octa: "M6 0l6 6-6 6-6-6z", sphere: "M6 0a6 6 0 100 12A6 6 0 006 0z", box: "M1 1h10v10H1z", cone: "M6 1l6 10H0z" };
const svgNS = "http://www.w3.org/2000/svg";
const glyph = (k) => {
  const s = document.createElementNS(svgNS, "svg"), p = document.createElementNS(svgNS, "path");
  s.setAttribute("viewBox", "0 0 12 12"); s.setAttribute("width", "11"); s.setAttribute("height", "11"); s.setAttribute("aria-hidden", "true");
  p.setAttribute("d", GLYPH[CLUSTERS[k].shape]); p.setAttribute("fill", tint(k)); s.append(p); s.style.setProperty("--c", tint(k)); return s;
};

// Theme: follow the system, allow an override, remember it where storage is allowed.
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
const setTheme = (t) => { document.documentElement.dataset.theme = t; store.set("theme", t); };
setTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

function webglOk() { try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; } }
let scene = null;
if (webglOk()) {
  try {
    scene = createScene($("canvas"), $("labels"), {
      nodes: NODES, links: LINKS, clusters: CLUSTERS, types: TYPES, reducedMotion: reduced,
      onPick: (p) => (p.id ? goConcept(p.id) : p.cluster ? goCluster(p.cluster) : view.level !== "overview" && null),
      onHover: (p, e) => {
        const tip = $("tip");
        if (!p.id && !p.cluster) { tip.hidden = true; return; }
        const r = $("stage").getBoundingClientRect();
        if (p.id) { const n = nodeById.get(p.id); tip.replaceChildren(el("b", { textContent: n.name }), el("span", { textContent: CLUSTERS[n.cluster].name })); }
        else tip.replaceChildren(el("b", { textContent: CLUSTERS[p.cluster].name }), el("span", { textContent: `${CLUSTERS[p.cluster].tagline}. Click to open.` }));
        tip.style.left = `${e.clientX - r.left}px`; tip.style.top = `${e.clientY - r.top}px`; tip.hidden = false;
      },
    });
  } catch { scene = null; }
}
if (!scene) { document.body.classList.add("no3d"); $("stage").hidden = true; }
$("theme").addEventListener("click", () => { setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); scene?.recolor(); });

// Zoom level bar: Overview, then each part
const navBtn = (label, cluster, onclick) => {
  const b = el("button", { type: "button" }, ...(cluster ? [glyph(cluster)] : []), el("span", { textContent: label }));
  if (cluster) b.style.setProperty("--c", tint(cluster));
  b.dataset.cluster = cluster || "";
  b.addEventListener("click", onclick); $("nav").append(b);
};
navBtn("Overview", null, goOverview);
Object.entries(CLUSTERS).forEach(([k, c]) => navBtn(c.short, k, () => goCluster(k)));

// Overview panel
$("ov-title").textContent = OVERVIEW.title;
$("ov-thread").textContent = OVERVIEW.thread;
$("ov-outcome").textContent = `${OVERVIEW.outcome} ${OVERVIEW.caveat}`;
OVERVIEW.relations.forEach((r) => $("relations").append(el("li", { textContent: r })));
Object.entries(CLUSTERS).forEach(([k, c]) => {
  const n = NODES.filter((x) => x.cluster === k).length;
  const b = el("button", { type: "button", className: "cl" }, el("b", {}, glyph(k), c.short), el("span", { textContent: c.tagline }), el("small", { textContent: `${n} concepts` }));
  b.style.setProperty("--c", tint(k)); b.addEventListener("click", () => goCluster(k)); $("clusters").append(b);
});
ENTRIES.forEach((e) => $("cards").append(el("button", { type: "button", className: "q", textContent: e.title, onclick: () => goConcept(e.id) })));
$("step").addEventListener("input", (e) => { ownStep = e.target.value.trim(); if (view.id) renderConcept(nodeById.get(view.id)); });

// How to read the connections
Object.values(TYPES).forEach((t) => {
  const s = document.createElementNS(svgNS, "svg"), l = document.createElementNS(svgNS, "line"), a = document.createElementNS(svgNS, "path");
  s.setAttribute("viewBox", "0 0 26 8"); l.setAttribute("x1", "0"); l.setAttribute("x2", "20"); l.setAttribute("y1", "4"); l.setAttribute("y2", "4"); l.setAttribute("stroke-width", "1.4");
  if (t.dash) l.setAttribute("stroke-dasharray", "4 3"); if (t.dotted) l.setAttribute("stroke-dasharray", "1 3");
  a.setAttribute("d", "M20 0l6 4-6 4z"); a.setAttribute("stroke", "none"); s.append(l, a);
  const sp = el("span", { title: t.plain }, s, t.label); $("key").append(sp);
});

// Sidebar list: every concept, grouped, with a mark on those you have opened
Object.entries(CLUSTERS).forEach(([k, c]) => {
  const h = el("h2", {}, el("i"), c.name); h.style.setProperty("--c", tint(k));
  const ul = el("ul");
  NODES.filter((n) => n.cluster === k).forEach((n) => {
    const b = el("button", { type: "button", className: "item" }, glyph(k), n.name, el("span", { className: "tick", textContent: "" }));
    b.style.setProperty("--c", tint(k)); b.dataset.id = n.id; b.addEventListener("click", () => goConcept(n.id)); ul.append(el("li", {}, b));
  });
  $("list").append(h, ul);
});

// ---- Navigation: three levels, always reachable from the breadcrumb ----
function apply() {
  $("overview").hidden = view.level !== "overview";
  $("detail").hidden = view.level === "overview";
  $("hint").hidden = view.level === "overview";
  $("reset").hidden = view.level === "overview";
  document.querySelectorAll("#nav button").forEach((b) => b.setAttribute("aria-current", String(view.level === "overview" ? b.dataset.cluster === "" : b.dataset.cluster === (view.cluster || ""))));
  document.querySelectorAll(".item").forEach((b) => {
    b.setAttribute("aria-current", String(b.dataset.id === view.id));
    b.querySelector(".tick").textContent = visited.has(b.dataset.id) ? "✓" : "";
  });
  const c = $("crumbs"); c.dataset.level = view.level; c.replaceChildren();
  if (view.level !== "overview") {
    c.append(el("button", { type: "button", textContent: "Overview", onclick: goOverview }));
    c.append(el("span", { className: "sep", textContent: "›" }));
    c.append(el("button", { type: "button", textContent: CLUSTERS[view.cluster].short, className: view.level === "cluster" ? "here" : "", onclick: () => goCluster(view.cluster) }));
    if (view.id) { c.append(el("span", { className: "sep", textContent: "›" }), el("button", { type: "button", textContent: nodeById.get(view.id).name, className: "here" })); }
  }
  scene?.setView(view);
  history.replaceState(null, "", view.id ? `#${view.id}` : view.cluster ? `#part-${view.cluster}` : location.pathname);
}
function goOverview() { view = { level: "overview", cluster: null, id: null }; apply(); }
function goCluster(k) { view = { level: "cluster", cluster: k, id: null }; renderCluster(k); apply(); }
function goConcept(id) { const n = nodeById.get(id); visited.add(id); view = { level: "concept", cluster: n.cluster, id }; renderConcept(n); apply(); }
$("reset").addEventListener("click", goOverview);

// ---- Panels ----
const ratingTags = (r) => {
  const out = [], add = (t) => out.push(el("span", { className: "pill", textContent: t }));
  if (r.from) add(`From the ${r.from}`);
  if (r.judgement) add("Our judgement");
  if (r.plausible) add("Plausible");
  if (r.established) add(`Established${typeof r.established === "string" ? ": " + r.established : ""}`);
  if (r.preprint) add(`Preprint${typeof r.preprint === "string" ? ": " + r.preprint : ""}`);
  return out;
};
function renderCluster(k) {
  const c = CLUSTERS[k], d = $("detail");
  d.replaceChildren(); d.style.setProperty("--c", tint(k));
  const ul = el("ul", { className: "links" });
  NODES.filter((n) => n.cluster === k).forEach((n) => {
    const b = el("button", { type: "button" }, el("b", {}, el("i"), n.name), n.plain.split(/(?<=\.)\s/)[0]);
    b.style.setProperty("--c", tint(k)); b.addEventListener("click", () => goConcept(n.id)); ul.append(el("li", {}, b));
  });
  d.append(
    el("button", { type: "button", className: "close", ariaLabel: "Back to overview", textContent: "×", onclick: goOverview }),
    el("span", { className: "pill" }, el("i"), "Part of the map"),
    el("h2", { textContent: c.name }),
    el("p", { textContent: `${c.tagline}.` }),
    el("h3", { textContent: `${ul.children.length} concepts · pick one` }), ul,
  );
  d.scrollTop = 0;
}
function renderConcept(n) {
  const d = $("detail");
  d.replaceChildren(); d.style.setProperty("--c", tint(n.cluster));
  d.append(
    el("button", { type: "button", className: "close", ariaLabel: "Back to the part", textContent: "×", onclick: () => goCluster(n.cluster) }),
    el("span", { className: "pill" }, el("i"), CLUSTERS[n.cluster].name),
    el("h2", { textContent: n.name }),
    el("p", { textContent: n.plain }),
  );
  if (n.fits) d.append(el("div", { className: "fit" }, el("div", {}, el("b", { textContent: "Fits when" }), n.fits), el("div", {}, el("b", { textContent: "Does not fit when" }), n.not)), el("p", { className: "note", textContent: "Condensed from the framework's choosing table, which has not yet been tested on real work-process maps." }));
  d.append(el("div", { className: "ask" }, el("small", { textContent: "In your own work, ask" }), n.ask));
  if (ownStep) d.append(el("p", { className: "mine" }, el("small", { textContent: "For your step" }), `“${ownStep}”: ${n.ask}`));
  d.append(el("div", { className: "ratings" }, ...ratingTags(n.rating)));

  // Connections, grouped by kind and showing the direction each one points
  const ls = LINKS.filter(([a, b]) => a === n.id || b === n.id);
  if (ls.length) {
    const wrap = el("div", { className: "links" });
    Object.entries(TYPES).forEach(([type, T]) => {
      const items = ls.filter((l) => l[2] === type);
      if (!items.length) return;
      const ul = el("ul", { className: "links", style: "border:0;border-radius:0" });
      items.forEach(([a, b, , text]) => {
        const out = a === n.id, o = nodeById.get(out ? b : a);
        const btn = el("button", { type: "button" }, el("b", {}, el("span", { className: "dir", textContent: out ? "→" : "←" }), el("i"), o.name), text);
        btn.style.setProperty("--c", tint(o.cluster)); btn.addEventListener("click", () => goConcept(o.id)); ul.append(el("li", {}, btn));
      });
      wrap.append(el("h4", { textContent: T.heading }), ul);
    });
    d.append(el("h3", { textContent: `Connected to · ${ls.length}` }), wrap);
  } else {
    d.append(el("h3", { textContent: "Connections" }), el("p", { textContent: n.cluster === "way" ? "The ways of working are options along one axis, who sets the path. They are not steps of a ladder, so no arrows join them. What each one calls for is in the other parts." : "No relation is drawn for this concept. It belongs with the others in its part." }));
  }
  // Where to go next: unopened neighbours first, then the rest of this part
  const next = [...new Set([...ls.map(([a, b]) => (a === n.id ? b : a)), ...NODES.filter((x) => x.cluster === n.cluster).map((x) => x.id)])].filter((id) => id !== n.id && !visited.has(id)).slice(0, 3);
  if (next.length) d.append(el("div", { className: "sug" }, "Next:", ...next.map((id) => el("button", { type: "button", textContent: nodeById.get(id).name, onclick: () => goConcept(id) }))));
  d.append(el("p", { className: "stepper" }, el("span", { textContent: "Esc goes up a level" }), el("span", { textContent: "⌘K searches" })));
  d.scrollTop = 0;
}

// ---- Search ----
const dlg = $("palette"), q = $("q"), results = $("results");
let hits = [], at = 0;
function paint() {
  const s = q.value.trim().toLowerCase();
  hits = NODES.filter((n) => !s || n.name.toLowerCase().includes(s) || n.plain.toLowerCase().includes(s)).sort((a, b) => b.name.toLowerCase().startsWith(s) - a.name.toLowerCase().startsWith(s));
  at = Math.min(at, Math.max(0, hits.length - 1));
  results.replaceChildren(...hits.map((n, i) => {
    const li = el("li", { role: "option" }, el("i"), n.name, el("small", { textContent: CLUSTERS[n.cluster].name }));
    li.style.setProperty("--c", tint(n.cluster)); li.setAttribute("aria-selected", String(i === at));
    li.addEventListener("click", () => { dlg.close(); goConcept(n.id); }); return li;
  }));
  if (!hits.length) results.append(el("li", { textContent: "No concept matches" }));
}
const openPalette = () => { q.value = ""; at = 0; paint(); dlg.showModal(); q.focus(); };
$("search-btn").addEventListener("click", openPalette);
q.addEventListener("input", () => { at = 0; paint(); });
q.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") { e.preventDefault(); at = Math.min(hits.length - 1, at + 1); paint(); }
  if (e.key === "ArrowUp") { e.preventDefault(); at = Math.max(0, at - 1); paint(); }
  if (e.key === "Enter" && hits[at]) { dlg.close(); goConcept(hits[at].id); }
});
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

// ---- Keyboard: ⌘K search, Esc goes up one level, Alt+← goes back ----
addEventListener("keydown", (e) => {
  const typing = e.target.matches?.("input, textarea");
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); }
  else if (e.key === "/" && !typing && !dlg.open) { e.preventDefault(); openPalette(); }
  else if (e.key === "Escape" && !dlg.open) { view.level === "concept" ? goCluster(view.cluster) : view.level === "cluster" ? goOverview() : 0; }
});

if (import.meta.env.DEV) window.__scene = scene;
const h = location.hash.slice(1);
if (nodeById.has(h)) goConcept(h);
else if (h.startsWith("part-") && CLUSTERS[h.slice(5)]) goCluster(h.slice(5));
else apply();
