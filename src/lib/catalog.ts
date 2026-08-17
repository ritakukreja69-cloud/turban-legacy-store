import catFullVoile from "@/assets/cat-full-voile.jpg";
import catRubia from "@/assets/cat-rubia.jpg";
import catHeavyRubia from "@/assets/cat-heavy-rubia.jpg";
import catMalmal from "@/assets/cat-malmal.jpg";
import catSoftVoile from "@/assets/cat-soft-voile.jpg";
import catBrand from "@/assets/cat-brand.jpg";
import vTying from "@/assets/turban-tying.mp4.asset.json";
import vVoile from "@/assets/video-voile.mp4.asset.json";
import vBlue from "@/assets/video-tying-blue.mp4.asset.json";
import vShop from "@/assets/video-shop.mp4.asset.json";
import vMalmal from "@/assets/video-malmal.mp4.asset.json";
import vWedding from "@/assets/video-wedding.mp4.asset.json";
import vPatka from "@/assets/video-patka.mp4.asset.json";
import vRubia from "@/assets/video-rubia.mp4.asset.json";

export const VIDEOS = {
  tying: vTying.url,
  voile: vVoile.url,
  blue: vBlue.url,
  shop: vShop.url,
  malmal: vMalmal.url,
  wedding: vWedding.url,
  patka: vPatka.url,
  rubia: vRubia.url,
};

export const PHONE = "+91 98211 82496";
const WA_NUMBER = "919821182496";

export function whatsappLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  slug: string;
  name: string;
  kind: "Quality" | "Brand";
  tagline: string;
  img: string;
  video: string;
  intro: string;
  details: string[];
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "viole",
    name: "Viole",
    kind: "Quality",
    tagline: "The classic everyday turban fabric",
    img: catFullVoile,
    video: VIDEOS.voile,
    intro:
      "Viole is our lightest, most breathable turban cloth — the quality most of our customers wear day after day. It ties quickly, sits soft on the head and stays comfortable through Mumbai's warmest afternoons.",
    details: [
      "Fine, open weave that lets air pass through freely — ideal for daily wear and hot weather.",
      "Ties easily and forgivingly, which makes it a favourite for anyone learning to tie a dastar.",
      "Colour-fast dyeing keeps the shade rich wash after wash.",
      "Available in more than 100 shades from our in-store shade card.",
    ],
    specs: [
      { label: "Feel", value: "Light and airy" },
      { label: "Drape", value: "Soft, relaxed fall" },
      { label: "Best for", value: "Daily wear, school, work" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "full-viole",
    name: "Full Viole",
    kind: "Quality",
    tagline: "Fuller body, sharper pech",
    img: catFullVoile,
    video: VIDEOS.blue,
    intro:
      "Full Viole carries a little more body than plain Viole, so each pech sits crisp and even. It is the quality we recommend when you want a neat, dignified turban that still breathes.",
    details: [
      "Denser than standard Viole while remaining light on the head.",
      "Holds sharp, defined layers — excellent for a clean, formal look.",
      "Even finish across the full width of the cloth, with no thin patches.",
      "Our most requested quality for gurdwara visits and family functions.",
    ],
    specs: [
      { label: "Feel", value: "Light with structure" },
      { label: "Drape", value: "Crisp, defined pech" },
      { label: "Best for", value: "Daily and formal wear" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "soft-voile",
    name: "Soft Voile",
    kind: "Quality",
    tagline: "Gentle handle, effortless drape",
    img: catSoftVoile,
    video: VIDEOS.tying,
    intro:
      "Soft Voile has an especially smooth handle. The cloth glides while tying and settles into a graceful, rounded shape — a comfortable choice for long days and for elders.",
    details: [
      "Extra-soft finish that is kind on the forehead and hairline.",
      "Glides smoothly during tying, reducing pull and creasing.",
      "Beautiful in pastels and light shades where softness shows.",
      "Retains its gentle handle even after repeated washing.",
    ],
    specs: [
      { label: "Feel", value: "Very soft" },
      { label: "Drape", value: "Smooth and rounded" },
      { label: "Best for", value: "Comfort, long wear" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "malmal",
    name: "Malmal",
    kind: "Quality",
    tagline: "Feather-light traditional muslin",
    img: catMalmal,
    video: VIDEOS.malmal,
    intro:
      "Malmal is the traditional fine muslin loved for its featherweight feel. Wonderfully cool in summer, it is also the classic choice for dumala and larger traditional styles.",
    details: [
      "The lightest cloth we stock — barely felt once tied.",
      "Naturally cool and highly breathable, perfect for peak summer.",
      "Long lengths available for dumala and full traditional styles.",
      "Beautiful in white, kesari and other classic shades.",
    ],
    specs: [
      { label: "Feel", value: "Feather-light muslin" },
      { label: "Drape", value: "Fluid and flowing" },
      { label: "Best for", value: "Summer, dumala styles" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "rubia",
    name: "Rubia",
    kind: "Quality",
    tagline: "Rich matte finish, formal presence",
    img: catRubia,
    video: VIDEOS.rubia,
    intro:
      "Rubia is a denser, matte-finished cloth with a deep, saturated colour. It holds a strong, structured shape and is the quality most often chosen for weddings and special occasions.",
    details: [
      "Dense weave that holds a firm, formal shape all day.",
      "Deep matte finish makes colours look rich and full.",
      "Excellent opacity — no show-through, even in lighter shades.",
      "Available in our premium branded ranges as well as plain stock.",
    ],
    specs: [
      { label: "Feel", value: "Dense and substantial" },
      { label: "Drape", value: "Structured, holds shape" },
      { label: "Best for", value: "Weddings, occasions" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "kohinoor-hira",
    name: "Kohinoor Hira",
    kind: "Brand",
    tagline: "A trusted name for fine voile",
    img: catBrand,
    video: VIDEOS.wedding,
    intro:
      "Kohinoor Hira is one of the most recognised names in turban cloth. Consistent width, dependable weave and a clean finish — a brand our customers have asked for by name for decades.",
    details: [
      "Consistent quality mill to mill, roll to roll.",
      "Clean, even selvedge and reliable full width.",
      "Bright, stable dyes across the full shade range.",
      "Stocked continuously so your regular shade is always available.",
    ],
    specs: [
      { label: "Type", value: "Premium voile" },
      { label: "Finish", value: "Smooth, even" },
      { label: "Best for", value: "Everyday and formal" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "kohinoor-rubia",
    name: "Kohinoor Rubia",
    kind: "Brand",
    tagline: "Premium rubia from a legendary mill",
    img: catBrand,
    video: VIDEOS.rubia,
    intro:
      "The rubia range from Kohinoor: heavier, matte and beautifully finished. A favourite for grooms, granthis and anyone who wants a turban with real presence.",
    details: [
      "Heavier rubia weave with an even, luxurious matte face.",
      "Superb colour depth in reds, maroons, navy and kesari.",
      "Holds pech shape crisply through a long function.",
      "Long-standing mill reputation for consistency.",
    ],
    specs: [
      { label: "Type", value: "Premium rubia" },
      { label: "Finish", value: "Deep matte" },
      { label: "Best for", value: "Weddings, ceremonies" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "sundar-rubia",
    name: "Sundar Rubia",
    kind: "Brand",
    tagline: "Balanced weight, brilliant colour",
    img: catBrand,
    video: VIDEOS.shop,
    intro:
      "Sundar Rubia strikes a fine balance — enough weight for a sharp turban, light enough for regular wear. Its colour range is among the brightest on our shelves.",
    details: [
      "Medium-heavy rubia suited to both daily and occasion wear.",
      "Vivid, clean shades with excellent colour-fastness.",
      "Soft enough to tie comfortably straight off the roll.",
      "Popular with younger customers for bold, bright turbans.",
    ],
    specs: [
      { label: "Type", value: "Rubia" },
      { label: "Finish", value: "Matte, vivid colour" },
      { label: "Best for", value: "Everyday and occasions" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
  {
    slug: "deepak-rubia",
    name: "Deepak Rubia",
    kind: "Brand",
    tagline: "Dependable heavy rubia",
    img: catHeavyRubia,
    video: VIDEOS.blue,
    intro:
      "Deepak Rubia is our sturdiest branded rubia. Customers who prefer a firm, tall turban with a very defined shape return to this brand again and again.",
    details: [
      "Heavier handle that supports large, structured styles.",
      "Very good opacity and a firm, clean edge.",
      "Deep traditional shades including neela, maroon and black.",
      "Wears well over years of regular tying and washing.",
    ],
    specs: [
      { label: "Type", value: "Heavy rubia" },
      { label: "Finish", value: "Firm matte" },
      { label: "Best for", value: "Tall, structured turbans" },
      { label: "Cut", value: "Any length, cut to order" },
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const COLOURS: { name: string; hex: string }[] = [
  { name: "Kesari Saffron", hex: "#e07a1f" },
  { name: "Dashmesh Neela", hex: "#1f2a4a" },
  { name: "Royal Red", hex: "#c9243a" },
  { name: "Ivory White", hex: "#f2f2ef" },
  { name: "Deep Maroon", hex: "#6b1f2a" },
  { name: "Azure Blue", hex: "#2a5bc9" },
  { name: "Rose Pink", hex: "#e0426b" },
  { name: "Regal Yellow", hex: "#e8a82a" },
  { name: "Ocean Green", hex: "#1f7a8a" },
  { name: "Bottle Green", hex: "#1f4a3a" },
  { name: "Jet Black", hex: "#141414" },
  { name: "Sky Blue", hex: "#5b8ac9" },
  { name: "Peacock Teal", hex: "#1a5b63" },
  { name: "Mustard Gold", hex: "#8a7a2f" },
  { name: "Wine Purple", hex: "#5b3a7a" },
  { name: "Silver Grey", hex: "#b0b0b0" },
  { name: "Coral Orange", hex: "#e06a2a" },
  { name: "Parrot Green", hex: "#8ac92a" },
  { name: "Lavender", hex: "#b3a8d6" },
  { name: "Cream Beige", hex: "#d6cfa8" },
  { name: "Rani Pink", hex: "#c9284a" },
  { name: "Navy Ink", hex: "#1f1f3a" },
  { name: "Turquoise", hex: "#3fb3c4" },
  { name: "Chocolate Brown", hex: "#4a2b1f" },
];
