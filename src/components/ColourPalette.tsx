const SHADES: { code: string; hex: string }[] = [
  { code: "03", hex: "#6b1f2a" }, { code: "04", hex: "#4a2b1f" }, { code: "08", hex: "#e0426b" },
  { code: "18", hex: "#1a5b63" }, { code: "19", hex: "#8a7a2f" }, { code: "21", hex: "#c9c98a" },
  { code: "22", hex: "#9a8b3a" }, { code: "27", hex: "#b0b0b0" }, { code: "32", hex: "#5c4a2a" },
  { code: "36", hex: "#6b6b4a" }, { code: "39", hex: "#b39c7d" }, { code: "45", hex: "#2b2118" },
  { code: "48", hex: "#e8a5b0" }, { code: "51", hex: "#f0a8c8" }, { code: "55", hex: "#3fb3c4" },
  { code: "59", hex: "#e8e83a" }, { code: "61", hex: "#7a1f3a" }, { code: "62", hex: "#141414" },
  { code: "63", hex: "#e07a1f" }, { code: "64", hex: "#5b3a7a" }, { code: "65", hex: "#8a7a4a" },
  { code: "68", hex: "#9aa87a" }, { code: "69", hex: "#243a8a" }, { code: "72", hex: "#8a8a6b" },
  { code: "81", hex: "#c9b89a" }, { code: "86", hex: "#e04a2a" }, { code: "91", hex: "#8a2a4a" },
  { code: "99", hex: "#b03a5b" }, { code: "101", hex: "#cfd6d8" }, { code: "112", hex: "#e8e6b0" },
  { code: "115", hex: "#8ab3c9" }, { code: "116", hex: "#6b6b6b" }, { code: "126", hex: "#7a8a6b" },
  { code: "131", hex: "#4a4a3a" }, { code: "134", hex: "#e06a2a" }, { code: "139", hex: "#7a2a1f" },
  { code: "143", hex: "#8a7a5b" }, { code: "144", hex: "#1f6b3a" }, { code: "150", hex: "#1f3a2a" },
  { code: "155", hex: "#d6cfa8" }, { code: "160", hex: "#8a7a4a" }, { code: "162", hex: "#1f2a4a" },
  { code: "164", hex: "#7a3a8a" }, { code: "165", hex: "#c9bd8a" }, { code: "167", hex: "#f0b08a" },
  { code: "168", hex: "#f0c9a8" }, { code: "169", hex: "#8a6b2a" }, { code: "172", hex: "#c9c9b0" },
  { code: "188", hex: "#f0d6e0" }, { code: "190", hex: "#e8425b" }, { code: "210", hex: "#b3a8d6" },
  { code: "211", hex: "#8a7a5b" }, { code: "215", hex: "#a8a8a8" }, { code: "221", hex: "#3a3a7a" },
  { code: "224", hex: "#5bc98a" }, { code: "260", hex: "#e8a05b" }, { code: "261", hex: "#e8c9d6" },
  { code: "263", hex: "#c9284a" }, { code: "269", hex: "#8a1f3a" }, { code: "270", hex: "#c92a3a" },
  { code: "308", hex: "#8a8a5b" }, { code: "365", hex: "#1f4a3a" }, { code: "369", hex: "#3a8a5b" },
  { code: "370", hex: "#8ac95b" }, { code: "423", hex: "#c9d6d6" }, { code: "425", hex: "#2a5bc9" },
  { code: "511", hex: "#5bc9c9" }, { code: "526", hex: "#7a5bc9" }, { code: "558", hex: "#f0c98a" },
  { code: "565", hex: "#f0a88a" }, { code: "567", hex: "#e8284a" }, { code: "573", hex: "#3aa8c9" },
  { code: "583", hex: "#2a3a4a" }, { code: "602", hex: "#3a3a1f" }, { code: "603", hex: "#7a2a1f" },
  { code: "607", hex: "#2a8ac9" }, { code: "612", hex: "#5b8a8a" }, { code: "613", hex: "#3a5b7a" },
  { code: "625", hex: "#7a3a7a" }, { code: "626", hex: "#d6cfa8" }, { code: "627", hex: "#8a8a5b" },
  { code: "630", hex: "#e8724a" }, { code: "634", hex: "#8aa83a" }, { code: "635", hex: "#8a3a5b" },
  { code: "636", hex: "#7a3a2a" }, { code: "638", hex: "#4a4a2a" }, { code: "640", hex: "#c9243a" },
  { code: "649", hex: "#8ac92a" }, { code: "658", hex: "#3a5b8a" }, { code: "662", hex: "#1f3a5b" },
  { code: "663", hex: "#c9bd9a" }, { code: "665", hex: "#c9a8a8" }, { code: "666", hex: "#e8b0c9" },
  { code: "698", hex: "#1f4a5b" }, { code: "701", hex: "#f0a8c9" }, { code: "702", hex: "#e8724a" },
  { code: "722", hex: "#e8425b" }, { code: "725", hex: "#3aa8c9" }, { code: "726", hex: "#1f7a8a" },
  { code: "729", hex: "#3a8ac9" }, { code: "867", hex: "#1f1f3a" }, { code: "1010", hex: "#f0f0f0" },
  { code: "1040", hex: "#8a7a3a" }, { code: "1071", hex: "#e8a82a" }, { code: "1101", hex: "#2a5b8a" },
  { code: "1102", hex: "#5b8ac9" }, { code: "1150", hex: "#8a8a7a" }, { code: "1151", hex: "#7a7a5b" },
  { code: "1158", hex: "#1f2a4a" }, { code: "1168", hex: "#e8a8a8" }, { code: "1172", hex: "#c9c9b0" },
  { code: "1173", hex: "#7a5b6b" }, { code: "1188", hex: "#2a2a3a" }, { code: "1203", hex: "#c9c9c9" },
  { code: "1206", hex: "#a8bdcf" }, { code: "1210", hex: "#4a2a3a" }, { code: "1250", hex: "#8a7a3a" },
  { code: "1276", hex: "#4a5b6b" }, { code: "1369", hex: "#8ab07a" }, { code: "1505", hex: "#1f5b3a" },
  { code: "1511", hex: "#a8e0e0" }, { code: "1512", hex: "#e8e88a" }, { code: "1519", hex: "#4a1f2a" },
  { code: "1521", hex: "#c9c9b0" }, { code: "1526", hex: "#a8b3cf" }, { code: "1573", hex: "#a8d6c9" },
  { code: "1602", hex: "#3a3a2a" }, { code: "1607", hex: "#4a4a4a" }, { code: "1619", hex: "#3a2a5b" },
  { code: "1640", hex: "#e8283a" }, { code: "1662", hex: "#2a2a2a" }, { code: "1160", hex: "#7a7a7a" },
];

import { useState } from "react";

function Swatch({ hex, code, size }: { hex: string; code: string; size: string }) {
  return (
    <div className="group relative">
      <div
        className={`${size} w-full rounded-full ring-1 ring-navy/10 transition-transform duration-200 group-hover:scale-125 group-hover:ring-2 group-hover:ring-gold`}
        style={{ backgroundColor: hex }}
        title={`Shade ${code}`}
      />
    </div>
  );
}

export function ColourPaletteCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-3d w-full max-w-sm">
        <div className="card-3d-inner rounded-md border border-gold/40 bg-card/95 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
          <p className="text-center text-gold">✦</p>
          <h3 className="mt-1 text-center font-display text-xl tracking-[0.18em] text-navy uppercase">
            Colour Palette
          </h3>
          <div className="mt-4 grid grid-cols-10 gap-1.5">
            {SHADES.slice(0, 60).map((s) => (
              <Swatch key={s.code} hex={s.hex} code={s.code} size="aspect-square" />
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="mt-5 w-full rounded-sm bg-navy-deep py-3 text-[11px] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-navy"
          >
            View all 100+ colours
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="animate-pop-in max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-md border border-gold/40 bg-card p-6 shadow-[var(--shadow-soft)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-2xl tracking-[0.16em] text-navy uppercase">
                All Colours
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close colour palette"
                className="text-xl text-muted-foreground transition-colors hover:text-navy"
              >
                ✕
              </button>
            </div>
            <div className="mt-6 grid grid-cols-8 gap-2 sm:grid-cols-12">
              {SHADES.map((s) => (
                <Swatch key={s.code} hex={s.hex} code={s.code} size="aspect-square" />
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {SHADES.length} shades shown — over 100 colours available in store. Screen
              colours are indicative and may vary slightly from the actual fabric.
            </p>
          </div>
        </div>
      )}
    </>
  );
}