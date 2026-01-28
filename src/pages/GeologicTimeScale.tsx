import { useState } from "react";
import { timeScaleContent } from "../content/siteContent";

const GeologicTimeScale = () => {
  const [activeEra, setActiveEra] = useState(timeScaleContent.eras[0]);

  return (
    <div className="section space-y-12">
      <header className="section-title">
        <span className="section-eyebrow">Deep time</span>
        <h1 className="section-heading">Geologic Time Scale</h1>
        <p className="text-slate/80 max-w-3xl">
          The geologic time scale organizes Earth history into nested intervals. Fossils and
          radiometric ages anchor its boundaries.
        </p>
      </header>

      <section className="card p-6 space-y-6">
        <div className="grid md:grid-cols-4 gap-4">
          {timeScaleContent.eras.map((era) => (
            <button
              key={era.name}
              onClick={() => setActiveEra(era)}
              className={`text-left rounded-xl p-4 border transition ${
                activeEra.name === era.name
                  ? "border-accent bg-blue-50 shadow-card"
                  : "border-slate/10 bg-sandstone hover:border-slate/30"
              }`}
              aria-pressed={activeEra.name === era.name}
            >
              <p className="text-xs uppercase tracking-wide text-slate/60">{era.range}</p>
              <p className="font-heading text-xl">{era.name}</p>
            </button>
          ))}
        </div>

        <div className="relative h-2 bg-slate/10 rounded-full">
          <div
            className="absolute h-2 bg-accent rounded-full transition-all"
            style={{
              width: `${(timeScaleContent.eras.indexOf(activeEra) + 1) * (100 / timeScaleContent.eras.length)}%`
            }}
          />
        </div>

        <div className="bg-sandstone rounded-xl p-5">
          <h3 className="font-heading text-2xl mb-2">{activeEra.name}</h3>
          <p className="text-sm text-slate/70 mb-3">Range: {activeEra.range}</p>
          <ul className="list-disc list-inside space-y-1 text-slate">
            {activeEra.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GeologicTimeScale;
