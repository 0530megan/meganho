import { useEffect, useState } from "react";

const COLOR_OPTIONS = [
  { name: "Burnt orange", hsl: "18 78% 44%" },
  { name: "Cherry red", hsl: "354 80% 45%" },
  { name: "Crimson", hsl: "348 83% 38%" },
  { name: "Feisty red", hsl: "356 72% 48%" },
  { name: "Tomato", hsl: "9 79% 52%" },
  { name: "Coral", hsl: "12 80% 62%" },
  { name: "Hot pink", hsl: "330 85% 55%" },
  { name: "Magenta", hsl: "320 80% 45%" },
  { name: "Fuchsia", hsl: "300 85% 50%" },
  { name: "Plum", hsl: "300 35% 30%" },
  { name: "Royal purple", hsl: "265 70% 45%" },
  { name: "Indigo", hsl: "240 70% 40%" },
  { name: "Navy blue", hsl: "215 65% 22%" },
  { name: "Cobalt", hsl: "220 80% 45%" },
  { name: "Electric blue", hsl: "210 95% 50%" },
  { name: "Sky blue", hsl: "200 80% 55%" },
  { name: "Teal", hsl: "180 60% 35%" },
  { name: "Emerald", hsl: "150 70% 35%" },
  { name: "Forest green", hsl: "150 40% 25%" },
  { name: "Lime", hsl: "85 75% 45%" },
  { name: "Olive", hsl: "70 30% 35%" },
  { name: "Mustard", hsl: "42 85% 50%" },
  { name: "Butter yellow", hsl: "44 78% 70%" },
  { name: "Gold", hsl: "45 90% 50%" },
  { name: "Tangerine", hsl: "28 95% 55%" },
  { name: "Rose", hsl: "345 60% 60%" },
  { name: "Blush", hsl: "350 60% 80%" },
  { name: "Nude brown", hsl: "26 32% 58%" },
  { name: "Chocolate", hsl: "20 50% 25%" },
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
    document.documentElement.style.setProperty("--accent-burnt", active);
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
