import { Link } from "react-router-dom";
import { homeContent } from "../content/siteContent";
import { TimelinePreview } from "../components/TimelinePreview";
import { AnimateIn } from "../components/AnimateIn";
import { ArrowRight, Layers, Bone, Atom, Sparkles } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "Rocks record processes": Layers,
  "Fossils provide clues": Bone,
  "Atoms keep time": Atom
};

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-40 right-[15%] w-56 h-56 bg-sky/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-10 left-[40%] w-64 h-64 bg-precambrian/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />
        </div>

        <div className="section pt-16 md:pt-20 pb-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="space-y-7">
                <div className="pill bg-accent/10 text-accent border border-accent/20">
                  <Sparkles size={12} />
                  How Scientists Figure Out Earth&apos;s History
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-slate leading-[1.1] tracking-tight">
                  {homeContent.heroTitle}
                </h1>
                <p className="text-lg text-slate/70 leading-relaxed max-w-lg">
                  {homeContent.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  {homeContent.ctas.map((cta) => (
                    <Link key={cta.to} to={cta.to} className="btn btn-primary group">
                      {cta.label}
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                  <Link to="/case-studies" className="btn btn-secondary">
                    Explore case studies
                  </Link>
                </div>

                <div className="flex gap-8 pt-2">
                  <div>
                    <p className="font-heading font-bold text-2xl text-slate">4 tools</p>
                    <p className="text-sm text-slate/60">Relative, fossils, isotopes, time</p>
                  </div>
                  <div className="w-px bg-slate/10" />
                  <div>
                    <p className="font-heading font-bold text-2xl text-slate">Interactive</p>
                    <p className="text-sm text-slate/60">Decay simulator &amp; glossary</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="card p-7 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-sky/6 to-precambrian/4 pointer-events-none" />
                <div className="relative space-y-5">
                  <div className="pill bg-slate text-white">Evidence stack</div>
                  <h2 className="font-heading text-2xl">Why evidence matters</h2>
                  <p className="text-slate/70 leading-relaxed">
                    Each rock layer, fossil, and isotope ratio is a data point. Combining sequence,
                    fossils, and radiometric clocks builds a timeline that is both qualitative and
                    quantitative.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {homeContent.introCards.map((card) => (
                      <div
                        key={card.title}
                        className="bg-sandstone/80 rounded-2xl p-3 border border-white/60 hover:border-accent/20 transition-colors"
                      >
                        <p className="text-sm font-semibold text-slate">{card.title}</p>
                        <p className="text-xs text-slate/60 mt-1 leading-snug">{card.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Evidence cards */}
      <section className="section pt-6">
        <AnimateIn>
          <div className="section-title">
            <span className="section-eyebrow">Start exploring</span>
            <h2 className="section-heading">Pick your first evidence type</h2>
          </div>
        </AnimateIn>
        <div className="grid md:grid-cols-3 gap-6">
          {homeContent.introCards.map((card, idx) => {
            const Icon = iconMap[card.title] || Layers;
            return (
              <AnimateIn key={card.title} delay={idx * 100}>
                <Link
                  to={card.to}
                  className="card p-6 space-y-4 block group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-xl group-hover:text-accent transition-colors">{card.title}</h3>
                    <p className="text-slate/70 leading-relaxed">{card.text}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* Timeline preview */}
      <section className="section">
        <AnimateIn>
          <div className="section-title">
            <span className="section-eyebrow">Deep time preview</span>
            <h2 className="section-heading">Geologic Time at a glance</h2>
          </div>
        </AnimateIn>
        <AnimateIn delay={150}>
          <TimelinePreview items={homeContent.timelinePreview} />
        </AnimateIn>
      </section>
    </div>
  );
};

export default Home;
