import { referenceContent } from "../content/siteContent";
import { AnimateIn } from "../components/AnimateIn";
import { GraduationCap, BookOpen, Building2, Image, AlertTriangle } from "lucide-react";

const sections = [
  { title: "Course slides / lectures", items: referenceContent.course, icon: GraduationCap, color: "text-accent" },
  { title: "Textbook", items: referenceContent.textbook, icon: BookOpen, color: "text-precambrian" },
  { title: "Government or museum sources", items: referenceContent.institutions, icon: Building2, color: "text-paleozoic" }
];

const References = () => {
  return (
    <div className="section space-y-10">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Sources</span>
          <h1 className="section-heading">References</h1>
          <p className="text-slate/70 leading-relaxed">
            All figures must include captions and sources. Replace placeholder images with properly
            credited figures from authoritative sources.
          </p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <div className="card p-7 space-y-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <AnimateIn key={section.title} delay={idx * 100}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sandstone flex items-center justify-center">
                      <Icon size={18} className={section.color} />
                    </div>
                    <h2 className="font-heading text-xl">{section.title}</h2>
                  </div>
                  <ul className="space-y-2 pl-12">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-slate/70 leading-relaxed">
                        <span className="text-accent font-bold mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            );
          })}

          <AnimateIn delay={300}>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sandstone flex items-center justify-center">
                  <Image size={18} className="text-cenozoic" />
                </div>
                <h2 className="font-heading text-xl">Image source policy</h2>
              </div>
              <p className="text-slate/70 leading-relaxed pl-12">{referenceContent.imageSourcesNote}</p>
              <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl p-4 ml-12">
                <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 leading-relaxed">
                  When you add a real figure, include source author/organization and a working
                  URL in the ImageWithSource component. Also list the source here.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </AnimateIn>
    </div>
  );
};

export default References;
