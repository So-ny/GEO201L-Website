import React from "react";

type ImageWithSourceProps = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl: string;
  placeholder?: boolean;
};

/**
 * Enforces required citation for every figure.
 * Use `placeholder` to clearly mark locally-generated placeholders
 * until a properly sourced figure is added.
 */
export const ImageWithSource: React.FC<ImageWithSourceProps> = ({
  src,
  alt,
  caption,
  sourceLabel,
  sourceUrl,
  placeholder = false
}) => {
  return (
    <figure className="bg-white rounded-xl shadow-card overflow-hidden border border-slate/10">
      <img src={src} alt={alt} className="w-full h-56 object-cover" />
      <figcaption className="px-4 py-3 text-sm space-y-1">
        <p className="font-semibold text-slate">{caption}</p>
        <div className="text-xs text-slate/80 flex items-center gap-2">
          <span className="font-medium">Source:</span>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4"
          >
            {sourceLabel}
          </a>
          {placeholder && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
              Placeholder image – replace with properly sourced figure
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  );
};
