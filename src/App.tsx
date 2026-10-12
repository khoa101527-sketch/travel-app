import { useEffect, useLayoutEffect, useRef, useState, type ComponentType } from "react";
import gsap from "gsap";
import S16_172 from "./screens/S16_172";
import S16_198 from "./screens/S16_198";
import S16_238 from "./screens/S16_238";
import S13_2 from "./screens/S13_2";
import S14_116 from "./screens/S14_116";
import S18_225 from "./screens/S18_225";
import S18_351 from "./screens/S18_351";
import S19_318 from "./screens/S19_318";
import S19_393 from "./screens/S19_393";
import S19_481 from "./screens/S19_481";
import S20_362 from "./screens/S20_362";
import S20_478 from "./screens/S20_478";
import S20_564 from "./screens/S20_564";
import S20_670 from "./screens/S20_670";
import { enter, screenMotion, swipe, reduced } from "./motion";

const SCREENS = {
  loading: S16_172, onboarding: S16_198, login: S16_238, home: S13_2, explore: S14_116,
  chat: S18_225, lens: S18_351, tour: S19_318, booking: S19_393, success: S19_481,
  trips: S20_362, itinerary: S20_478, voucher: S20_564, profile: S20_670,
} satisfies Record<string, ComponentType>;
export type Screen = keyof typeof SCREENS;

const TABS: Record<string, Screen> = {
  "Item/Tổng quan": "home", "Item/Khám phá": "explore", "Item/Chuyến đi": "trips",
  "Item/Voucher": "voucher", "Item/Hồ sơ": "profile",
};

type Action = Screen | "back" | ((root: HTMLElement) => void);

// Hotspots keyed by Figma node id, following the prototype flow in the Figma file.
const LINKS: Partial<Record<Screen, Record<string, Action>>> = {
  onboarding: { "16:201": "login", "16:233": "login" },
  login: { "16:263": "home", "16:269": "home", "16:271": "home" },
  home: {
    "13:36": "chat", "I13:36;11:150": "lens", "I13:36;11:146": "chat",
    "13:84": "chat", "13:93": "explore", "13:95": "tour", "13:121": "tour", "13:13": "voucher",
  },
  explore: {
    "14:146": "tour", "14:189": (r) => swipe(r, -1), "14:196": (r) => swipe(r, 1),
    "14:192": (r) => swipe(r, 0), "14:124": "chat",
  },
  chat: { "18:228": "back", "18:299": "itinerary", "18:303": "itinerary", "18:308": "tour", "I18:323;11:150": "lens" },
  lens: { "18:356": "back", "18:418": "chat", "18:373": "tour" },
  tour: { "19:323": "back", "11:6": "booking" },
  booking: { "19:396": "back", "11:2": "success" },
  success: { "19:528": "trips", "19:532": "home" },
  trips: { "20:373": "itinerary", "20:425": "itinerary", "20:412": "chat", "20:408": "success", "20:416": "booking" },
  itinerary: { "20:483": "back", "20:560": "chat" },
  voucher: { "20:609": "booking", "20:620": "booking" },
  profile: { "20:726": "explore", "20:725": "explore" },
};

const fromHash = (): Screen => {
  const h = location.hash.slice(1);
  return h in SCREENS ? (h as Screen) : "loading";
};

export default function App() {
  const [stack, setStack] = useState<Screen[]>(() => [fromHash()]);
  const [dir, setDir] = useState<1 | -1 | 0>(0);
  const [scale, setScale] = useState(1);
  const [bare, setBare] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const current = stack[stack.length - 1];
  const Current = SCREENS[current];

  const go = (to: Screen, how: "push" | "tab" | "replace" = "push") => {
    setDir(how === "push" ? 1 : 0);
    setStack((s) => (how === "push" ? [...s, to] : [...s.slice(0, -1), to]));
  };
  const back = () => {
    setDir(-1);
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : ["home"]));
  };

  useEffect(() => {
    try { history.replaceState(null, "", `#${current}`); } catch {}
    if (current !== "loading") return;
    const t = setTimeout(() => go("onboarding", "replace"), reduced() ? 600 : 2400);
    return () => clearTimeout(t);
  }, [current]);

  useEffect(() => {
    const fit = () => {
      const mobile = innerWidth < 500;
      setBare(mobile);
      setScale(mobile ? Math.min(innerWidth / 390, innerHeight / 844) : Math.min(1, (innerHeight - 40) / 844, (innerWidth - 40) / 390));
    };
    fit();
    addEventListener("resize", fit);
    return () => removeEventListener("resize", fit);
  }, []);

  useLayoutEffect(() => {
    const root = screenRef.current!;
    const links = LINKS[current] ?? {};
    Object.keys(links).forEach((id) => root.querySelectorAll(`[data-node-id="${CSS.escape(id)}"]`).forEach((el) => el.classList.add("hot")));
    root.querySelectorAll('[data-name^="Item/"]').forEach((el) => el.classList.add("hot"));
    const ctx = gsap.context(() => {
      enter(root, dir);
      screenMotion(current, root);
    }, root);
    return () => ctx.revert();
  }, [current]);

  const onClick = (e: React.MouseEvent) => {
    const root = screenRef.current!;
    if (root.dataset.dragging === "1") return;
    const links = LINKS[current] ?? {};
    for (let el = e.target as HTMLElement | null; el && el !== root; el = el.parentElement) {
      const action = el.dataset.nodeId && links[el.dataset.nodeId];
      if (action) {
        if (action === "back") back();
        else if (typeof action === "function") action(root);
        else go(action);
        return;
      }
      const tab = el.dataset.name && TABS[el.dataset.name];
      if (tab) return tab !== current && go(tab, "tab");
    }
  };

  return (
    <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
      <div style={{ width: 390 * scale, height: 844 * scale }}>
        <div className={`phone${bare ? " bare" : ""}`} style={{ transform: `scale(${scale})` }}>
          <div key={stack.length + current} ref={screenRef} className="screen" onClick={onClick}>
            <Current />
          </div>
        </div>
      </div>
    </div>
  );
}
