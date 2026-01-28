import { caseStudies } from "../content/siteContent";
import { ImageWithSource } from "../components/ImageWithSource";

const CaseStudies = () => {
  return (
    <div className="section space-y-12">
      <header className="section-title">
        <span className="section-eyebrow">Evidence in context</span>
        <h1 className="section-heading">Case Studies</h1>
        <p className="text-slate/80 max-w-3xl">
          Explore how multiple lines of evidence combine to interpret past environments and events.
          Each case links observations to interpretations and highlights why it matters.
        </p>
      </header>

      <div className="space-y-8">
        {caseStudies.map((study) => (
          <article key={study.title} className="card p-6 space-y-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
              <h2 className="font-heading text-2xl">{study.title}</h2>
              <p className="text-sm text-slate/70">Why it matters: {study.importance}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-sandstone rounded-lg p-4">
                <h3 className="font-semibold mb-2">Observations</h3>
                <ul className="space-y-1">
                  {study.observations.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sandstone rounded-lg p-4">
                <h3 className="font-semibold mb-2">Interpretations</h3>
                <ul className="space-y-1">
                  {study.interpretations.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-sandstone rounded-lg p-4">
                <h3 className="font-semibold mb-2">Try it yourself</h3>
                <ul className="space-y-1">
                  {study.questions.map((q) => (
                    <li key={q} className="flex gap-2">
                      <span className="text-accent">?</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
          </article>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
