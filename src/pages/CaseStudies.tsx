import { caseStudies } from "../content/siteContent";
import { ImageWithSource } from "../components/ImageWithSource";
import { AnimateIn } from "../components/AnimateIn";
import { Eye, Lightbulb, HelpCircle } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="section space-y-12">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Evidence in context</span>
          <h1 className="section-heading">Case Studies</h1>
          <p className="text-slate/70 max-w-3xl leading-relaxed">
            Explore how multiple lines of evidence combine to interpret past environments and events.
            Each case links observations to interpretations and highlights why it matters.
          </p>
        </header>
      </AnimateIn>

      <div className="space-y-10">
        {caseStudies.map((study, studyIdx) => (
          <AnimateIn key={study.title} delay={studyIdx * 100}>
            <article className="card p-7 space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
                <div className="flex items-center gap-3">
                  <span className="number-badge text-base">{studyIdx + 1}</span>
                  <h2 className="font-heading text-2xl">{study.title}</h2>
                </div>
                <p className="text-sm text-slate/60 bg-sandstone/60 rounded-full px-3 py-1 w-fit">
                  {study.importance}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-sky/5 border border-sky/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-sky" />
                    <h3 className="font-semibold text-sm">Observations</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {study.observations.map((o) => (
                      <li key={o} className="flex gap-2 text-slate/70 leading-relaxed">
                        <span className="text-sky font-bold mt-0.5">&#x2022;</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent/5 border border-accent/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={16} className="text-accent" />
                    <h3 className="font-semibold text-sm">Interpretations</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {study.interpretations.map((o) => (
                      <li key={o} className="flex gap-2 text-slate/70 leading-relaxed">
                        <span className="text-accent font-bold mt-0.5">&#x2022;</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-precambrian/5 border border-precambrian/10 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle size={16} className="text-precambrian" />
                    <h3 className="font-semibold text-sm">Try it yourself</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {study.questions.map((q) => (
                      <li key={q} className="flex gap-2 text-slate/70 leading-relaxed">
                        <span className="text-precambrian font-bold mt-0.5">?</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {study.images.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {study.images.map((img) => (
                    <ImageWithSource
                      key={img.caption}
                      src={img.src}
                      alt={img.alt}
                      caption={img.caption}
                      sourceLabel={img.sourceLabel}
                      sourceUrl={img.sourceUrl}
                      placeholder={img.placeholder}
                    />
                  ))}
                </div>
              )}
            </article>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
