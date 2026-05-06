import { useEffect, useState } from "react";

const COLOR_OPTIONS = [
  { name: "Burnt orange", hsl: "18 78% 44%" },
  { name: "Navy blue", hsl: "215 55% 22%" },
  { name: "Feisty red", hsl: "356 72% 48%" },
  { name: "Nude brown", hsl: "26 32% 58%" },
  { name: "Butter yellow", hsl: "44 78% 70%" },
  { name: "Olive", hsl: "70 30% 35%" },
  { name: "Forest green", hsl: "150 40% 25%" },
  { name: "Sage", hsl: "120 18% 55%" },
  { name: "Teal", hsl: "180 50% 32%" },
  { name: "Plum", hsl: "300 35% 30%" },
  { name: "Rose", hsl: "345 60% 60%" },
  { name: "Charcoal", hsl: "20 6% 18%" },
  { name: "Cobalt", hsl: "220 80% 45%" },
  { name: "Mustard", hsl: "42 80% 50%" },
  { name: "Coral", hsl: "12 80% 62%" },
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
