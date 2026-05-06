import { useEffect, useState } from "react";

const COLOR_OPTIONS = [
  { name: "Cherry red", hsl: "354 80% 45%" },
  { name: "Crimson", hsl: "348 83% 38%" },
  { name: "Scarlet", hsl: "8 85% 48%" },
  { name: "Vermilion", hsl: "12 88% 50%" },
  { name: "Tomato", hsl: "9 79% 52%" },
  { name: "Brick red", hsl: "6 60% 38%" },
  { name: "Rust", hsl: "14 70% 40%" },
  { name: "Burgundy", hsl: "350 60% 28%" },
  { name: "Wine", hsl: "345 55% 25%" },
  { name: "Oxblood", hsl: "352 70% 22%" },
  { name: "Maroon", hsl: "356 65% 30%" },
  { name: "Ruby", hsl: "340 80% 40%" },
  { name: "Carmine", hsl: "350 85% 42%" },
  { name: "Coral red", hsl: "4 78% 58%" },
  { name: "Rose red", hsl: "346 75% 50%" },
  { name: "Poppy", hsl: "2 82% 52%" },
  { name: "Chili", hsl: "6 90% 45%" },
  { name: "Burnt orange", hsl: "18 78% 44%" },
  { name: "Feisty red", hsl: "356 72% 48%" },
  { name: "Navy blue", hsl: "215 65% 22%" },
  { name: "Cobalt", hsl: "220 80% 45%" },
  { name: "Emerald", hsl: "150 70% 35%" },
  { name: "Forest green", hsl: "150 40% 25%" },
  { name: "Mustard", hsl: "42 85% 50%" },
  { name: "Plum", hsl: "300 35% 30%" },
  { name: "Charcoal", hsl: "20 6% 18%" },
];

const STORAGE_KEY = "accent-burnt-override";

export const AccentColorPicker = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(() => {
    if (typeof window === "undefined") return COLOR_OPTIONS[0].hsl;
    return localStorage.getItem(STORAGE_KEY) ?? COLOR_OPTIONS[0].hsl;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent-burnt", active);
    // Parse "H S% L%" and derive shades
    const match = active.match(/^(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/);
    if (match) {
      const [, h, s, l] = match;
      const lNum = parseFloat(l);
      const dark = Math.max(8, lNum - 15);
      const darker = Math.max(4, lNum - 28);
      const light = Math.min(94, lNum + 18);
      const lighter = Math.min(98, lNum + 32);
      root.style.setProperty("--accent-burnt-darker", `${h} ${s}% ${darker}%`);
      root.style.setProperty("--accent-burnt-dark", `${h} ${s}% ${dark}%`);
      root.style.setProperty("--accent-burnt-light", `${h} ${s}% ${light}%`);
      root.style.setProperty("--accent-burnt-lighter", `${h} ${s}% ${lighter}%`);
    }
    localStorage.setItem(STORAGE_KEY, active);
  }, [active]);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono">
      {open && (
        <div className="mb-2 max-w-[280px] bg-paper border border-ink shadow-[6px_6px_0_0_hsl(var(--ink))] p-3">
          <p className="text-[10px] small-caps text-ink-mute mb-2">Accent colour</p>
          <div className="grid grid-cols-5 gap-2">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c.hsl}
                title={c.name}
                onClick={() => setActive(c.hsl)}
                className={`size-8 border transition-transform hover:scale-110 ${
                  active === c.hsl ? "border-ink ring-2 ring-ink" : "border-ink/40"
                }`}
                style={{ background: `hsl(${c.hsl})` }}
              />
            ))}
          </div>
          <p className="text-[10px] small-caps text-ink-mute mt-2">
            {COLOR_OPTIONS.find((c) => c.hsl === active)?.name}
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="bg-ink text-paper text-[10px] small-caps px-3 py-2 shadow-[4px_4px_0_0_hsl(var(--accent-burnt))]"
      >
        {open ? "Close" : "Accent ✿"}
      </button>
    </div>
  );
};
