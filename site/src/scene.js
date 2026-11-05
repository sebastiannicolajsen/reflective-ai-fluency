import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const HOME = { dir: new THREE.Vector3(5.6, 3.4, 8.6), dist: 10.9, target: new THREE.Vector3(0, 0.9, 0) };
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

// Soft round gradient, used as the glow behind a node and as the cloud around a cluster.
function haloTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d");
  const r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.5, "rgba(255,255,255,.4)");
  r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export function createScene(canvas, labelsEl, { nodes, links, clusters, types, onPick, onHover, reducedMotion }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  const pixelCap = () => (innerWidth < 700 ? 1.5 : 2);
  renderer.setPixelRatio(Math.min(devicePixelRatio, pixelCap()));
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xffffff, 13, 28);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f94, 1.55));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(4, 7, 5);
  scene.add(key);
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enablePan = false;
  controls.enableDamping = !reducedMotion;
  controls.dampingFactor = 0.07;
  controls.minDistance = 4;
  controls.maxDistance = 24;
  controls.autoRotate = !reducedMotion;
  controls.autoRotateSpeed = 0.3;

  const col = (name) => new THREE.Color(css(name));
  const halo = haloTexture();
  const geo = {
    sphere: new THREE.SphereGeometry(1, 40, 28),
    octa: new THREE.OctahedronGeometry(1.25),
    box: new RoundedBoxGeometry(1.5, 1.5, 1.5, 4, 0.28),
    cone: new THREE.CylinderGeometry(1.1, 1.3, 0.8, 6),
  };

  // Floor ring: domain knowledge is what everything stands on.
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.3, 2.36, 96), new THREE.MeshBasicMaterial({ color: col("--c-ground"), transparent: true, opacity: 0.6, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -3.0;
  scene.add(ring);

  const degree = new Map();
  links.forEach(([a, b]) => { degree.set(a, (degree.get(a) || 0) + 1); degree.set(b, (degree.get(b) || 0) + 1); });

  // Nodes: shaded solids with a thin ink outline, sized by how connected they are.
  const byId = new Map();
  nodes.forEach((n) => {
    const c = clusters[n.cluster];
    const mat = new THREE.MeshStandardMaterial({ color: col(c.color), roughness: 0.42, metalness: 0.06, transparent: true, flatShading: c.shape === "octa" });
    const mesh = new THREE.Mesh(geo[c.shape], mat);
    mesh.position.set(...n.pos);
    mesh.userData.id = n.id;
    const edge = new THREE.Mesh(geo[c.shape], new THREE.MeshBasicMaterial({ color: col("--outline"), side: THREE.BackSide, transparent: true }));
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color: col(c.color), transparent: true, opacity: 0.25, depthWrite: false }));
    scene.add(mesh, edge, glow);
    const el = document.createElement("div");
    el.className = "lbl";
    el.textContent = n.name;
    labelsEl.appendChild(el);
    byId.set(n.id, { n, mesh, edge, glow, el, nbrs: new Set(), base: 0.15 + 0.022 * (degree.get(n.id) || 1), k: 0, kt: 0, op: 1, label: false, seed: Math.random() * 6.28 });
  });

  // Territories: a soft cloud around each cluster, so the overview reads as four regions.
  const terr = new Map();
  Object.entries(clusters).forEach(([key, c]) => {
    const ps = nodes.filter((n) => n.cluster === key).map((n) => new THREE.Vector3(...n.pos));
    const centre = ps.reduce((a, p) => a.add(p), new THREE.Vector3()).multiplyScalar(1 / ps.length);
    const radius = Math.max(...ps.map((p) => p.distanceTo(centre))) + 1.0;
    const cloud = new THREE.Sprite(new THREE.SpriteMaterial({ map: halo, color: col(c.color), transparent: true, opacity: 0.2, depthWrite: false }));
    cloud.position.copy(centre); cloud.scale.setScalar(radius * 2.7);
    const hit = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 12), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
    hit.position.copy(centre); hit.userData.cluster = key;
    scene.add(cloud, hit);
    const el = document.createElement("div");
    el.className = "terr";
    el.innerHTML = `<b></b><span></span>`;
    el.firstChild.textContent = c.short;
    el.lastChild.textContent = `${nodes.filter((n) => n.cluster === key).length} concepts`;
    labelsEl.appendChild(el);
    terr.set(key, { key, centre, radius, cloud, hit, el, op: 0.2, opT: 0.2, label: true });
  });

  // Edges bow upward so they read as links and not as a wireframe. Style says what kind of relation it is:
  // solid for "calls for more" and "builds", dashed for "limits", dotted for "makes visible".
  // An arrowhead near the end shows which way it points.
  const arrowGeo = new THREE.ConeGeometry(0.055, 0.17, 10);
  const edges = links.map(([a, b, type]) => {
    const A = byId.get(a).mesh.position, B = byId.get(b).mesh.position;
    byId.get(a).nbrs.add(b); byId.get(b).nbrs.add(a);
    const mid = A.clone().add(B).multiplyScalar(0.5);
    mid.y += A.distanceTo(B) * 0.18;
    const curve = new THREE.QuadraticBezierCurve3(A, mid, B);
    const T = types[type];
    const mat = T.dash || T.dotted
      ? new THREE.LineDashedMaterial({ color: col("--muted"), transparent: true, opacity: 0.2, dashSize: T.dotted ? 0.03 : 0.14, gapSize: T.dotted ? 0.09 : 0.1 })
      : new THREE.LineBasicMaterial({ color: col("--muted"), transparent: true, opacity: 0.2 });
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)), mat);
    line.computeLineDistances();
    const arrow = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: col("--muted"), transparent: true, opacity: 0.2 }));
    const at = curve.getPoint(0.8);
    arrow.position.copy(at);
    arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), curve.getTangent(0.8).normalize());
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), new THREE.MeshBasicMaterial({ color: col("--hi") }));
    dot.visible = false;
    scene.add(line, arrow, dot);
    return { a, b, type, curve, line, mat, arrow, dot, phase: Math.random(), hot: false, target: 0.2 };
  });

  // The axis the ways of working sit on: who sets the path. They are options along it, not steps of a ladder.
  const axis = new THREE.Group();
  axis.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-3.4, -1.25, 0), new THREE.Vector3(2.8, -1.25, 0)]), new THREE.LineBasicMaterial({ color: col("--c-way"), transparent: true, opacity: 0.55 })));
  const tip = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: col("--c-way"), transparent: true, opacity: 0.55 }));
  tip.position.set(2.8, -1.25, 0); tip.rotation.z = -Math.PI / 2;
  axis.add(tip);
  scene.add(axis);
  const axisNotes = [["Who sets the path", [-0.3, -1.25, 0], "title"], ["You set it", [-3.4, -1.25, 0], "end"], ["The AI sets it", [2.8, -1.25, 0], "end"]].map(([text, p, cls]) => {
    const el = document.createElement("div");
    el.className = `axisnote ${cls}`; el.textContent = text; labelsEl.appendChild(el);
    return { el, pos: new THREE.Vector3(...p) };
  });

  const ringSel = new THREE.Mesh(new THREE.RingGeometry(0.36, 0.42, 48), new THREE.MeshBasicMaterial({ color: col("--hi"), transparent: true, side: THREE.DoubleSide, depthTest: false }));
  ringSel.visible = false;
  scene.add(ringSel);

  const applyColors = () => {
    scene.fog.color.copy(col("--bg"));
    byId.forEach((o) => {
      const c = col(clusters[o.n.cluster].color);
      o.mesh.material.color.copy(c); o.glow.material.color.copy(c); o.edge.material.color.copy(col("--outline"));
    });
    terr.forEach((t) => t.cloud.material.color.copy(col(clusters[t.key].color)));
    ring.material.color.copy(col("--c-ground"));
    ringSel.material.color.copy(col("--hi"));
    edges.forEach((e) => { const c = col(e.hot ? "--fg" : "--muted"); e.mat.color.copy(c); e.arrow.material.color.copy(c); });
    axis.children.forEach((m) => m.material.color.copy(col("--c-way")));
  };
  applyColors();

  // View state: overview, one cluster, or one concept. Everything below eases toward these targets.
  let view = { level: "overview", cluster: null, id: null }, hovered = null, hoveredCluster = null, running = false, fly = null, t = 0;
  const refresh = () => {
    const { level, cluster, id } = view;
    const f = id || (level === "overview" || level === "cluster" ? hovered : null);
    const keep = id ? new Set([id, ...byId.get(id).nbrs]) : null;
    byId.forEach((o, nid) => {
      const inCl = level === "cluster" && o.n.cluster === cluster;
      if (level === "overview") { o.kt = 0.62; o.op = 0.95; o.label = nid === hovered; }
      else if (level === "cluster") { o.kt = inCl ? 1 : 0.5; o.op = inCl ? 1 : 0.22; o.label = inCl || nid === hovered; }
      else { const k = keep.has(nid); o.kt = k ? 1 : 0.5; o.op = k ? 1 : 0.2; o.label = k; }
      if (nid === hovered) { o.kt = Math.max(o.kt, 1); o.op = 1; }
      o.el.classList.toggle("dim", o.op < 0.9 && !o.label);
      o.el.classList.toggle("sel", nid === id);
    });
    terr.forEach((tr) => {
      tr.opT = level === "overview" ? (tr.key === hoveredCluster ? 0.34 : 0.22) : level === "cluster" ? (tr.key === cluster ? 0.2 : 0.07) : 0.05;
      tr.label = level === "overview" || (level === "cluster" && tr.key === cluster);
    });
    edges.forEach((e) => {
      const A = byId.get(e.a).n.cluster, B = byId.get(e.b).n.cluster;
      e.hot = !!(id && (e.a === id || e.b === id));
      const ec = col(e.hot ? "--fg" : "--muted"); e.mat.color.copy(ec); e.arrow.material.color.copy(ec);
      e.target = level === "overview" ? 0.16 : level === "cluster" ? (A === cluster && B === cluster ? 0.55 : 0.05) : e.hot ? 0.9 : 0.05;
    });
    invalidate();
  };

  const proj = new THREE.Vector3(), tmp = new THREE.Vector3();
  let last = 0;
  const frame = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now; t += dt;
    let busy = controls.autoRotate || !!fly || !reducedMotion;
    if (controls.update()) busy = true;
    const sel = view.id;

    byId.forEach((o, id) => {
      o.k += (o.kt - o.k) * Math.min(1, dt * 8);
      const s = o.base * o.k * (id === sel ? 1.5 : 1);
      const bob = reducedMotion ? 0 : Math.sin(t * 0.9 + o.seed) * 0.05;
      o.mesh.scale.setScalar(s);
      o.edge.scale.setScalar(s * 1.1);
      o.mesh.position.y = o.n.pos[1] + bob;
      o.edge.position.copy(o.mesh.position); o.glow.position.copy(o.mesh.position);
      o.mesh.rotation.y = reducedMotion ? 0 : t * 0.25 + o.seed;
      o.edge.rotation.y = o.mesh.rotation.y;
      o.mesh.material.opacity += (o.op - o.mesh.material.opacity) * Math.min(1, dt * 8);
      o.edge.material.opacity = o.mesh.material.opacity * 0.85;
      o.glow.scale.setScalar(s * 6.5);
      o.glow.material.opacity = (id === sel ? 0.5 : o.op > 0.9 ? 0.22 : 0.04) * Math.min(1, o.k + 0.2);
    });
    terr.forEach((tr) => {
      tr.op += (tr.opT - tr.op) * Math.min(1, dt * 6);
      tr.cloud.material.opacity = tr.op;
    });
    edges.forEach((e) => {
      const cur = e.mat.opacity;
      e.mat.opacity = cur + (e.target - cur) * Math.min(1, dt * 8);
      e.arrow.material.opacity = e.mat.opacity;
      e.line.visible = e.arrow.visible = e.mat.opacity > 0.015;
      e.dot.visible = e.hot && !reducedMotion;
      if (e.dot.visible) e.dot.position.copy(e.curve.getPoint((t * 0.35 + e.phase) % 1));
    });
    if (sel) {
      const o = byId.get(sel);
      ringSel.visible = true;
      ringSel.position.copy(o.mesh.position);
      ringSel.quaternion.copy(camera.quaternion);
      ringSel.scale.setScalar(o.base * 5.4 * (1 + Math.sin(t * 2.4) * 0.04));
    } else ringSel.visible = false;
    ring.visible = view.level !== "concept" || (sel && byId.get(sel).n.cluster === "ground") || (sel && byId.get(sel).nbrs.has("domain"));

    renderer.render(scene, camera);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const place = (el, pos, show, dy) => {
      el.classList.toggle("hide", !show);
      if (!show) return;
      proj.copy(pos).project(camera);
      el.style.left = `${(proj.x * 0.5 + 0.5) * w}px`;
      el.style.top = `${(-proj.y * 0.5 + 0.5) * h + (dy || 0)}px`;
    };
    byId.forEach((o) => place(o.el, o.mesh.position, o.label && o.k > 0.4));
    terr.forEach((tr) => { tmp.copy(tr.centre); tmp.y += tr.radius * 0.8; place(tr.el, tmp, tr.label); });
    const showAxis = view.level === "overview" || (view.level === "cluster" && view.cluster === "way");
    axis.visible = showAxis;
    axisNotes.forEach((n) => place(n.el, n.pos, showAxis));
    running = false;
    if (busy) invalidate();
  };
  const invalidate = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
  controls.addEventListener("change", invalidate);
  controls.addEventListener("start", () => { controls.autoRotate = false; });

  // Fly the camera to a point at a distance, keeping the current viewing direction. `shift` slides the
  // view sideways (in units of distance) so the subject sits clear of the panel that opens beside it.
  const flyTo = (target, dist, shift = 0, dir) => {
    const d = (dir || camera.position.clone().sub(controls.target)).normalize();
    const aim = target.clone();
    if (shift && innerWidth > 900) aim.addScaledVector(new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0), dist * shift);
    const to = { pos: aim.clone().add(d.clone().multiplyScalar(dist)), target: aim };
    if (reducedMotion) { camera.position.copy(to.pos); controls.target.copy(to.target); invalidate(); return; }
    fly = { from: { pos: camera.position.clone(), target: controls.target.clone() }, to, t0: performance.now() };
    const step = (now) => {
      if (!fly) return;
      const k = Math.min(1, (now - fly.t0) / 950), e = ease(k);
      camera.position.lerpVectors(fly.from.pos, fly.to.pos, e);
      controls.target.lerpVectors(fly.from.target, fly.to.target, e);
      if (k >= 1) fly = null; else requestAnimationFrame(step);
      invalidate();
    };
    requestAnimationFrame(step);
  };

  // A click is a press and release that barely moved. Anything else is a drag.
  const ray = new THREE.Raycaster(), pt = new THREE.Vector2();
  const pick = (ev) => {
    const r = canvas.getBoundingClientRect();
    pt.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(pt, camera);
    const n = ray.intersectObjects([...byId.values()].map((o) => o.mesh), false)[0];
    if (n) return { id: n.object.userData.id };
    if (view.level === "overview") {
      const c = ray.intersectObjects([...terr.values()].map((x) => x.hit), false)[0];
      if (c) return { cluster: c.object.userData.cluster };
    }
    return {};
  };
  let down = null;
  canvas.addEventListener("pointerdown", (e) => { down = { x: e.clientX, y: e.clientY }; canvas.style.cursor = "grabbing"; });
  canvas.addEventListener("pointerup", (e) => {
    canvas.style.cursor = "grab";
    if (down && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 5) onPick(pick(e));
    down = null;
  });
  canvas.addEventListener("pointermove", (e) => {
    if (e.buttons) return;
    const p = pick(e);
    canvas.style.cursor = p.id || p.cluster ? "pointer" : "grab";
    onHover?.(p, e);
    const id = p.id || null, cl = p.cluster || null;
    if (id !== hovered || cl !== hoveredCluster) { hovered = id; hoveredCluster = cl; refresh(); }
  });
  canvas.addEventListener("pointerleave", () => { onHover?.({}); if (hovered || hoveredCluster) { hovered = null; hoveredCluster = null; refresh(); } });

  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(devicePixelRatio, pixelCap()));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w / h < 1 ? 60 : 42;
    camera.updateProjectionMatrix();
    invalidate();
  };
  new ResizeObserver(resize).observe(canvas);
  camera.position.copy(HOME.target).addScaledVector(HOME.dir.clone().normalize(), HOME.dist);
  controls.target.copy(HOME.target);

  return {
    setView(v) {
      view = { level: v.level, cluster: v.cluster || null, id: v.id || null };
      hovered = null; hoveredCluster = null;
      refresh();
      if (v.level === "overview") flyTo(HOME.target, HOME.dist, -0.2, HOME.dir);
      else if (v.level === "cluster") { const tr = terr.get(v.cluster); flyTo(tr.centre, Math.max(7, tr.radius * 2.3 + 2.5), 0.28); }
      else {
        // Frame the concept together with what it connects to, so its links are in view.
        const o = byId.get(v.id), pts = [o.mesh.position, ...[...o.nbrs].map((n) => byId.get(n).mesh.position)];
        const c = pts.reduce((acc, p) => acc.add(p), new THREE.Vector3()).multiplyScalar(1 / pts.length);
        const r = Math.max(...pts.map((p) => p.distanceTo(c)));
        flyTo(c, Math.max(6.2, r * 2.2 + 2.2), 0.3);
      }
    },
    recolor() { applyColors(); refresh(); },
    debug: () => ({ cam: camera.position.toArray(), target: controls.target.toArray(), view, fly: !!fly }),
  };
}
