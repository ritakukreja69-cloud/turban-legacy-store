import { createFileRoute, Link } from "@tanstack/react-router";
import { Ornament, SiteFooter, SiteNav } from "@/components/SiteChrome";
import { VideoFrame } from "@/components/VideoFrame";
import { useReveal } from "@/hooks/use-reveal";
import { PRODUCTS, VIDEOS, whatsappLink } from "@/lib/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "All Turban Fabrics | Qualities & Brands | House of Turbans" },
      {
        name: "description",
        content:
          "Browse every turban fabric we stock — Viole, Full Viole, Soft Voile, Malmal and Rubia, plus Kohinoor Hira, Kohinoor Rubia, Sundar Rubia and Deepak Rubia, in 100+ colours.",
      },
      { property: "og:title", content: "All Turban Fabrics — Qualities & Brands" },
      {
        property: "og:description",
        content:
          "Every quality and brand of premium dastar fabric stocked at House of Turbans, Mahatma Gandhi Market, Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsIndex,
});

function Grid({ kind }: { kind: "Quality" | "Brand" }) {
  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {PRODUCTS.filter((p) => p.kind === kind).map((p) => (
        <div key={p.slug} className="reveal card-3d">
          <article className="card-3d-deep group h-full overflow-hidden rounded-md border border-gold/25 bg-card">
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="card-3d-layer absolute top-4 left-4 rounded-sm bg-navy-deep/90 px-3 py-1 text-[10px] tracking-[0.18em] text-gold uppercase">
                {p.kind}
              </span>
            </div>
            <div className="card-3d-layer p-6">
              <h3 className="font-display text-xl tracking-[0.1em] text-navy uppercase">
                {p.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {p.tagline}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex items-center gap-2 border border-gold/60 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-navy uppercase transition-colors hover:bg-gold hover:text-navy-deep"
                >
                  View details <span>→</span>
                </Link>
                <a
                  href={whatsappLink(
                    `Hello House of Turbans, I would like to enquire about ${p.name} turban fabric.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-navy px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-navy-deep"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

function ProductsIndex() {
  useReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />

      <section className="relative overflow-hidden bg-navy-deep py-16 text-primary-foreground">
        <div className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full border border-gold/20 ring-spin" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="reveal">
            <Ornament className="justify-start" />
            <h1 className="mt-4 font-display text-4xl tracking-[0.12em] text-gold uppercase md:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Every quality and every brand we stock, in more than 100 colours. Choose a
              fabric to see how it moves, how it ties and which shades are on our shelves.
            </p>
          </div>
          <div className="reveal">
            <VideoFrame
              src={VIDEOS.shop}
              label="Camera gliding over stacks of colourful turban fabric"
              className="h-56 w-full md:h-72"
              badge={{ top: "100+", bottom: "shades in store" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-3xl tracking-[0.12em] text-navy uppercase">
            Available Qualities
          </h2>
          <Grid kind="Quality" />
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-3xl tracking-[0.12em] text-navy uppercase">
            Available Brands
          </h2>
          <Grid kind="Brand" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
