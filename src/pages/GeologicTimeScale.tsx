import { useState } from "react";
import { timeScaleContent } from "../content/siteContent";
import { AnimateIn } from "../components/AnimateIn";

const eraColors: Record<string, { bg: string; border: string; accent: string; light: string; dot: string }> = {
  Precambrian: { bg: "bg-precambrian-light", border: "border-precambrian", accent: "text-precambrian", light: "bg-precambrian/10", dot: "bg-precambrian" },
  Paleozoic: { bg: "bg-paleozoic-light", border: "border-paleozoic", accent: "text-paleozoic", light: "bg-paleozoic/10", dot: "bg-paleozoic" },
  Mesozoic: { bg: "bg-mesozoic-light", border: "border-mesozoic", accent: "text-mesozoic", light: "bg-mesozoic/10", dot: "bg-mesozoic" },
  Cenozoic: { bg: "bg-cenozoic-light", border: "border-cenozoic", accent: "text-cenozoic", light: "bg-cenozoic/10", dot: "bg-cenozoic" }
};

const GeologicTimeScale = () => {
  const [activeEra, setActiveEra] = useState(timeScaleContent.eras[0]);
  const color = eraColors[activeEra.name] || eraColors.Precambrian;

  return (
    <div className="section space-y-12">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Deep time</span>
          <h1 className="section-heading">Geologic Time Scale</h1>
          <p className="text-slate/70 max-w-3xl leading-relaxed">
            The geologic time scale organizes Earth history into nested intervals. Fossils and
            radiometric ages anchor its boundaries.
          </p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <section className="card p-7 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeScaleContent.eras.map((era) => {
              const ec = eraColors[era.name] || eraColors.Precambrian;
              const isActive = activeEra.name === era.name;
              return (
                <button
                  key={era.name}
                  onClick={() => setActiveEra(era)}
                  className={`text-left rounded-2xl p-4 border-2 transition-all duration-300 ${
                    isActive
                      ? `${ec.border} ${ec.bg} shadow-card`
                      : "border-slate/10 bg-sandstone/50 hover:border-slate/20"
                  }`}
                  aria-pressed={isActive}
                >
                  <p className="text-xs uppercase tracking-wide text-slate/50">{era.range}</p>
                  <p className="font-heading text-lg mt-1">{era.name}</p>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <div className="h-3 bg-slate/5 rounded-full overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-500 ease-out ${color.dot}`}
                style={{
                  width: `${(timeScaleContent.eras.indexOf(activeEra) + 1) * (100 / timeScaleContent.eras.length)}%`
                }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {timeScaleContent.eras.map((era) => {
                const ec = eraColors[era.name] || eraColors.Precambrian;
                return (
                  <span
                    key={era.name}
                    className={`text-xs font-medium transition-colors ${
                      activeEra.name === era.name ? ec.accent : "text-slate/30"
                    }`}
                  >
                    {era.name}
                  </span>
                );
              })}
            </div>
          </div>

          <div className={`rounded-2xl p-6 transition-colors duration-300 ${color.bg} border ${color.border}/20`}>
            <div className="flex items-start gap-4">
              <div className={`w-4 h-4 rounded-full ${color.dot} mt-1.5 shrink-0`} />
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-heading text-2xl">{activeEra.name}</h3>
                  <p className="text-sm text-slate/60 mt-1">{activeEra.range}</p>
                </div>
                <ul className="space-y-2">
                  {activeEra.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate/80 leading-relaxed">
                      <span className={`mt-1.5 w-2 h-2 rounded-full ${color.dot} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
};

export default GeologicTimeScale;
