import { createFileRoute, Link } from "@tanstack/react-router";
import { ColourChart } from "@/components/ColourPalette";
import { Ornament, SiteFooter, SiteNav } from "@/components/SiteChrome";
import { VideoFrame } from "@/components/VideoFrame";
import { useReveal } from "@/hooks/use-reveal";
import { PRODUCTS, VIDEOS, whatsappLink } from "@/lib/catalog";
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
          "Mumbai's trusted turban retailer since 1970. Premium dastar fabrics in 100+ colours — Viole, Full Viole, Soft Voile, Malmal and Rubia from Kohinoor, Sundar and Deepak.",
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

const TRUST = [
  { title: "50+ Years", sub: "of legacy" },
  { title: "Premium", sub: "quality fabrics" },
  { title: "Trusted by", sub: "generations" },
  { title: "Serving", sub: "worldwide" },
];

const QUALITIES = PRODUCTS.filter((p) => p.kind === "Quality");
const BRANDS = PRODUCTS.filter((p) => p.kind === "Brand");

function ProductCard({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <div className="reveal card-3d">
      <article className="card-3d-deep group h-full overflow-hidden rounded-md border border-gold/25 bg-card">
        <div className="relative overflow-hidden">
          <img
            src={p.img}
            alt={`${p.name} turban fabric`}
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
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-gold uppercase"
            >
              View details <span>→</span>
            </Link>
            <a
              href={whatsappLink(
                `Hello House of Turbans, I would like to enquire about ${p.name} turban fabric.`,
              )}
              target="_blank"
              rel="noreferrer"
              className="ml-auto rounded-sm border border-gold/60 px-3 py-1.5 text-[10px] tracking-[0.16em] text-navy uppercase transition-colors hover:bg-gold hover:text-navy-deep"
            >
              Enquire
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function VideoSection({
  id,
  title,
  body,
  video,
  video2,
  label,
  label2,
  flip,
  dark,
  cta,
  badge,
}: {
  id?: string;
  title: string;
  body: string;
  video: string;
  video2: string;
  label: string;
  label2: string;
  flip?: boolean;
  dark?: boolean;
  cta?: { text: string; message: string };
  badge?: { top: string; bottom: string };
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-12 ${dark ? "bg-navy-deep text-primary-foreground" : "bg-background"}`}
    >
      <div
        className={`pointer-events-none absolute -top-40 h-[20rem] w-[20rem] rounded-full border ring-spin ${dark ? "border-gold/20" : "border-gold/15"} ${flip ? "-left-32" : "-right-32"}`}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
        <div className={`reveal ${flip ? "md:order-2" : ""}`}>
          <Ornament className="justify-start" />
          <h2
            className={`mt-3 font-display text-3xl tracking-[0.12em] uppercase ${dark ? "text-gold" : "text-navy"}`}
          >
            {title}
          </h2>
          <p
            className={`mt-3 max-w-md text-sm leading-relaxed ${dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}
          >
            {body}
          </p>
          {cta && (
            <a
              href={whatsappLink(cta.message)}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex items-center gap-3 border px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all hover:scale-105 ${
                dark
                  ? "border-gold/60 text-gold hover:bg-gold hover:text-navy-deep"
                  : "border-navy/40 text-navy hover:bg-navy hover:text-primary-foreground"
              }`}
            >
              {cta.text} <span>›</span>
            </a>
          )}
        </div>
        <div className={`reveal grid grid-cols-2 gap-3 ${flip ? "md:order-1" : ""}`}>
          <VideoFrame
            src={video}
            label={label}
            className="h-[13rem] w-full md:h-[17rem]"
            {...(badge ? { badge } : {})}
          />
          <VideoFrame
            src={video2}
            label={label2}
            className="h-[13rem] w-full md:h-[17rem]"
          />
        </div>
      </div>
    </section>
  );
}

function Index() {
  useReveal();

  return (
    <div id="home" className="min-h-screen overflow-x-hidden bg-background">
      <SiteNav />

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
            <p className="reveal mt-4 font-display text-3xl italic text-navy/70">Since 1970.</p>
            <div className="mt-4 h-px w-40 bg-gold/60" />
            <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-navy/80">
              For over 50 years, House of Turbans has been a trusted name among Sikh and
              Punjabi families, offering premium-quality turbans and dastars.
            </p>
            <Link
              to="/products"
              className="reveal mt-8 inline-flex items-center gap-3 bg-navy px-7 py-4 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase transition-all hover:scale-105 hover:bg-navy-deep"
            >
              Explore Collection <span className="text-gold">›</span>
            </Link>
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

      {/* Video 1 — The Art of Tying */}
      <VideoSection
        id="art"
        dark
        title="The Art of Tying"
        body="Watch how our fabric moves — the fall, the sheen and the crisp pech that only a truly premium dastar can hold. Every metre is chosen so the drape sits right, all day long."
        video={VIDEOS.tying}
        video2={VIDEOS.blue}
        label="A Sikh man tying a royal blue turban"
        label2="A royal blue dastar being tied, pech by pech"
        badge={{ top: "100+", bottom: "shades in store" }}
        cta={{
          text: "Ask us anything",
          message: "Hello House of Turbans, I would like to know more about your turban fabrics.",
        }}
      />

      {/* Colour chart */}
      <section id="colours" className="relative overflow-hidden bg-secondary py-12">
        <div className="mx-auto max-w-6xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-3 text-center font-display text-3xl tracking-[0.1em] text-navy uppercase md:text-4xl">
            Choose your colour
          </h2>
          <p className="reveal mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Our full mill colour chart — every shade we stock, by its shade number. Note the
            number and message us to check availability.
          </p>
          <div className="reveal mt-8">
            <ColourChart />
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section id="categories" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Available Qualities
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Viole, Full Viole, Soft Voile, Malmal and Rubia — each with its own texture,
            feel and finish. Open a fabric to see its video and full colour range.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {QUALITIES.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Video 2 — inside the shop */}
      <VideoSection
        title="Inside Our Shop"
        body="Shelf after shelf of turban cloth at Mahatma Gandhi Market, King Circle. Fifty years of stocking, folding and cutting fabric for families who keep coming back."
        video={VIDEOS.shop}
        video2={VIDEOS.rubia}
        label="Camera gliding over stacks of colourful turban fabric in the shop"
        label2="Rolls of rubia turban cloth on the shop shelves"
        flip
        cta={{
          text: "Check availability",
          message: "Hello House of Turbans, is my shade available in stock right now?",
        }}
      />

      {/* Brands */}
      <section id="products" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Ornament className="justify-center" />
          <h2 className="reveal mt-4 text-center font-display text-4xl tracking-[0.12em] text-navy uppercase">
            Available Brands
          </h2>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
            Kohinoor Hira, Kohinoor Rubia, Sundar Rubia and Deepak Rubia — trusted mills our
            customers ask for by name.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Video 3 — wedding */}
      <VideoSection
        dark
        title="For the Big Day"
        body="Weddings, Anand Karaj and family celebrations call for a turban with presence. Our heavier rubia ranges hold a tall, sharp shape from the milni right through to the last dance."
        video={VIDEOS.wedding}
        video2={VIDEOS.tying}
        label="A Sikh groom in a maroon wedding turban with a gold kalgi"
        label2="A groom setting the final pech of his wedding turban"
        cta={{
          text: "Plan a wedding turban",
          message: "Hello House of Turbans, I need turban fabric for a wedding. Please guide me.",
        }}
      />

      {/* Video 4 — voile drape */}
      <VideoSection
        title="How Voile Falls"
        body="Light, open and easy to tie. Watch the way our voile catches the air — the reason it is the everyday choice for thousands of our customers."
        video={VIDEOS.voile}
        video2={VIDEOS.malmal}
        label="Hands unfolding a saffron voile turban fabric in sunlight"
        label2="Soft voile fabric drifting in the light"
        flip
        cta={{
          text: "Enquire about voile",
          message: "Hello House of Turbans, I would like to enquire about Voile fabric.",
        }}
      />

      {/* Video 5 — malmal texture */}
      <VideoSection
        dark
        title="Malmal, Up Close"
        body="A macro look at fine malmal muslin — the featherweight weave that keeps you cool through Mumbai's summer and drapes beautifully in traditional dumala styles."
        video={VIDEOS.malmal}
        video2={VIDEOS.voile}
        label="Macro shot of fine white malmal cotton weave"
        label2="Fine malmal muslin catching the breeze"
        flip
        cta={{
          text: "Enquire about malmal",
          message: "Hello House of Turbans, I would like to enquire about Malmal fabric.",
        }}
      />

      {/* Video 6 — patka */}
      <VideoSection
        title="Patkas for Little Ones"
        body="Soft, bright and comfortable cloth for children — cut to size so it ties quickly before school and stays put all day."
        video={VIDEOS.patka}
        video2={VIDEOS.blue}
        label="A father tying an orange patka for his young son"
        label2="A boy in a bright patka running in the sun"
        cta={{
          text: "Enquire about patkas",
          message: "Hello House of Turbans, I would like to enquire about patka fabric for my child.",
        }}
      />

      {/* Video 7 — rubia */}
      <VideoSection
        dark
        title="Rubia in Motion"
        body="Dense, matte and deeply coloured. Rubia holds its shape like no other cloth on our shelves — see how the light sits on the weave."
        video={VIDEOS.rubia}
        video2={VIDEOS.wedding}
        label="Deep red rubia turban fabric turning in studio light"
        label2="Deep coloured rubia folded into a sharp turban"
        flip
        cta={{
          text: "Enquire about rubia",
          message: "Hello House of Turbans, I would like to enquire about Rubia fabric.",
        }}
      />

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
                      <li key={q.slug}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: q.slug }}
                          className="flex items-center gap-3 hover:text-gold"
                        >
                          <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {q.name}
                        </Link>
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
                      <li key={b.slug}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: b.slug }}
                          className="flex items-center gap-3 hover:text-gold"
                        >
                          <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {b.name}
                        </Link>
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
              <p className="font-display text-xl text-primary-foreground">House of Turbans</p>
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
            <a
              href={whatsappLink("Hello House of Turbans, I would like to place an enquiry.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block w-fit bg-gradient-to-r from-gold/90 to-gold-soft px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-navy-deep uppercase transition-transform hover:scale-105"
            >
              Message us on WhatsApp
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
              <p className="font-display text-2xl italic text-gold">One Turban at a Time.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
