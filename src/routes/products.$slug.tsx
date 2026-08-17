import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Ornament, SiteFooter, SiteNav } from "@/components/SiteChrome";
import { VideoFrame } from "@/components/VideoFrame";
import { useReveal } from "@/hooks/use-reveal";
import { COLOURS, PRODUCTS, VIDEOS, getProduct, whatsappLink } from "@/lib/catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Fabric not found | House of Turbans" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.product;
    const title = `${p.name} Turban Fabric | House of Turbans`;
    const description = `${p.tagline}. ${p.intro.slice(0, 110)}…`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: FabricNotFound,
  component: ProductPage,
});

function FabricNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-5 py-28 text-center">
        <h1 className="font-display text-4xl tracking-[0.12em] text-navy uppercase">
          Fabric not found
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          That fabric is not on our shelves online. Browse everything we stock instead.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-block bg-navy px-7 py-4 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase"
        >
          All Products
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProductPage() {
  useReveal();
  const { product } = Route.useLoaderData();
  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />

      {/* Hero with product video */}
      <section className="relative overflow-hidden bg-navy-deep py-16 text-primary-foreground">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[30rem] w-[30rem] rounded-full border border-gold/15 ring-spin" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2">
          <div className="reveal">
            <nav className="text-[10px] tracking-[0.2em] text-primary-foreground/50 uppercase">
              <Link to="/" className="hover:text-gold">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/products" className="hover:text-gold">
                Products
              </Link>{" "}
              / <span className="text-gold">{product.name}</span>
            </nav>
            <Ornament className="mt-5 justify-start" />
            <h1 className="mt-4 font-display text-4xl tracking-[0.12em] text-gold uppercase md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 font-display text-2xl italic text-primary-foreground/75">
              {product.tagline}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              {product.intro}
            </p>
            <a
              href={whatsappLink(
                `Hello House of Turbans, I would like to enquire about ${product.name} turban fabric.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-gold/90 to-gold-soft px-7 py-4 text-xs font-semibold tracking-[0.2em] text-navy-deep uppercase transition-transform hover:scale-105"
            >
              Enquire on WhatsApp <span>›</span>
            </a>
          </div>
          <div className="reveal">
            <VideoFrame
              src={product.video}
              label={`${product.name} turban fabric in motion`}
              className="h-[24rem] w-full md:h-[30rem]"
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-background py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal">
            <h2 className="font-display text-3xl tracking-[0.12em] text-navy uppercase">
              About this fabric
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
              {product.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal card-3d">
            <div className="card-3d-inner rounded-md border border-gold/30 bg-card p-7">
              <h3 className="font-display text-xl tracking-[0.14em] text-navy uppercase">
                At a glance
              </h3>
              <dl className="mt-5 space-y-3 text-sm">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 border-b border-border/70 pb-2">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right text-navy">{s.value}</dd>
                  </div>
                ))}
              </dl>
              <img
                src={product.img}
                alt={`${product.name} fabric`}
                width={800}
                height={800}
                loading="lazy"
                className="mt-6 aspect-square w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Colours available — 24 products */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-3xl tracking-[0.12em] text-navy uppercase">
            {product.name} — Available Colours
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            {COLOURS.length} popular shades shown below, with more than 100 colours on our
            shade card in store. Tap enquire and we will confirm availability and send you
            a photo of the actual roll on WhatsApp.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {COLOURS.map((c) => (
              <div key={c.name} className="reveal card-3d">
                <article className="card-3d-inner overflow-hidden rounded-md border border-gold/25 bg-card">
                  <div
                    className="relative h-36 w-full"
                    style={{
                      background: `linear-gradient(140deg, ${c.hex}, ${c.hex}cc 60%, #ffffff22)`,
                    }}
                  >
                    <span className="card-3d-layer absolute bottom-3 left-3 rounded-sm bg-navy-deep/85 px-2.5 py-1 text-[10px] tracking-[0.2em] text-gold uppercase">
                      {product.name}
                    </span>
                  </div>
                  <div className="card-3d-layer p-5">
                    <h3 className="font-display text-lg leading-tight text-navy">
                      {c.name} {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Cut to any length · {product.specs[0].value.toLowerCase()}
                    </p>
                    <a
                      href={whatsappLink(
                        `Hello House of Turbans, I am interested in ${c.name} ${product.name} turban fabric. Is it available?`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 block rounded-sm border border-gold/60 py-2 text-center text-[10px] font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:bg-gold hover:text-navy-deep"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wearing it — second video */}
      <section className="relative overflow-hidden bg-navy-deep py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2">
          <div className="reveal order-2 md:order-1">
            <VideoFrame
              src={product.kind === "Brand" ? VIDEOS.wedding : VIDEOS.tying}
              label="A Sikh man tying a turban"
              className="h-[22rem] w-full md:h-[28rem]"
            />
          </div>
          <div className="reveal order-1 md:order-2">
            <Ornament className="justify-start" />
            <h2 className="mt-4 font-display text-3xl tracking-[0.12em] text-gold uppercase">
              How it wears
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              See {product.name} in motion — the fall, the sheen and the way each pech
              settles. Come in to the shop and we will help you tie it, or message us and
              we will send a video of your chosen shade.
            </p>
            <a
              href={whatsappLink(
                `Hello House of Turbans, please send me a video of ${product.name} fabric.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 border border-gold/60 px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase transition-all hover:scale-105 hover:bg-gold hover:text-navy-deep"
            >
              Ask for a video <span>›</span>
            </a>
          </div>
        </div>
      </section>

      {/* Other fabrics */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="reveal text-center font-display text-3xl tracking-[0.12em] text-navy uppercase">
            Other fabrics
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="reveal card-3d block"
              >
                <article className="card-3d-inner overflow-hidden rounded-md border border-gold/25 bg-card">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-display text-lg text-navy">{p.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
