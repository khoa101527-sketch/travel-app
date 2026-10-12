import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import type { Screen } from "./App";

gsap.registerPlugin(Draggable);

export const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

const q = (root: HTMLElement, sel: string) => Array.from(root.querySelectorAll<HTMLElement>(sel));
const node = (root: HTMLElement, id: string) => root.querySelector<HTMLElement>(`[data-node-id="${CSS.escape(id)}"]`);

/** Screen transition + staggered entrance of the frame's top-level layers. */
export function enter(root: HTMLElement, dir: number) {
  if (reduced()) return;
  gsap.fromTo(root, { xPercent: dir * 14, opacity: dir ? 0.4 : 0 }, { xPercent: 0, opacity: 1, duration: 0.45, ease: "power3.out", clearProps: "transform,opacity" });
  const layers = Array.from(root.firstElementChild!.children).filter((el) => !(el as HTMLElement).dataset.name?.startsWith("Tab Bar"));
  gsap.from(layers, { y: 18, opacity: 0, duration: 0.5, stagger: 0.03, ease: "power2.out", delay: 0.05, clearProps: "transform,opacity" });
}

/** Like gsap.from, but with explicit end values so it wins over enter()'s stagger on the same layer. */
const fromIn = (el: Element | null, vars: gsap.TweenVars) =>
  gsap.fromTo(el, vars, { x: 0, y: 0, scale: 1, rotation: 0, opacity: 1, overwrite: "auto", duration: 0.7, ease: "back.out(1.6)", ...pick(vars) });
const pick = ({ duration, ease, delay }: gsap.TweenVars) => Object.fromEntries(Object.entries({ duration, ease, delay }).filter(([, v]) => v !== undefined));

/** Ambient + signature motion per screen. */
export function screenMotion(screen: Screen, root: HTMLElement) {
  if (reduced()) return;
  // Lali bobs gently wherever she appears large enough to notice.
  q(root, '[data-name="Mascot / Lali"], [data-node-id="8:19"], [data-node-id="8:36"]')
    .filter((el) => el.offsetWidth >= 70)
    .forEach((el, i) => gsap.to(el, { y: -7, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 + i * 0.2 }));

  switch (screen) {
    case "loading": {
      const bar = node(root, "16:196")!;
      gsap.fromTo(bar, { width: 0 }, { width: 160, duration: 2.1, ease: "power1.inOut" });
      fromIn(node(root, "16:193"), { scale: 0.6, opacity: 0, duration: 0.8, ease: "back.out(2)", delay: 0.3 });
      q(root, '[data-name="Ellipse"]').forEach((el, i) => gsap.to(el, { x: i % 2 ? -20 : 20, y: 14, duration: 3 + i, yoyo: true, repeat: -1, ease: "sine.inOut" }));
      break;
    }
    case "onboarding":
      ["16:202", "16:203", "16:204"].forEach((id, i) => fromIn(node(root, id), { y: 60, rotation: (i - 1) * 12, opacity: 0, duration: 0.8, ease: "back.out(1.6)", delay: 0.15 + i * 0.12 }));
      ["16:206", "16:208", "16:210"].forEach((id, i) => gsap.to(node(root, id), { y: -8, duration: 1.6 + i * 0.3, yoyo: true, repeat: -1, ease: "sine.inOut" }));
      break;
    case "home":
      gsap.to(node(root, "13:3"), { rotation: 360, duration: 40, repeat: -1, ease: "none" });
      gsap.from(q(root, '[data-node-id="13:94"] > a'), { x: 80, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: "power3.out" });
      break;
    case "explore":
      setupSwipe(root);
      break;
    case "chat":
      gsap.from(q(root, '[data-node-id="18:254"] > *'), { y: 24, opacity: 0, scale: 0.96, duration: 0.5, stagger: 0.35, ease: "back.out(1.4)", delay: 0.2 });
      break;
    case "lens": {
      gsap.to(q(root, '[data-name="Focus"]'), { scale: 0.85, duration: 0.9, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(node(root, "18:370"), { scale: 1.35, opacity: 0.4, duration: 1.1, yoyo: true, repeat: -1, ease: "sine.inOut" });
      fromIn(node(root, "18:373"), { y: 40, opacity: 0, scale: 0.9, duration: 0.7, delay: 0.9, ease: "back.out(1.6)" });
      gsap.to(node(root, "18:414"), { scale: 1.08, duration: 0.7, yoyo: true, repeat: -1, ease: "sine.inOut" });
      break;
    }
    case "success": {
      fromIn(node(root, "19:491"), { scale: 0.3, opacity: 0, duration: 0.9, ease: "elastic.out(1, 0.5)", delay: 0.1 });
      q(root, '[data-name="Confetti"]').forEach((el) => {
        gsap.fromTo(el, { y: -160, rotation: gsap.utils.random(-180, 180), opacity: 0 }, { y: 0, rotation: 0, opacity: 1, duration: gsap.utils.random(0.9, 1.6), ease: "bounce.out", delay: gsap.utils.random(0, 0.4) });
      });
      fromIn(node(root, "19:511"), { y: 60, opacity: 0, duration: 0.7, delay: 0.5, ease: "power3.out" });
      break;
    }
    case "profile":
      gsap.from(node(root, "20:689"), { width: 0, duration: 1.2, delay: 0.4, ease: "power2.out" });
      gsap.to(node(root, "20:677"), { rotation: 360, duration: 18, repeat: -1, ease: "none" });
      break;
    case "voucher":
      gsap.from(q(root, '[data-node-id="20:601"] > *'), { x: -40, opacity: 0, duration: 0.5, stagger: 0.08, delay: 0.2, ease: "power3.out" });
      break;
  }
}

/* ---------- Khám phá: Tinder-style swipe ---------- */

const card = (root: HTMLElement) => node(root, "14:146")!;

function setupSwipe(root: HTMLElement) {
  const el = card(root);
  Draggable.create(el, {
    type: "x,y",
    onDrag() {
      root.dataset.dragging = "1";
      gsap.set(el, { rotation: this.x / 18 });
    },
    onRelease() {
      const x = this.x;
      if (Math.abs(x) > 110) swipe(root, x > 0 ? 1 : -1);
      else gsap.to(el, { x: 0, y: 0, rotation: 0, duration: 0.5, ease: "back.out(2)" });
      // Let the synthetic click after a drag pass without navigating.
      setTimeout(() => delete root.dataset.dragging, 50);
    },
  });
}

/** dir 1 = save (right), -1 = skip (left), 0 = undo (bring the card back). */
export function swipe(root: HTMLElement, dir: number) {
  const el = card(root);
  const btn = node(root, dir > 0 ? "14:196" : dir < 0 ? "14:189" : "14:192");
  gsap.fromTo(btn, { scale: 0.85 }, { scale: 1, duration: 0.4, ease: "back.out(3)" });
  if (reduced()) return;
  const back = () => gsap.fromTo(el, { x: 0, y: 30, rotation: 0, scale: 0.9, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.6)" });
  if (!dir) return back();
  gsap.to(el, { x: dir * 460, rotation: dir * 28, opacity: 0, duration: 0.45, ease: "power2.in", onComplete: back });
  gsap.fromTo([node(root, "14:144"), node(root, "14:145")], { scale: 0.96 }, { scale: 1, duration: 0.6, ease: "back.out(2)", delay: 0.2 });
}
