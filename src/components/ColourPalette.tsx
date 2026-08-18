import { useState } from "react";

/** Shades sampled from the Bhojraj Kirpaldas (Textiles) Pvt. Ltd. colour chart. */
export const SHADES: { code: string; hex: string }[] = [
  { code: "03", hex: "#633137" }, { code: "04", hex: "#746c3e" }, { code: "08", hex: "#d2485f" }, { code: "18", hex: "#095f70" },
  { code: "19", hex: "#ac8962" }, { code: "21", hex: "#d6e1a6" }, { code: "22", hex: "#ba8527" }, { code: "27", hex: "#96958a" },
  { code: "32", hex: "#6c4532" }, { code: "36", hex: "#505441" }, { code: "39", hex: "#a99367" }, { code: "45", hex: "#484647" },
  { code: "48", hex: "#fb9997" }, { code: "51", hex: "#f495c3" }, { code: "55", hex: "#41aca9" }, { code: "59", hex: "#e8e034" },
  { code: "61", hex: "#53272c" }, { code: "62", hex: "#232527" }, { code: "63", hex: "#e07825" }, { code: "64", hex: "#452655" },
  { code: "65", hex: "#aa9a6d" }, { code: "68", hex: "#a6545f" }, { code: "69", hex: "#153068" }, { code: "72", hex: "#828b92" },
  { code: "81", hex: "#676355" }, { code: "86", hex: "#e04f2f" }, { code: "91", hex: "#5a4e5c" }, { code: "99", hex: "#a3253d" },
  { code: "101", hex: "#94b5d0" }, { code: "112", hex: "#e7e9a0" }, { code: "115", hex: "#51b1d0" }, { code: "116", hex: "#666a69" },
  { code: "126", hex: "#18386b" }, { code: "131", hex: "#3f3f37" }, { code: "134", hex: "#f08950" }, { code: "139", hex: "#8d3c2c" },
  { code: "143", hex: "#534e3f" }, { code: "144", hex: "#0f593c" }, { code: "150", hex: "#36272c" }, { code: "155", hex: "#d2bb7d" },
  { code: "160", hex: "#6e6047" }, { code: "162", hex: "#18313e" }, { code: "164", hex: "#54275c" }, { code: "165", hex: "#cbb67f" },
  { code: "167", hex: "#fbcc69" }, { code: "168", hex: "#f2ac82" }, { code: "169", hex: "#c18e5b" }, { code: "172", hex: "#958d69" },
  { code: "188", hex: "#f5d1da" }, { code: "190", hex: "#ef5558" }, { code: "210", hex: "#bf9ec7" }, { code: "211", hex: "#9f6e2f" },
  { code: "215", hex: "#908687" }, { code: "221", hex: "#2a2d51" }, { code: "224", hex: "#63b873" }, { code: "260", hex: "#9a285c" },
  { code: "261", hex: "#e3bec1" }, { code: "263", hex: "#6e2d30" }, { code: "269", hex: "#567ba5" }, { code: "270", hex: "#e8c044" },
  { code: "308", hex: "#867f6b" }, { code: "365", hex: "#175a51" }, { code: "369", hex: "#1d7b36" }, { code: "370", hex: "#84d146" },
  { code: "423", hex: "#cbd4d9" }, { code: "425", hex: "#0a5497" }, { code: "511", hex: "#64b9ad" }, { code: "526", hex: "#6b579a" },
  { code: "558", hex: "#fbd5a0" }, { code: "565", hex: "#f7c292" }, { code: "567", hex: "#eb3f50" }, { code: "573", hex: "#88a587" },
  { code: "583", hex: "#8e6c6b" }, { code: "602", hex: "#403532" }, { code: "603", hex: "#a65661" }, { code: "607", hex: "#2e96a8" },
  { code: "612", hex: "#e1dfb2" }, { code: "613", hex: "#f0a92e" }, { code: "625", hex: "#93b650" }, { code: "626", hex: "#e4d6a8" },
  { code: "627", hex: "#92a864" }, { code: "630", hex: "#e66d52" }, { code: "634", hex: "#959132" }, { code: "635", hex: "#c960aa" },
  { code: "636", hex: "#a7552d" }, { code: "638", hex: "#534a3a" }, { code: "640", hex: "#b0272f" }, { code: "649", hex: "#93cc33" },
  { code: "658", hex: "#395485" }, { code: "662", hex: "#3f3131" }, { code: "663", hex: "#c6b898" }, { code: "665", hex: "#24312c" },
  { code: "666", hex: "#c6aba8" }, { code: "698", hex: "#134b60" }, { code: "701", hex: "#f1b0ca" }, { code: "702", hex: "#bd4c2a" },
  { code: "722", hex: "#912633" }, { code: "725", hex: "#c52c54" }, { code: "726", hex: "#c22d56" }, { code: "729", hex: "#4d9bc4" },
  { code: "867", hex: "#272734" }, { code: "1010", hex: "#732c28" }, { code: "1040", hex: "#574c58" }, { code: "1071", hex: "#e1a42d" },
  { code: "1100", hex: "#ecedef" }, { code: "1101", hex: "#6483a8" }, { code: "1102", hex: "#d7dadb" }, { code: "1150", hex: "#7a6343" },
  { code: "1151", hex: "#e6e57f" }, { code: "1158", hex: "#1e3345" }, { code: "1607", hex: "#085c86" }, { code: "1168", hex: "#ec8676" },
  { code: "1172", hex: "#9a9c77" }, { code: "1173", hex: "#9a717d" }, { code: "1188", hex: "#242630" }, { code: "1203", hex: "#aa5672" },
  { code: "1206", hex: "#9aaab4" }, { code: "1210", hex: "#6b2a2c" }, { code: "1250", hex: "#9d8555" }, { code: "1276", hex: "#3d444e" },
  { code: "1369", hex: "#9ebc5f" }, { code: "1505", hex: "#134c33" }, { code: "1511", hex: "#a2e6e2" }, { code: "1512", hex: "#ecde5f" },
  { code: "1519", hex: "#3b2b2d" }, { code: "1521", hex: "#cecbbd" }, { code: "1526", hex: "#bfcfe7" }, { code: "1573", hex: "#a1d5b9" },
  { code: "1602", hex: "#574c3a" }, { code: "1619", hex: "#462e66" }, { code: "1640", hex: "#ce2a31" }, { code: "36 D", hex: "#4f4a35" },
  { code: "1160", hex: "#736063" }, { code: "1279-D", hex: "#33382e" }, { code: "1662", hex: "#4a332a" }, { code: "573-VD", hex: "#30603c" },
  { code: "211-B", hex: "#a1702b" }, { code: "04-M", hex: "#796d4a" }, { code: "726-VD", hex: "#8a2a44" }, { code: "1158-D", hex: "#20303a" },
];

function Swatch({ hex, code }: { hex: string; code: string }) {
  return (
    <div className="group/sw text-center">
      <div
        className="aspect-square w-full rounded-sm ring-1 ring-navy/10 transition-transform duration-200 group-hover/sw:scale-110 group-hover/sw:ring-2 group-hover/sw:ring-gold"
        style={{ backgroundColor: hex }}
        title={`Shade ${code}`}
      />
      <p className="mt-1 text-[9px] tracking-wide text-muted-foreground">{code}</p>
    </div>
  );
}

/** Full chart, rendered inline in a section. */
export function ColourChart() {
  return (
    <div className="rounded-md border border-gold/30 bg-card p-4 shadow-[var(--shadow-soft)] md:p-6">
      <div className="grid grid-cols-8 gap-x-2 gap-y-3 sm:grid-cols-12 lg:grid-cols-16">
        {SHADES.map((s) => (
          <Swatch key={s.code} hex={s.hex} code={s.code} />
        ))}
      </div>
      <p className="mt-5 text-center text-[11px] text-muted-foreground">
        {SHADES.length} shades from our mill colour chart. Screen colours are indicative and
        may vary slightly from the actual fabric.
      </p>
    </div>
  );
}

/** Compact card with a modal of the full chart. */
export function ColourPaletteCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-3d w-full max-w-xs">
        <div className="card-3d-inner rounded-md border border-gold/40 bg-card/95 p-4 shadow-[var(--shadow-soft)]">
          <p className="text-center text-gold">✦</p>
          <h3 className="mt-1 text-center font-display text-lg tracking-[0.18em] text-navy uppercase">
            Colour Chart
          </h3>
          <div className="mt-3 grid grid-cols-10 gap-1">
            {SHADES.slice(0, 50).map((s) => (
              <div
                key={s.code}
                className="aspect-square w-full rounded-[2px] ring-1 ring-navy/10"
                style={{ backgroundColor: s.hex }}
                title={`Shade ${s.code}`}
              />
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 w-full rounded-sm bg-navy-deep py-2.5 text-[10px] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-navy"
          >
            View all {SHADES.length} shades
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="animate-pop-in max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-md border border-gold/40 bg-card p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-2xl tracking-[0.16em] text-navy uppercase">
                Colour Chart
              </h3>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close colour chart"
                className="text-xl text-muted-foreground transition-colors hover:text-navy"
              >
                ✕
              </button>
            </div>
            <div className="mt-4">
              <ColourChart />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
