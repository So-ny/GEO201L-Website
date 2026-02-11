import { relativeDatingContent } from "../content/siteContent";
import { AnimateIn } from "../components/AnimateIn";
import { AlertTriangle } from "lucide-react";

const RockLayersDiagram = () => (
  <svg
    viewBox="0 0 320 220"
    role="img"
    aria-label="Simplified rock layer diagram showing unconformity and cross-cutting dike"
    className="w-full h-60 rounded-2xl border border-slate/10 shadow-card bg-gradient-to-b from-sandstone to-white overflow-hidden"
  >
    <defs>
      <linearGradient id="layer1" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#d6c4ad" />
        <stop offset="100%" stopColor="#c9b89e" />
      </linearGradient>
      <linearGradient id="layer2" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#bba98f" />
        <stop offset="100%" stopColor="#ae9c82" />
      </linearGradient>
      <linearGradient id="layer3" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#9d8a72" />
        <stop offset="100%" stopColor="#8f7d66" />
      </linearGradient>
      <linearGradient id="layer4" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#c7d2fe" />
        <stop offset="100%" stopColor="#a5b4fc" />
      </linearGradient>
      <linearGradient id="layer5" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#93c5fd" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="320" height="220" fill="#f8f5ee" />
    <path d="M0 200 L320 170 L320 220 L0 220 Z" fill="url(#layer1)" opacity="0.9" />
    <path d="M0 170 L320 140 L320 170 L0 200 Z" fill="url(#layer2)" opacity="0.9" />
    <path d="M0 140 L320 110 L320 140 L0 170 Z" fill="url(#layer3)" opacity="0.9" />
    <path d="M0 110 L320 80 L320 110 L0 140 Z" fill="url(#layer4)" opacity="0.9" />
    <path d="M0 80 L320 50 L320 80 L0 110 Z" fill="url(#layer5)" opacity="0.9" />
    <path d="M140 40 L180 220" stroke="#4b5563" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
    <line x1="0" y1="75" x2="320" y2="45" stroke="#f97316" strokeWidth="3" strokeDasharray="8 6" />
    <rect x="10" y="46" width="105" height="22" rx="6" fill="rgba(249,115,22,0.15)" />
    <text x="18" y="62" fill="#f97316" fontSize="12" fontWeight="bold">
      Unconformity
    </text>
    <rect x="182" y="123" width="128" height="22" rx="6" fill="rgba(51,65,85,0.1)" />
    <text x="190" y="138" fill="#334155" fontSize="12" fontWeight="bold">
      Cross-cutting dike
    </text>
  </svg>
);

const RelativeDating = () => {
  return (
    <div className="section space-y-12">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Sequencing events</span>
          <h1 className="section-heading">Relative Dating</h1>
          <p className="text-slate/70 max-w-3xl leading-relaxed">
            Relative dating establishes the order of events without assigning exact ages. Steno&apos;s
            principles, unconformities, and cross-cutting relationships help decode the sequence.
          </p>
        </header>
      </AnimateIn>

      <section className="grid md:grid-cols-2 gap-8 items-start">
        <AnimateIn>
          <div className="space-y-4">
            <h2 className="font-heading text-2xl">Steno&apos;s Laws in practice</h2>
            <ul className="space-y-3">
              {relativeDatingContent.stenosLaws.map((law, idx) => (
                <li key={law} className="card p-4 flex items-start gap-3">
                  <span className="number-badge shrink-0 mt-0.5">{idx + 1}</span>
                  <span className="text-slate/80 leading-relaxed">{law}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimateIn>
        <AnimateIn delay={150}>
          <div className="space-y-4 sticky top-28">
            <RockLayersDiagram />
            <p className="text-sm text-slate/60 leading-relaxed">
              Original diagram created for this site. Layers step upward to the right, a dashed line
              marks an unconformity, and a dark dike cuts across layers to illustrate cross-cutting.
            </p>
          </div>
        </AnimateIn>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {relativeDatingContent.unconformities.map((item, idx) => (
          <AnimateIn key={item.type} delay={idx * 100}>
            <div className="card p-6 space-y-3 border-t-4 border-t-accent/40">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center">
                <AlertTriangle size={18} className="text-accent" />
              </div>
              <h3 className="font-heading text-xl">{item.type}</h3>
              <p className="text-slate/70 leading-relaxed">{item.description}</p>
            </div>
          </AnimateIn>
        ))}
      </section>

      <AnimateIn>
        <section className="card p-7 bg-gradient-to-br from-white to-sandstone/50">
          <h3 className="font-heading text-xl mb-4">Key takeaways</h3>
          <ul className="grid md:grid-cols-3 gap-4">
            {relativeDatingContent.takeaways.map((item, idx) => (
              <li key={item} className="flex items-start gap-3 bg-white/70 rounded-xl p-4 border border-slate/5">
                <span className="number-badge shrink-0">{idx + 1}</span>
                <span className="text-slate/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </AnimateIn>
    </div>
  );
};

export default RelativeDating;
