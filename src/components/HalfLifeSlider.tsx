import { useMemo, useState } from "react";

type HalfLifeSliderProps = {
  isotope: string;
  halfLife: number; // in years or Ma
};

const decay = (initial: number, halfLife: number, time: number) =>
  initial * Math.pow(0.5, time / halfLife);

export const HalfLifeSlider = ({ isotope, halfLife }: HalfLifeSliderProps) => {
  const [elapsed, setElapsed] = useState(halfLife);
  const parentAmount = useMemo(() => decay(100, halfLife, elapsed), [elapsed, halfLife]);
  const daughterAmount = 100 - parentAmount;

  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading text-xl">Half-life explorer</h3>
          <p className="text-slate/70">
            Isotope: <strong>{isotope}</strong> • Half-life: {halfLife.toLocaleString()} years
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate/70">Elapsed time</p>
          <p className="text-lg font-semibold">{elapsed.toLocaleString()} years</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate/60">
          <span>0</span>
          <span>{(halfLife * 2).toLocaleString()} yrs</span>
          <span>{(halfLife * 4).toLocaleString()} yrs</span>
        </div>
        <input
          type="range"
          min={0}
          max={halfLife * 4}
          value={elapsed}
          onChange={(e) => setElapsed(Number(e.target.value))}
          className="w-full accent-accent"
          aria-label="Elapsed time slider"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-sandstone rounded-lg p-3 border border-slate/10">
          <p className="text-slate/70">Parent isotope remaining</p>
          <p className="text-2xl font-bold text-accent">{parentAmount.toFixed(1)}%</p>
        </div>
        <div className="bg-sandstone rounded-lg p-3 border border-slate/10">
          <p className="text-slate/70">Daughter product</p>
          <p className="text-2xl font-bold text-slate">{daughterAmount.toFixed(1)}%</p>
        </div>
        <div className="bg-sandstone rounded-lg p-3 border border-slate/10">
          <p className="text-slate/70">What this means</p>
          <p className="text-slate">
            At {elapsed.toLocaleString()} years, only {parentAmount.toFixed(1)}% of the original{" "}
            {isotope} remains. Measuring this ratio lets us date rocks.
          </p>
        </div>
      </div>
    </div>
  );
};
