import { useMemo, useState } from "react";
import { Atom } from "lucide-react";

type HalfLifeSliderProps = {
  isotope: string;
  halfLife: number;
};

const decay = (initial: number, halfLife: number, time: number) =>
  initial * Math.pow(0.5, time / halfLife);

export const HalfLifeSlider = ({ isotope, halfLife }: HalfLifeSliderProps) => {
  const [elapsed, setElapsed] = useState(halfLife);
  const parentAmount = useMemo(() => decay(100, halfLife, elapsed), [elapsed, halfLife]);
  const daughterAmount = 100 - parentAmount;

  return (
    <div className="card p-7 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Atom size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="font-heading text-xl">Half-life explorer</h3>
            <p className="text-sm text-slate/60">
              <strong>{isotope}</strong> &middot; Half-life: {halfLife.toLocaleString()} years
            </p>
          </div>
        </div>
        <div className="text-right bg-sandstone/50 rounded-xl px-4 py-2.5 border border-white/60">
          <p className="text-xs text-slate/50 uppercase tracking-wide">Elapsed time</p>
          <p className="text-lg font-heading font-bold text-slate">{elapsed.toLocaleString()} yrs</p>
        </div>
      </div>

      {/* Visual decay bar */}
      <div className="space-y-2">
        <div className="h-8 rounded-full overflow-hidden flex bg-slate/5">
          <div
            className="h-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-300 ease-out flex items-center justify-end pr-2"
            style={{ width: `${Math.max(parentAmount, 2)}%` }}
          >
            {parentAmount > 15 && (
              <span className="text-white text-xs font-semibold">{parentAmount.toFixed(0)}%</span>
            )}
          </div>
          <div
            className="h-full bg-gradient-to-r from-slate/20 to-slate/30 transition-all duration-300 ease-out flex items-center pl-2"
            style={{ width: `${Math.max(daughterAmount, 2)}%` }}
          >
            {daughterAmount > 15 && (
              <span className="text-slate/70 text-xs font-semibold">{daughterAmount.toFixed(0)}%</span>
            )}
          </div>
        </div>
        <div className="flex justify-between text-xs text-slate/50">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-accent" /> Parent
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate/25" /> Daughter
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate/50 font-medium">
          <span>0</span>
          <span>{halfLife.toLocaleString()} yrs</span>
          <span>{(halfLife * 2).toLocaleString()} yrs</span>
          <span>{(halfLife * 4).toLocaleString()} yrs</span>
        </div>
        <input
          type="range"
          min={0}
          max={halfLife * 4}
          value={elapsed}
          onChange={(e) => setElapsed(Number(e.target.value))}
          className="w-full"
          aria-label="Elapsed time slider"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-accent/5 rounded-2xl p-4 border border-accent/10">
          <p className="text-xs text-slate/50 uppercase tracking-wide">Parent remaining</p>
          <p className="text-3xl font-heading font-bold text-accent mt-1">{parentAmount.toFixed(1)}%</p>
        </div>
        <div className="bg-slate/5 rounded-2xl p-4 border border-slate/10">
          <p className="text-xs text-slate/50 uppercase tracking-wide">Daughter product</p>
          <p className="text-3xl font-heading font-bold text-slate mt-1">{daughterAmount.toFixed(1)}%</p>
        </div>
        <div className="bg-sandstone/50 rounded-2xl p-4 border border-white/60">
          <p className="text-xs text-slate/50 uppercase tracking-wide">Interpretation</p>
          <p className="text-slate/70 text-sm mt-1 leading-relaxed">
            At {elapsed.toLocaleString()} years, {parentAmount.toFixed(1)}% of {isotope} remains.
            This ratio dates the rock.
          </p>
        </div>
      </div>
    </div>
  );
};
