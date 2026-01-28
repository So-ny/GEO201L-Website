import { HalfLifeSlider } from "../components/HalfLifeSlider";
import { radiometricContent } from "../content/siteContent";

const RadiometricDating = () => {
  return (
    <div className="section space-y-12">
      <header className="section-title">
        <span className="section-eyebrow">Atomic clocks</span>
        <h1 className="section-heading">Radiometric Dating</h1>
        <p className="text-slate/80 max-w-3xl">
          Radioactive isotopes decay at known rates. By measuring the ratio of parent to daughter
          isotopes, geologists calculate absolute ages and anchor the geologic time scale.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {radiometricContent.systems.map((system) => (
          <div key={system.name} className="card p-5 space-y-2">
            <h3 className="font-heading text-xl">{system.name}</h3>
            <p className="text-slate/80">{system.range}</p>
            <p className="text-sm text-slate/70">{system.notes}</p>
          </div>
        ))}
      </section>

      <HalfLifeSlider
        isotope={radiometricContent.sliderDefault.isotope}
        halfLife={radiometricContent.sliderDefault.halfLifeYears}
      />

      <section className="card p-6 space-y-3">
        <h3 className="font-heading text-xl">How decay turns into a date</h3>
        <ol className="list-decimal list-inside space-y-2 text-slate/80">
          <li>Crystals form and lock in parent isotopes.</li>
          <li>Clock starts when the mineral cools below its closure temperature.</li>
          <li>Measure present-day parent/daughter ratio.</li>
          <li>Apply decay equation to compute time since clock started.</li>
          <li>Cross-check with other isotopic systems and field relationships.</li>
        </ol>
      </section>
    </div>
  );
};

export default RadiometricDating;
