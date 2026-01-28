type TimelineItem = {
  label: string;
  era: string;
  highlight: string;
};

export const TimelinePreview = ({ items }: { items: TimelineItem[] }) => (
  <div className="card p-6">
    <h3 className="font-heading text-xl mb-4">Geologic Time at a Glance</h3>
    <div className="flex flex-col md:flex-row md:items-stretch gap-4">
      {items.map((item, idx) => (
        <div
          key={item.label}
          className="flex-1 relative overflow-hidden rounded-2xl border border-slate/10 bg-gradient-to-br from-white via-sandstone to-white px-4 py-5"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,#d97706_0,transparent_35%)]" />
          <div className="relative space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" aria-hidden />
              <span className="font-semibold text-slate">{item.label}</span>
            </div>
            <p className="text-xs uppercase tracking-wide text-slate/60">{item.era}</p>
            <p className="text-slate text-sm leading-snug">{item.highlight}</p>
          </div>
          {idx < items.length - 1 && (
            <div className="hidden md:block absolute right-[-8px] top-0 h-full w-px bg-slate/10" />
          )}
        </div>
      ))}
    </div>
  </div>
);
