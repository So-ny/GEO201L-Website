import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Globe2, Layers, Bone, Atom, Clock, BookOpen, FileText, MapPin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", to: "/", icon: Globe2 },
  { label: "Relative Dating", to: "/relative-dating", icon: Layers },
  { label: "Fossils", to: "/fossils", icon: Bone },
  { label: "Radiometric Dating", to: "/radiometric-dating", icon: Atom },
  { label: "Geologic Time Scale", to: "/geologic-time-scale", icon: Clock },
  { label: "Case Studies", to: "/case-studies", icon: MapPin },
  { label: "Glossary", to: "/glossary", icon: BookOpen },
  { label: "References", to: "/references", icon: FileText }
];

const activeClass =
  "text-accent font-semibold border-b-2 border-accent pb-1 transition-all duration-200";
const baseClass =
  "text-slate/70 hover:text-accent pb-1 border-b-2 border-transparent transition-all duration-200";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-card" : ""}`}>
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-accent via-sky to-accent" />

        <div className="bg-slate text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex items-center gap-3 text-sm">
            <span className="pill bg-white/10 text-white border border-white/10">
              <Globe2 size={13} /> GEO 201L
            </span>
            <span className="text-white/70 hidden sm:inline">
              Evidence, time, and stories written in rock
            </span>
          </div>
        </div>

        <div className={`border-b border-slate/10 transition-all duration-300 ${
          scrolled ? "glass" : "bg-white/95 backdrop-blur-sm"
        }`}>
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 font-heading text-lg font-bold group">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Globe2 size={18} className="text-accent" />
              </div>
              <span className="hidden sm:inline">Earth History Lab</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-5" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `text-sm ${isActive ? activeClass : baseClass}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <button
              className="lg:hidden p-2 rounded-xl hover:bg-slate/5 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile nav */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="border-t border-slate/10 bg-white/95 px-4 py-3 space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent font-semibold"
                          : "text-slate/80 hover:bg-sandstone"
                      }`
                    }
                  >
                    <Icon size={16} />
                    <span className="flex-1">{item.label}</span>
                    <ChevronRight size={14} className="opacity-40" />
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-slate text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-heading text-lg font-bold">
                <Globe2 size={20} className="text-accent" />
                Earth History Lab
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                An educational resource for GEO 201L exploring how geologists reconstruct Earth&apos;s history.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-white/90">Explore</h4>
              <div className="grid grid-cols-2 gap-2">
                {navItems.slice(1, 7).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm text-white/50 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-white/90">Resources</h4>
              <div className="flex flex-col gap-2">
                <Link to="/glossary" className="text-sm text-white/50 hover:text-accent transition-colors">
                  Glossary of Terms
                </Link>
                <Link to="/references" className="text-sm text-white/50 hover:text-accent transition-colors">
                  References &amp; Sources
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-white/40">Educational project for GEO 201L</p>
            <p className="text-sm text-white/40">Built with evidence-based thinking</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
