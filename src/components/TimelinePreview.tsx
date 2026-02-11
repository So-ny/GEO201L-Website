type TimelineItem = {
  label: string;
  era: string;
  highlight: string;
};

const eraColorMap: Record<string, { dot: string; glow: string; bg: string }> = {
  Precambrian: { dot: "bg-precambrian", glow: "#7c3aed", bg: "from-precambrian/5" },
  Paleozoic: { dot: "bg-paleozoic", glow: "#059669", bg: "from-paleozoic/5" },
  Mesozoic: { dot: "bg-mesozoic", glow: "#d97706", bg: "from-mesozoic/5" },
  Cenozoic: { dot: "bg-cenozoic", glow: "#e11d48", bg: "from-cenozoic/5" }
};

export const TimelinePreview = ({ items }: { items: TimelineItem[] }) => (
  <div className="card p-7 space-y-5">
    <h3 className="font-heading text-xl">Geologic Time at a Glance</h3>

    {/* Connecting timeline bar */}
    <div className="hidden md:flex items-center px-4">
      {items.map((item, idx) => {
        const color = eraColorMap[item.label] || eraColorMap.Precambrian;
        return (
          <div key={item.label} className="flex-1 flex items-center">
            <div className={`w-3 h-3 rounded-full ${color.dot} shrink-0 shadow-sm`} />
            {idx < items.length - 1 && (
              <div className="flex-1 h-0.5 bg-gradient-to-r from-slate/15 to-slate/15" />
            )}
          </div>
        );
      })}
    </div>

    <div className="grid md:grid-cols-4 gap-4">
      {items.map((item) => {
        const color = eraColorMap[item.label] || eraColorMap.Precambrian;
        return (
          <div
            key={item.label}
            className={`relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br ${color.bg} via-white to-white px-5 py-5 hover:shadow-card transition-shadow`}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-15"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${color.glow} 0, transparent 40%)`
              }}
            />
            <div className="relative space-y-2.5">
              <div className="flex items-center gap-2.5">
                <span className={`w-2.5 h-2.5 rounded-full ${color.dot}`} aria-hidden />
                <span className="font-heading font-semibold text-slate">{item.label}</span>
              </div>
              <p className="text-xs uppercase tracking-wide text-slate/50 font-medium">{item.era}</p>
              <p className="text-slate/70 text-sm leading-relaxed">{item.highlight}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
