import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/catalog";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-14 bg-gold/50" />
      <span className="text-gold">✦</span>
      <span className="h-px w-14 bg-gold/50" />
    </div>
  );
}

const NAV = [
  { label: "Home", to: "/", hash: "home" },
  { label: "Our Legacy", to: "/", hash: "legacy" },
  { label: "Shade Card", to: "/", hash: "colours" },
  { label: "Contact", to: "/", hash: "visit" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const qualities = PRODUCTS.filter((p) => p.kind === "Quality");
  const brands = PRODUCTS.filter((p) => p.kind === "Brand");

  return (
    <header className="sticky top-0 z-50 bg-navy-deep/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <Link to="/" hash="home" className="nav-link">
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="nav-link flex items-center gap-1.5"
              onClick={() => setOpen((o) => !o)}
            >
              Products <span className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {open && (
              <div className="animate-pop-in absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-md border border-gold/30 bg-card shadow-[var(--shadow-soft)]">
                  <p className="bg-secondary px-5 py-2 text-[9px] tracking-[0.24em] text-muted-foreground uppercase">
                    Qualities
                  </p>
                  <ul>
                    {qualities.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="block border-b border-border/60 px-5 py-2.5 text-xs tracking-[0.1em] text-navy uppercase transition-colors hover:bg-secondary hover:text-gold"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="bg-secondary px-5 py-2 text-[9px] tracking-[0.24em] text-muted-foreground uppercase">
                    Brands
                  </p>
                  <ul>
                    {brands.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/products/$slug"
                          params={{ slug: p.slug }}
                          onClick={() => setOpen(false)}
                          className="block border-b border-border/60 px-5 py-2.5 text-xs tracking-[0.1em] text-navy uppercase transition-colors last:border-0 hover:bg-secondary hover:text-gold"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="block bg-navy-deep px-5 py-3 text-center text-[10px] tracking-[0.2em] text-gold uppercase"
                  >
                    View all products
                  </Link>
                </div>
              </div>
            )}
          </li>
          {NAV.slice(1).map((n) => (
            <li key={n.label}>
              <Link to={n.to} hash={n.hash} className="nav-link">
                {n.label}
              </Link>
            </li>
          ))}
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
        <div className="animate-pop-in border-t border-gold/20 px-5 pb-5 lg:hidden">
          <Link
            to="/products"
            onClick={() => setMobile(false)}
            className="block py-2.5 text-xs tracking-[0.16em] text-gold uppercase"
          >
            All Products
          </Link>
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              onClick={() => setMobile(false)}
              className="block py-2 text-xs tracking-[0.14em] text-primary-foreground/85 uppercase hover:text-gold"
            >
              {p.name}
            </Link>
          ))}
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={n.hash}
              onClick={() => setMobile(false)}
              className="block py-2 text-xs tracking-[0.16em] text-primary-foreground/85 uppercase hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const VALUES = [
  { title: "Finest Fabrics", sub: "Carefully selected for comfort & elegance" },
  { title: "Vibrant Colours", sub: "More than 100 shades to choose from" },
  { title: "Authentic & Trusted", sub: "A legacy built on trust, quality & service" },
  { title: "Customer First", sub: "Dedicated support & personal attention" },
];

export function SiteFooter() {
  return (
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
  );
}
