import { Link, NavLink } from "react-router-dom";
import { Menu, X, Globe2 } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Relative Dating", to: "/relative-dating" },
  { label: "Fossils", to: "/fossils" },
  { label: "Radiometric Dating", to: "/radiometric-dating" },
  { label: "Geologic Time Scale", to: "/geologic-time-scale" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Glossary", to: "/glossary" },
  { label: "References", to: "/references" }
];

const activeClass =
  "text-accent font-semibold border-b-2 border-accent pb-1 transition-colors";
const baseClass =
  "text-slate/80 hover:text-accent pb-1 border-b-2 border-transparent transition-colors";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="bg-slate text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex items-center gap-3 text-sm">
            <span className="pill bg-white/10 text-white">
              <Globe2 size={14} /> GEO 201L
            </span>
            <span className="text-white/80">
              Evidence, time, and stories written in rock
            </span>
          </div>
        </div>
        <div className="bg-white/90 border-b border-slate/10 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold">
              <Globe2 size={20} className="text-accent" />
              <span>Earth History Lab</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => (isActive ? activeClass : baseClass)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-slate/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="lg:hidden border-t border-slate/10 bg-white">
              <nav className="flex flex-col px-4 py-3 gap-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `${isActive ? activeClass : baseClass} block`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-3 md:flex-row items-center justify-between">
          <p className="font-semibold">Educational project for GEO 201L</p>
          <Link to="/references" className="underline underline-offset-4 hover:text-accent">
            References
          </Link>
        </div>
      </footer>
    </div>
  );
};
