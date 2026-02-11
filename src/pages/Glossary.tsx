import { useMemo, useState } from "react";
import { glossaryTerms } from "../content/siteContent";
import { AnimateIn } from "../components/AnimateIn";
import { Search, BookOpen } from "lucide-react";

const Glossary = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      glossaryTerms.filter((item) =>
        `${item.term} ${item.definition}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const letters = useMemo(() => {
    const set = new Set(glossaryTerms.map((t) => t.term[0].toUpperCase()));
    return Array.from(set).sort();
  }, []);

  return (
    <div className="section space-y-10">
      <AnimateIn>
        <header className="section-title page-header">
          <span className="section-eyebrow">Key vocabulary</span>
          <h1 className="section-heading">Glossary</h1>
          <p className="text-slate/70 leading-relaxed">Search ~{glossaryTerms.length} core terms used across the site.</p>
        </header>
      </AnimateIn>

      <AnimateIn>
        <div className="card p-6 space-y-5">
          <div className="relative">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate/40" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms..."
              className="w-full rounded-xl border border-slate/15 pl-10 pr-4 py-3 bg-sandstone/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              aria-label="Search glossary"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => setQuery(letter)}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                  query.toUpperCase() === letter
                    ? "bg-accent text-white"
                    : "bg-sandstone/70 text-slate/50 hover:bg-sandstone hover:text-slate"
                }`}
              >
                {letter}
              </button>
            ))}
            {query && (
              <button
                onClick={() => setQuery("")}
                className="px-3 h-8 rounded-lg text-xs font-semibold bg-slate/5 text-slate/50 hover:bg-slate/10 transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {filtered.map((item) => (
              <div
                key={item.term}
                className="bg-sandstone/50 rounded-2xl p-4 border border-white/60 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <BookOpen size={14} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-slate">{item.term}</p>
                    <p className="text-slate/70 text-sm mt-1 leading-relaxed">{item.definition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate/50">No matches found for &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>
      </AnimateIn>
    </div>
  );
};

export default Glossary;
