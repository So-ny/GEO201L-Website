import { useMemo, useState } from "react";
import { glossaryTerms } from "../content/siteContent";

const Glossary = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () =>
      glossaryTerms.filter((item) =>
        `${item.term} ${item.definition}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="section space-y-10">
      <header className="section-title">
        <span className="section-eyebrow">Key vocabulary</span>
        <h1 className="section-heading">Glossary</h1>
        <p className="text-slate/80">Search ~20 core terms used across the site.</p>
      </header>

      <div className="card p-5 space-y-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms..."
          className="w-full rounded-lg border border-slate/20 px-3 py-2 focus:outline-none focus:border-accent"
          aria-label="Search glossary"
        />
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div key={item.term} className="bg-sandstone rounded-lg p-4">
              <p className="font-semibold">{item.term}</p>
              <p className="text-slate/80 text-sm">{item.definition}</p>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-sm text-slate/60">No matches found.</p>}
      </div>
    </div>
  );
};

export default Glossary;
