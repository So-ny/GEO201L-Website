import { fossilContent } from "../content/siteContent";
import { ImageWithSource } from "../components/ImageWithSource";

const Fossils = () => {
  return (
    <div className="section space-y-12">
      <header className="section-title">
        <span className="section-eyebrow">Biologic clocks</span>
        <h1 className="section-heading">Fossils and Correlation</h1>
        <p className="text-slate/80 max-w-3xl">
          Fossils appear and disappear in a known order. Index fossils with short ranges allow
          geologists to match rock layers across continents and narrow down ages.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {fossilContent.topics.map((topic) => (
          <div key={topic.title} className="card p-5 space-y-3">
            <h3 className="font-heading text-xl">{topic.title}</h3>
            <ul className="space-y-2 text-slate/80">
              {topic.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="section-title mb-0">
          <span className="section-eyebrow">Figures with citations</span>
          <h2 className="font-heading text-2xl">Fossil gallery (with required sources)</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {fossilContent.fossilImages.map((img) => (
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
        <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
          Reminder: Replace placeholder figures with properly sourced images. Every figure on this
          site must display a caption and source (author/organization + link).
        </p>
      </section>
    </div>
  );
};

export default Fossils;
