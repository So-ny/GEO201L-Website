import { referenceContent } from "../content/siteContent";

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <section className="space-y-2">
    <h2 className="font-heading text-xl">{title}</h2>
    <ul className="list-disc list-inside text-slate/80 space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </section>
);

const References = () => {
  return (
    <div className="section space-y-10">
      <header className="section-title">
        <span className="section-eyebrow">Sources</span>
        <h1 className="section-heading">References</h1>
        <p className="text-slate/80">
          All figures must include captions and sources. Replace placeholder images with properly
          credited figures from authoritative sources.
        </p>
      </header>

      <div className="card p-6 space-y-6">
        <Section title="Course slides / lectures" items={referenceContent.course} />
        <Section title="Textbook" items={referenceContent.textbook} />
        <Section title="Government or museum sources" items={referenceContent.institutions} />
        <section className="space-y-2">
          <h2 className="font-heading text-xl">Image source policy</h2>
          <p className="text-slate/80">{referenceContent.imageSourcesNote}</p>
          <p className="text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3">
            Reminder: When you add a real figure, include source author/organization and a working
            URL in the ImageWithSource component. Also list the source here.
          </p>
        </section>
      </div>
    </div>
  );
};

export default References;
