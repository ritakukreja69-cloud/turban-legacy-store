import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ColourPaletteCard } from "@/components/ColourPalette";
import { useReveal } from "@/hooks/use-reveal";
import heroTurban from "@/assets/hero-turban.jpg";
import legacyStore from "@/assets/legacy-store.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";
import sardarBoy from "@/assets/sardar-boy.png";
import catFullVoile from "@/assets/cat-full-voile.jpg";
import catRubia from "@/assets/cat-rubia.jpg";
import catHeavyRubia from "@/assets/cat-heavy-rubia.jpg";
import catDumala from "@/assets/cat-dumala.jpg";
import catPatka from "@/assets/cat-patka.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import turbanVideo from "@/assets/turban-tying.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Turbans | Premium Turban & Dastar Fabrics Since 1970" },
      {
        name: "description",
        content:
          "Mumbai's trusted turban retailer since 1970. Premium dastar fabrics in 100+ colours — Full Voile, Rubia, Malmal, Dumala, Patkas and accessories, shipped worldwide.",
      },
      { property: "og:title", content: "House of Turbans | Tradition. Quality. Trust." },
      {
        property: "og:description",
        content:
          "Over 50 years of premium turban fabrics from Mahatma Gandhi Market, King Circle, Mumbai. 100+ colours, finest qualities and trusted brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  {
    name: "Full Voile Turbans",
    img: catFullVoile,
    blurb: "Light, airy and easy to tie — the everyday favourite.",
    price: "₹75 / m",
  },
  {
    name: "Rubia Voile Turbans",
    img: catRubia,
    blurb: "Soft matte finish with a rich, structured drape.",
    price: "₹90 / m",
  },
  {
    name: "Heavy Rubia Turbans",
    img: catHeavyRubia,
    blurb: "Dense weave that holds a crisp, formal shape.",
    price: "₹110 / m",
  },
  {
    name: "Dumala Fabric",
    img: catDumala,
    blurb: "Long-length traditional cloth for dumala styles.",
    price: "₹130 / m",
  },
  {
    name: "Patkas",
    img: catPatka,
    blurb: "Bright, comfortable patkas for Sikh children.",
    price: "₹150 each",
  },
  {
    name: "Turban Accessories",
    img: catAccessories,
    blurb: "Kalgi, kanga, fifty bands and finishing touches.",
    price: "From ₹99",
  },
];

const FEATURED = [
  { name: "Rose Pink Full Voile", shade: "#e0426b", quality: "Full Voile", price: "₹130" },
  { name: "Azure Blue Full Voile", shade: "#2a5bc9", quality: "Full Voile", price: "₹130" },
  { name: "Regal Yellow Full Voile", shade: "#e8a82a", quality: "Full Voile", price: "₹130" },
  { name: "Royal Red Rubia", shade: "#c9243a", quality: "Rubia Voile", price: "₹150" },
  { name: "Ocean Green Voile", shade: "#1f7a8a", quality: "Soft Voile", price: "₹120" },
  { name: "Dashmesh Neela Ghorra", shade: "#1f2a4a", quality: "Full Voile", price: "₹160" },
  { name: "Kesari Saffron Malmal", shade: "#e07a1f", quality: "Malmal", price: "₹140" },
  { name: "Ivory White Rubia", shade: "#f0f0f0", quality: "Rubia", price: "₹150" },
];

const TRUST = [
  { title: "50+ Years", sub: "of legacy" },
  { title: "Premium", sub: "quality fabrics" },
  { title: "Trusted by", sub: "generations" },
  { title: "Serving", sub: "worldwide" },
];

const QUALITIES = ["Viole", "Full Viole", "Soft Voile", "Malmal", "Rubia"];
const BRANDS = ["Kohinoor Hira", "Kohinoor Rubia", "Sundar Rubia", "Deepak Rubia"];

const VALUES = [
  { title: "Finest Fabrics", sub: "Carefully selected for comfort & elegance" },
  { title: "Vibrant Colours", sub: "More than 100 shades to choose from" },
  { title: "Authentic & Trusted", sub: "A legacy built on trust, quality & service" },
  { title: "Customer First", sub: "Dedicated support & personal attention" },
];

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gold/50" />
      <span className="text-gold">✦</span>
      <span className="h-px w-14 bg-gold/50" />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="text-2xl text-gold">☬</span>
          <span className="leading-none">
            <span className="block font-display text-[10px] tracking-[0.35em] text-gold">
              HOUSE OF
            </span>
            <span className="block font-display text-xl tracking-[0.18em] text-primary-foreground">
              TURBANS
            </span>
            <span className="block text-[9px] tracking-[0.3em] text-gold-soft/70">
              — SINCE 1970 —
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="nav-link flex items-center gap-1.5" onClick={() => setOpen((o) => !o)}>
              Products <span className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {open && (
              <div className="animate-pop-in absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4">
                <ul className="overflow-hidden rounded-md border border-gold/30 bg-card shadow-[var(--shadow-soft)]">
                  {CATEGORIES.map((c) => (
                    <li key={c.name}>
                      <a
                        href="#categories"
                        onClick={() => setOpen(false)}
                        className="block border-b border-border/60 px-5 py-3 text-xs tracking-[0.1em] text-navy uppercase transition-colors last:border-0 hover:bg-secondary hover:text-gold"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li>
            <a href="#legacy" className="nav-link">
              Our Legacy
            </a>
          </li>
          <li>
            <a href="#colours" className="nav-link">
              Shade Card
            </a>
          </li>
          <li>
            <a href="#visit" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919821182496"
            className="rounded-sm bg-gradient-to-r from-gold/90 to-gold-soft px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-navy-deep uppercase transition-transform hover:scale-105"
          >
            Call Us
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setMobile((m) => !m)}
            className="text-2xl text-gold lg:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      {mobile && (
        <ul className="animate-pop-in space-y-1 border-t border-gold/20 px-5 pb-5 lg:hidden">
          {["#home", "#categories", "#products", "#legacy", "#colours", "#visit"].map(
            (href, i) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobile(false)}
                  className="block py-2.5 text-xs tracking-[0.16em] text-primary-foreground/85 uppercase hover:text-gold"
                >
                  {
                    ["Home", "Products", "Shop Fabrics", "Our Legacy", "Shade Card", "Contact"][
                      i
                    ]
                  }
                </a>
              </li>
            ),
          )}
        </ul>
      )}
    </header>
  );
}

function Index() {
  useReveal();

  return (
    <div id="home" className="min-h-screen overflow-x-hidden bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-sand">
        <img
          src={heroTurban}
          alt="Navy blue Sikh turban with a gold khanda kalgi brooch"
          width={1600}
          height={1104}
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-right md:w-[68%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sand via-sand/90 to-transparent md:via-sand/70" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="reveal font-display text-5xl leading-[0.95] font-semibold tracking-tight text-navy md:text-7xl">
              Tradition.
              <br />
              Quality.
              <br />
              <span className="text-gradient-gold">Trust.</span>
            </h1>
            <p className="reveal mt-4 font-display text-3xl italic text-navy/70">
              Since 1970.
            </p>
            <div className="mt-4 h-px w-40 bg-gold/60" />
            <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-navy/80">
              For over 50 years, House of Turbans has been a trusted name among Sikh and
              Punjabi families, offering premium-quality turbans and dastars.
            </p>
            <a
              href="#categories"
              className="reveal mt-8 inline-flex items-center gap-3 bg-navy px-7 py-4 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-all hover:scale-105 hover:bg-navy-deep"
            >
              Explore Collection <span className="text-gold">›</span>
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-navy-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-7 md:grid-cols-4">
          {TRUST.map((t, i) => (
            <div
              key={t.title}
              className={`reveal px-4 text-center md:text-left ${i > 0 ? "md:border-l md:border-gold/25" : ""}`}
            >
              <p className="font-display text-lg tracking-wide text-gold">{t.title}</p>
              <p className="text-[11px] tracking-[0.18em] text-primary-foreground/65 uppercase">
                {t.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shade card + little sardar ji */}
      <section id="colours" className="relative overflow-hidden bg-secondary py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1fr_auto_auto]">
          <div className="reveal">
            <Ornament className="justify-start" />
            <h2 className="mt-4 font-display text-4xl tracking-[0.1em] text-navy uppercase">
              Choose your colour
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              More than 100 shades of premium turban fabric — for daily wear, religious
              occasions, weddings and celebrations. Tap a swatch to see it up close.
            </p>
          </div>

          <div className="reveal relative hidden justify-center md:flex">
            <div className="absolute -top-2 right-0 z-10 animate-float-soft rounded-2xl border border-gold/40 bg-card px-4 py-2 text-center font-display text-sm text-navy shadow-[var(--shadow-soft)]">
              Choose your
              <br />
              favourite colour!
            </div>
            <img
              src={sardarBoy}
              alt="Young Sikh boy in a navy patka pointing at the colour palette"
              width={720}
              height={928}
              loading="lazy"
              className="h-64 w-auto object-contain drop-shadow-xl"
            />
          </div>

          <div className="reveal flex justify-center md:justify-end">
            <ColourPaletteCard />
          </div>
        </div>
      </section>

      {/* Categories — 3D cards */}
      <section id="categories" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Shop by Category
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Handpicked premium turban fabrics and accessories — every quality, every
            occasion.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <div key={c.name} className="reveal card-3d">
                <article className="card-3d-inner group overflow-hidden rounded-md border border-gold/25 bg-card">
                  <div className="relative overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      width={800}
                      height={800}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="card-3d-layer absolute top-4 left-4 rounded-sm bg-navy-deep/90 px-3 py-1 text-[10px] tracking-[0.18em] text-gold uppercase">
                      {c.price}
                    </span>
                  </div>
                  <div className="card-3d-layer p-6">
                    <h3 className="font-display text-xl tracking-[0.1em] text-navy uppercase">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {c.blurb}
                    </p>
                    <a
                      href="#products"
                      className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase"
                    >
                      Explore Category <span>→</span>
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section id="products" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Best Selling Fabrics
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Popular shades from our shelves in Mahatma Gandhi Market — call us to order any
            length.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((p) => (
              <div key={p.name} className="reveal card-3d">
                <article className="card-3d-inner overflow-hidden rounded-md border border-gold/25 bg-card">
                  <div
                    className="relative h-44 w-full"
                    style={{
                      background: `linear-gradient(140deg, ${p.shade}, ${p.shade}cc 60%, #ffffff22)`,
                    }}
                  >
                    <span className="card-3d-layer absolute bottom-3 left-3 rounded-sm bg-navy-deep/85 px-2.5 py-1 text-[10px] tracking-[0.2em] text-gold uppercase">
                      {p.quality}
                    </span>
                  </div>
                  <div className="card-3d-layer p-5">
                    <h3 className="font-display text-lg leading-tight text-navy">{p.name}</h3>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-navy">
                        {p.price} <span className="text-xs font-normal text-muted-foreground">per m</span>
                      </span>
                      <a
                        href="tel:+919821182496"
                        className="rounded-sm border border-gold/60 px-3 py-1.5 text-[10px] tracking-[0.16em] text-navy uppercase transition-colors hover:bg-gold hover:text-navy-deep"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="reveal">
            <Ornament className="justify-start" />
            <h2 className="mt-4 font-display text-4xl tracking-[0.12em] text-navy uppercase">
              Our Legacy
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">
              <p>
                Founded by Sarnagat Singh, the store was built on the values of quality,
                trust, and dedicated customer service.
              </p>
              <p>
                Today, that legacy is proudly continued by Hardeep Singh, who remains
                committed to serving the Sikh community with the same passion and
                authenticity that have defined the business for decades.
              </p>
              <p className="border-l-2 border-gold/60 pl-4 text-navy/85">
                Located in the heart of Mumbai at Shop Nos. 95 &amp; 96, Mahatma Gandhi
                Market, King Circle, we are recognized as one of Maharashtra's oldest and
                most respected dedicated turban retailers.
              </p>
              <p>
                At House of Turbans, we believe a turban is more than a piece of fabric —
                it is a symbol of identity, heritage, dignity and pride.
              </p>
            </div>
          </div>
          <div className="reveal card-3d relative">
            <img
              src={legacyStore}
              alt="Vintage photograph of the House of Turbans fabric store in Mumbai"
              width={1200}
              height={912}
              loading="lazy"
              className="card-3d-inner w-full border-4 border-gold/30 object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="animate-float-soft absolute -bottom-8 -left-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-navy-deep text-center ring-4 ring-gold/50 md:-right-8 md:left-auto">
              <span className="font-display text-[10px] tracking-[0.2em] text-gold">OVER</span>
              <span className="font-display text-4xl leading-none text-gold">50</span>
              <span className="font-display text-[10px] tracking-[0.2em] text-gold">YEARS</span>
              <span className="mt-1 text-[8px] tracking-[0.18em] text-primary-foreground/70">
                OF TRUST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Our Collection
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            A wide range of premium turban fabrics, each with its own unique texture, feel
            and finish — so every customer finds the comfort and style they prefer.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <img
              src={fabricStack}
              alt="Stack of folded turban fabrics in many colours"
              width={1104}
              height={1200}
              loading="lazy"
              className="reveal h-full w-full object-cover"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="reveal card-3d">
                <div className="card-3d-inner h-full border border-gold/30 bg-card p-7">
                  <h3 className="font-display text-xl tracking-[0.14em] text-navy uppercase">
                    Available Qualities
                  </h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-foreground/80">
                    {QUALITIES.map((q) => (
                      <li key={q} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="reveal card-3d">
                <div className="card-3d-inner h-full border border-gold/30 bg-card p-7">
                  <h3 className="font-display text-xl tracking-[0.14em] text-navy uppercase">
                    Available Brands
                  </h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-foreground/80">
                    {BRANDS.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="reveal bg-background p-7 sm:col-span-2">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-display text-lg tracking-[0.12em] text-navy uppercase">
                      Competitive Pricing
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Premium quality turban fabrics at the best possible prices —
                      exceptional value without compromise.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg tracking-[0.12em] text-navy uppercase">
                      Serving Worldwide
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      What began as a family business in Mumbai now delivers high-quality
                      turban fabrics across India and around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2">
          <div className="reveal">
            <h2 className="font-display text-3xl tracking-[0.14em] text-gold uppercase">
              Visit Us
            </h2>
            <div className="mt-6 space-y-1 text-sm leading-relaxed text-primary-foreground/85">
              <p className="font-display text-xl text-primary-foreground">
                House of Turbans
              </p>
              <p>Shop Nos. 95 &amp; 96</p>
              <p>Mahatma Gandhi Market</p>
              <p>King Circle, Mumbai – 400022</p>
              <p>Maharashtra, India</p>
            </div>
            <a
              href="tel:+919821182496"
              className="mt-6 inline-block font-display text-2xl text-gold hover:opacity-80"
            >
              +91 98211 82496
            </a>
          </div>
          <div className="reveal flex flex-col justify-center">
            <span className="font-display text-5xl leading-none text-gold/60">“</span>
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              For over five decades, House of Turbans has stood as a symbol of quality,
              tradition, and trust, proudly serving generations of Sikh families and now
              bringing that same commitment to customers around the world.
            </p>
            <div className="mt-8">
              <Ornament className="justify-start" />
              <p className="mt-4 font-display text-2xl tracking-[0.1em] uppercase">
                House of Turbans
                <br />
                Preserving Tradition,
              </p>
              <p className="font-display text-2xl italic text-gold">
                One Turban at a Time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values + footer */}
      <footer className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="reveal flex gap-4">
              <span className="mt-1 text-gold">✦</span>
              <div>
                <p className="font-display text-base tracking-[0.1em] text-navy uppercase">
                  {v.title}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{v.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="paisley-border h-1.5" />
        <p className="bg-navy-deep py-5 text-center text-[11px] tracking-[0.18em] text-primary-foreground/60 uppercase">
          © {new Date().getFullYear()} House of Turbans · Mumbai, India
        </p>
      </footer>
    </div>
  );
}