import { Link } from "react-router-dom";
import { homeContent } from "../content/siteContent";
import { TimelinePreview } from "../components/TimelinePreview";

const Home = () => {
  return (
    <div className="space-y-14">
      <section className="section pt-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="pill bg-accent/10 text-accent border border-accent/20">
              How Scientists Figure Out Earth&apos;s History
            </div>
            <h1 className="font-heading text-4xl md:text-5xl text-slate leading-tight">
              {homeContent.heroTitle}
            </h1>
            <p className="text-lg text-slate/80 leading-relaxed">{homeContent.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              {homeContent.ctas.map((cta) => (
                <Link key={cta.to} to={cta.to} className="btn btn-primary">
                  {cta.label}
                </Link>
              ))}
              <Link to="/case-studies" className="btn btn-secondary">
                Explore case studies
              </Link>
            </div>
            <div className="flex gap-6 text-sm text-slate/70">
              <div>
                <p className="font-semibold text-slate text-xl">4 tools</p>
                <p>Relative order, fossils, isotopes, timelines.</p>
              </div>
              <div>
                <p className="font-semibold text-slate text-xl">Try it</p>
                <p>Interactive decay + glossary search.</p>
              </div>
            </div>
          </div>

          <div className="card p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-sky/10 to-transparent pointer-events-none" />
            <div className="relative space-y-4">
              <div className="pill bg-slate text-white w-max">Evidence stack</div>
              <h2 className="font-heading text-2xl">Why evidence matters</h2>
              <p className="text-slate/80">
                Each rock layer, fossil, and isotope ratio is a data point. Combining sequence,
                fossils, and radiometric clocks builds a timeline that is both qualitative and
                quantitative.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {homeContent.introCards.map((card) => (
                  <div key={card.title} className="bg-sandstone rounded-2xl p-3 border border-white/60">
                    <p className="text-sm font-semibold">{card.title}</p>
                    <p className="text-xs text-slate/70 mt-1">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="section-eyebrow">Start exploring</span>
          <h2 className="section-heading">Pick your first evidence type</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {homeContent.introCards.map((card) => (
            <div key={card.title} className="card p-5 space-y-3 hover:-translate-y-1 transition">
              <p className="pill bg-sandstone text-slate/80 w-max">Core concept</p>
              <h3 className="font-heading text-xl">{card.title}</h3>
              <p className="text-slate/80">{card.text}</p>
              <Link to={card.to} className="text-accent font-semibold underline underline-offset-4">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span className="section-eyebrow">Deep time preview</span>
          <h2 className="section-heading">Geologic Time at a glance</h2>
        </div>
        <TimelinePreview items={homeContent.timelinePreview} />
      </section>
    </div>
  );
};

export default Home;
