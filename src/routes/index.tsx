import { createFileRoute } from "@tanstack/react-router";
import { ColourPalette } from "@/components/ColourPalette";
import heroTurban from "@/assets/hero-turban.jpg";
import legacyStore from "@/assets/legacy-store.jpg";
import fabricStack from "@/assets/fabric-stack.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "House of Turbans | Premium Turban & Dastar Fabrics Since 1970" },
      {
        name: "description",
        content:
          "Mumbai's trusted turban retailer since 1970. Premium dastar fabrics in 100+ colours — Viole, Malmal, Rubia and leading brands, shipped across India and worldwide.",
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

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Legacy", href: "#legacy" },
  { label: "Colours", href: "#colours" },
  { label: "Collection", href: "#collection" },
  { label: "Visit Us", href: "#visit" },
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
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gold/50" />
      <span className="text-gold">✦</span>
      <span className="h-px w-14 bg-gold/50" />
    </div>
  );
}

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-2xl text-gold">☬</span>
            <span className="leading-none">
              <span className="block font-display text-xs tracking-[0.35em] text-gold">
                HOUSE OF
              </span>
              <span className="block font-display text-2xl tracking-[0.18em] text-primary-foreground">
                TURBANS
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-gold-soft/70">
                — SINCE 1970 —
              </span>
            </span>
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-xs font-medium tracking-[0.16em] text-primary-foreground/85 uppercase transition-colors hover:text-gold"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919821182496"
            className="rounded-sm bg-gradient-to-r from-gold/90 to-gold-soft px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-navy-deep uppercase transition-opacity hover:opacity-90"
          >
            Call Us
          </a>
        </nav>
      </header>

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
            <h1 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-navy md:text-7xl">
              Tradition.
              <br />
              Quality.
              <br />
              <span className="text-gradient-gold">Trust.</span>
            </h1>
            <p className="mt-4 font-display text-3xl italic text-navy/70">Since 1970.</p>
            <div className="mt-4 h-px w-40 bg-gold/60" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-navy/80">
              For over 50 years, House of Turbans has been a trusted name among Sikh and
              Punjabi families, offering premium-quality turbans and dastars.
            </p>
            <a
              href="#collection"
              className="mt-8 inline-flex items-center gap-3 bg-navy px-7 py-4 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-navy-deep"
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
              className={`px-4 text-center md:text-left ${i > 0 ? "md:border-l md:border-gold/25" : ""}`}
            >
              <p className="font-display text-lg tracking-wide text-gold">{t.title}</p>
              <p className="text-[11px] tracking-[0.18em] text-primary-foreground/65 uppercase">
                {t.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
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
                it is a symbol of identity, heritage, dignity and pride. Every fabric we
                stock is carefully selected for comfort, durability, vibrant colour and an
                elegant drape.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={legacyStore}
              alt="Vintage photograph of the House of Turbans fabric store in Mumbai"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full border-4 border-gold/30 object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-8 -left-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-navy-deep text-center ring-4 ring-gold/50 md:-right-8 md:left-auto">
              <span className="font-display text-[10px] tracking-[0.2em] text-gold">
                OVER
              </span>
              <span className="font-display text-4xl leading-none text-gold">50</span>
              <span className="font-display text-[10px] tracking-[0.2em] text-gold">
                YEARS
              </span>
              <span className="mt-1 text-[8px] tracking-[0.18em] text-primary-foreground/70">
                OF TRUST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Colours */}
      <section id="colours" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament />
          <h2 className="mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Colour Palette
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
            Choose your favourite colour — more than 100 shades of premium turban fabric,
            for daily wear, religious occasions, weddings and celebrations.
          </p>
          <div className="mt-12">
            <ColourPalette />
          </div>
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament />
          <h2 className="mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Our Collection
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
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
              className="h-full w-full object-cover"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border border-gold/30 bg-card p-7">
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
              <div className="border border-gold/30 bg-card p-7">
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
              <div className="bg-secondary p-7 sm:col-span-2">
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
          <div>
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
          <div className="flex flex-col justify-center">
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
            <div key={v.title} className="flex gap-4">
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
