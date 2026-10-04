// Static fallback content. Sources: source/MENU, source/PRESENT (brand deck).
// Every shape here is what the CMS adapter in ./api.ts should return.

export type MenuItem = {
  name: string;
  price: number;
  note?: string;
  image?: string;
};

export type MenuCategory = {
  slug: string;
  title: string;
  tagline?: string;
  items: MenuItem[];
};

export type SiteSettings = {
  brand: string;
  tagline: string;
  address: string[];
  phone: string;
  phoneHref: string;
  email?: string;
  line?: string;
  hours?: string;
  mapUrl: string;
  social: { label: string; href: string; handle: string }[];
};

export const siteSettings: SiteSettings = {
  brand: "YOKII Yogurt House",
  tagline: "Sip the good mood",
  address: [
    "Serm-Mit Tower",
    "159 Sukhumvit 21 Road, Khlong Toei Nuea",
    "Watthana, Bangkok 10110",
  ],
  phone: "080-274-4440",
  phoneHref: "tel:+66802744440",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Serm-Mit+Tower+159+Sukhumvit+21+Road+Bangkok",
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/yokiiyogurthouse",
      handle: "@yokiiyogurthouse",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/yokiiyogurthouse",
      handle: "@yokiiyogurthouse",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@yokiiyogurthouse",
      handle: "@yokiiyogurthouse",
    },
  ],
};

export const menu: MenuCategory[] = [
  {
    slug: "signature",
    title: "Signature",
    tagline: "Our most-loved cups",
    items: [
      { name: "Thai Tea Cream Cheese", price: 89, image: "/images/thai-tea.webp" },
      {
        name: "Black Sesame Cream Cheese",
        price: 89,
        image: "/images/black-sesame-cc.webp",
      },
    ],
  },
  {
    slug: "berry-bliss",
    title: "Berry Bliss",
    tagline: "Fruity, fluffy, a little bit dreamy",
    items: [
      { name: "Strawberry", price: 79, image: "/images/strawberry.webp" },
      { name: "Mixed Berry", price: 89, image: "/images/mixed-berry.webp" },
    ],
  },
  {
    slug: "tropical-fresh",
    title: "Tropical Fresh",
    items: [
      { name: "Passion Fruit", price: 89 },
      { name: "Mango", price: 89 },
      { name: "Pineapple", price: 89 },
      { name: "Banana", price: 79 },
    ],
  },
  {
    slug: "superfood",
    title: "Superfood",
    items: [
      { name: "Avocado", price: 99 },
      { name: "Acai Berry", price: 99 },
      { name: "Vocado Honey", price: 119 },
    ],
  },
  {
    slug: "treat-yourself",
    title: "Treat Yourself",
    items: [
      { name: "Original", price: 59 },
      { name: "Black Sticky Rice", price: 69 },
      { name: "Honey", price: 79 },
      { name: "Oat", price: 79 },
      { name: "Yogurt Pudding", price: 79 },
    ],
  },
  {
    slug: "add-your-boost",
    title: "Add Your Boost",
    items: [
      { name: "Pipo", price: 69 },
      { name: "Black Sesame", price: 69 },
      { name: "Bua Loy", price: 79 },
      { name: "Honey Jelly", price: 79 },
      { name: "Oreo", price: 79 },
      { name: "Honey Almond", price: 99 },
      { name: "Chocolate Strawberry", price: 89 },
      { name: "Dark Cocoa Banana", price: 99 },
    ],
  },
];

export const whyYokii = [
  "100% Pure Yogurt",
  "No Yogurt Powder",
  "Real Fruits & Real Ingredients",
  "Freshly Blended Every Cup",
  "No Artificial Ingredients",
  "High in Probiotics",
  "Good for Gut Health",
  "Made to Order",
];

export const franchisePackage = [
  "Complete Shop Design",
  "Kiosk Design Package",
  "Brand Identity System",
  "Menu & Recipe Standards",
  "Equipment Guidance",
  "Staff Training Support",
  "Marketing Materials",
  "Opening Consultation",
];
