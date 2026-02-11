import { HalfLifeSlider } from "../components/HalfLifeSlider";
import { radiometricContent } from "../content/siteContent";
import { AnimateIn } from "../components/AnimateIn";
import { Atom, Zap, Clock } from "lucide-react";

const systemIcons = [Atom, Zap, Clock];
const systemColors = [
  { bg: "bg-precambrian-light", text: "text-precambrian", border: "border-t-precambrian/40" },
  { bg: "bg-mesozoic-light", text: "text-mesozoic", border: "border-t-mesozoic/40" },
  { bg: "bg-paleozoic-light", text: "text-paleozoic", border: "border-t-paleozoic/40" }
];

const RadiometricDating = () => {
  return (
    <div className="section space-y-12">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Atomic clocks</span>
          <h1 className="section-heading">Radiometric Dating</h1>
          <p className="text-slate/70 max-w-3xl leading-relaxed">
            Radioactive isotopes decay at known rates. By measuring the ratio of parent to daughter
            isotopes, geologists calculate absolute ages and anchor the geologic time scale.
          </p>
        </header>
      </AnimateIn>

      <section className="grid md:grid-cols-3 gap-6">
        {radiometricContent.systems.map((system, idx) => {
          const Icon = systemIcons[idx] || Atom;
          const color = systemColors[idx];
          return (
            <AnimateIn key={system.name} delay={idx * 100}>
              <div className={`card p-6 space-y-3 border-t-4 ${color.border} h-full`}>
                <div className={`w-11 h-11 rounded-2xl ${color.bg} flex items-center justify-center`}>
                  <Icon size={20} className={color.text} />
                </div>
                <h3 className="font-heading text-xl">{system.name}</h3>
                <p className="text-accent font-semibold text-sm">{system.range}</p>
                <p className="text-slate/70 leading-relaxed text-sm">{system.notes}</p>
              </div>
            </AnimateIn>
          );
        })}
      </section>

      <AnimateIn>
        <HalfLifeSlider
          isotope={radiometricContent.sliderDefault.isotope}
          halfLife={radiometricContent.sliderDefault.halfLifeYears}
        />
      </AnimateIn>

      <AnimateIn>
        <section className="card p-7 bg-gradient-to-br from-white to-sandstone/50 space-y-4">
          <h3 className="font-heading text-xl">How decay turns into a date</h3>
          <ol className="space-y-3">
            {[
              "Crystals form and lock in parent isotopes.",
              "Clock starts when the mineral cools below its closure temperature.",
              "Measure present-day parent/daughter ratio.",
              "Apply decay equation to compute time since clock started.",
              "Cross-check with other isotopic systems and field relationships."
            ].map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span className="number-badge shrink-0">{idx + 1}</span>
                <span className="text-slate/80 leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </AnimateIn>
    </div>
  );
};

export default RadiometricDating;
