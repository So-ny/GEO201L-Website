import React from "react";
import { ExternalLink } from "lucide-react";

type ImageWithSourceProps = {
  src: string;
  alt: string;
  caption: string;
  sourceLabel: string;
  sourceUrl: string;
  placeholder?: boolean;
};

export const ImageWithSource: React.FC<ImageWithSourceProps> = ({
  src,
  alt,
  caption,
  sourceLabel,
  sourceUrl,
  placeholder = false
}) => {
  return (
    <figure className="bg-white/90 rounded-2xl shadow-card overflow-hidden border border-white/60 backdrop-blur-sm group transition-all duration-300 hover:shadow-card-hover">
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {placeholder && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full bg-amber-100/90 backdrop-blur-sm text-amber-800 text-xs font-semibold border border-amber-200/50">
              Placeholder
            </span>
          </div>
        )}
      </div>
      <figcaption className="px-5 py-4 space-y-2">
        <p className="font-semibold text-slate text-sm leading-snug">{caption}</p>
        <div className="flex items-center gap-2 text-xs text-slate/60">
          <span className="font-medium">Source:</span>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline underline-offset-4 transition-colors"
          >
            {sourceLabel}
            <ExternalLink size={10} />
          </a>
        </div>
      </figcaption>
    </figure>
  );
};
