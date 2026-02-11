import { fossilContent } from "../content/siteContent";
import { ImageWithSource } from "../components/ImageWithSource";
import { AnimateIn } from "../components/AnimateIn";
import { Search, Bug, GitBranch, AlertTriangle } from "lucide-react";

const topicIcons = [Search, Bug, GitBranch];

const Fossils = () => {
  return (
    <div className="section space-y-12">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Biologic clocks</span>
          <h1 className="section-heading">Fossils and Correlation</h1>
          <p className="text-slate/70 max-w-3xl leading-relaxed">
            Fossils appear and disappear in a known order. Index fossils with short ranges allow
            geologists to match rock layers across continents and narrow down ages.
          </p>
        </header>
      </AnimateIn>

      <section className="grid md:grid-cols-3 gap-6">
        {fossilContent.topics.map((topic, idx) => {
          const Icon = topicIcons[idx] || Search;
          return (
            <AnimateIn key={topic.title} delay={idx * 100}>
              <div className="card p-6 space-y-4 h-full">
                <div className="w-11 h-11 rounded-2xl bg-paleozoic-light flex items-center justify-center">
                  <Icon size={20} className="text-paleozoic" />
                </div>
                <h3 className="font-heading text-xl">{topic.title}</h3>
                <ul className="space-y-2.5 text-slate/70">
                  {topic.points.map((p) => (
                    <li key={p} className="flex gap-2.5 leading-relaxed">
                      <span className="text-paleozoic font-bold mt-0.5">&#x2022;</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          );
        })}
      </section>

      <section className="space-y-5">
        <AnimateIn>
          <div className="section-title mb-0">
            <span className="section-eyebrow">Figures with citations</span>
            <h2 className="font-heading text-2xl">Fossil gallery (with required sources)</h2>
          </div>
        </AnimateIn>
        <div className="grid md:grid-cols-2 gap-6">
          {fossilContent.fossilImages.map((img, idx) => (
            <AnimateIn key={img.caption} delay={idx * 100}>
              <ImageWithSource
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                sourceLabel={img.sourceLabel}
                sourceUrl={img.sourceUrl}
                placeholder={img.placeholder}
              />
            </AnimateIn>
          ))}
        </div>
        <AnimateIn>
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              Reminder: Replace placeholder figures with properly sourced images. Every figure on this
              site must display a caption and source (author/organization + link).
            </p>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};

export default Fossils;
