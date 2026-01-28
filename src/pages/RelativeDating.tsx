import { relativeDatingContent } from "../content/siteContent";

const RockLayersDiagram = () => (
  <svg
    viewBox="0 0 320 220"
    role="img"
    aria-label="Simplified rock layer diagram showing unconformity and cross-cutting dike"
    className="w-full h-60 rounded-xl border border-slate/10 shadow-card bg-sandstone"
  >
    <rect x="0" y="0" width="320" height="220" fill="#f8f5ee" />
    <path d="M0 200 L320 170 L320 220 L0 220 Z" fill="#d6c4ad" />
    <path d="M0 170 L320 140 L320 170 L0 200 Z" fill="#bba98f" />
    <path d="M0 140 L320 110 L320 140 L0 170 Z" fill="#9d8a72" />
    <path d="M0 110 L320 80 L320 110 L0 140 Z" fill="#c7d2fe" />
    <path d="M0 80 L320 50 L320 80 L0 110 Z" fill="#93c5fd" />
    <path d="M140 40 L180 220" stroke="#4b5563" strokeWidth="10" />
    <line x1="0" y1="75" x2="320" y2="45" stroke="#f97316" strokeWidth="4" strokeDasharray="8 6" />
    <text x="20" y="65" fill="#f97316" fontSize="12" fontWeight="bold">
      Unconformity
    </text>
    <text x="190" y="140" fill="#334155" fontSize="12" fontWeight="bold">
      Cross-cutting dike
    </text>
  </svg>
);

const RelativeDating = () => {
  return (
    <div className="section space-y-12">
      <header className="section-title">
        <span className="section-eyebrow">Sequencing events</span>
        <h1 className="section-heading">Relative Dating</h1>
        <p className="text-slate/80 max-w-3xl">
          Relative dating establishes the order of events without assigning exact ages. Steno&apos;s
          principles, unconformities, and cross-cutting relationships help decode the sequence.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Steno&apos;s Laws in practice</h2>
          <ul className="space-y-3">
            {relativeDatingContent.stenosLaws.map((law) => (
              <li key={law} className="card p-4">
                <span className="font-semibold text-slate">{law}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <RockLayersDiagram />
          <p className="text-slate/80">
            Original diagram created for this site. Layers step upward to the right, a dashed line
            marks an unconformity, and a dark dike cuts across layers to illustrate cross-cutting.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {relativeDatingContent.unconformities.map((item) => (
          <div key={item.type} className="card p-5">
            <h3 className="font-heading text-xl">{item.type}</h3>
            <p className="text-slate/80">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="card p-6">
        <h3 className="font-heading text-xl mb-3">Key takeaways</h3>
        <ul className="grid md:grid-cols-3 gap-4">
          {relativeDatingContent.takeaways.map((item) => (
            <li key={item} className="bg-sandstone rounded-lg p-4 text-slate">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RelativeDating;
