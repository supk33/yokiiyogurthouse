// Static fallback content. Sources: source/MENU, source/PRESENT (brand deck).
// Every shape here is what the CMS adapter in ./api.ts should return.

export type MenuItem = {
  name: string;
  nameEn?: string;
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
  email: "info@yokiiyogurthouse.com",
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
    slug: "yogurt-smoothie",
    title: "Yogurt Smoothie",
    tagline: "โยเกิร์ตปั่นสดทุกแก้ว — 100% real yogurt & real fruit",
    items: [
      { name: "โยเกิร์ตปั่น Original", nameEn: "Original Yogurt Smoothie", price: 59, image: "/images/menu/original.webp" },
      { name: "โยเกิร์ตสตรอเบอรี่", nameEn: "Strawberry", price: 79, image: "/images/menu/strawberry.webp" },
      { name: "โยเกิร์ตมิกซ์เบอร์รี่", nameEn: "Mixed Berry", price: 89, image: "/images/menu/mixed-berry.webp" },
      { name: "โยเกิร์ตอะโวคาโด", nameEn: "Avocado", price: 99, image: "/images/menu/avocado.webp" },
      { name: "โยเกิร์ตปั่นเสาวรส", nameEn: "Passion Fruit", price: 89, image: "/images/menu/passion-fruit.webp" },
      { name: "โยเกิร์ตปั่นบัวลอย", nameEn: "Bua Loy", price: 79, image: "/images/menu/bua-loy.webp" },
      { name: "โยเกิร์ตปั่นข้าวเหนียวดำ", nameEn: "Black Sticky Rice", price: 69, image: "/images/menu/black-sticky-rice.webp" },
      { name: "โยเกิร์ตปั่นวุ้นน้ำผึ้ง", nameEn: "Honey Jelly", price: 79, image: "/images/menu/honey-jelly.webp" },
      { name: "โยเกิร์ตปั่นมะม่วง", nameEn: "Mango", price: 89, image: "/images/menu/mango.webp" },
      { name: "โยเกิร์ตปั่นปีโป้", nameEn: "Pipo", price: 69, image: "/images/menu/pipo.webp" },
      { name: "โยเกิร์ตปั่นโอริโอ้", nameEn: "Oreo", price: 79, image: "/images/menu/oreo.webp" },
      { name: "โยเกิร์ตปั่นช็อกโกแลตสตรอว์เบอร์รี่", nameEn: "Chocolate Strawberry", price: 89, image: "/images/menu/chocolate-strawberry.webp" },
      { name: "โยเกิร์ตผักเคลสับปะรด", nameEn: "Kale Pineapple", price: 109, image: "/images/menu/kale-pineapple.webp" },
      { name: "โยเกิร์ตดาร์คโกโก้กล้วยหอม", nameEn: "Dark Cocoa Banana", price: 99, image: "/images/menu/dark-cocoa-banana.webp" },
      { name: "โยเกิร์ตปั่นงาดำ", nameEn: "Black Sesame", price: 69, image: "/images/menu/black-sesame.webp" },
      { name: "โยเกิร์ตอัลมอนด์น้ำผึ้ง", nameEn: "Honey Almond", price: 99, image: "/images/menu/honey-almond.webp" },
      { name: "บิสคอฟน้ำผึ้ง", nameEn: "Biscoff Honey", price: 99, image: "/images/menu/biscoff-honey.webp" },
    ],
  },
  {
    slug: "signature",
    title: "Signature",
    tagline: "Our most-loved cups",
    items: [
      { name: "โยเกิร์ตปั่นชาไทยครีมชีสบุกบราวชูก้า", nameEn: "Thai Tea Cream Cheese Brown Sugar Konjac", price: 89, image: "/images/menu/thai-tea-konjac.webp" },
      { name: "โยเกิร์ตสตรอเบอร์รี่อัลมอนด์วิป", nameEn: "Strawberry Almond Whip", price: 119, note: "Strawberry · Whipped cream · Coarse-ground almonds", image: "/images/menu/strawberry-almond-whip.webp" },
    ],
  },
  {
    slug: "toppings",
    title: "Toppings",
    tagline: "Add your boost — ฿15 · ฿20 · ฿25",
    items: [
      { name: "ข้าวเหนียวดำ", nameEn: "Black Sticky Rice", price: 15 },
      { name: "งาดำ", nameEn: "Black Sesame", price: 15 },
      { name: "เมล็ดเจีย", nameEn: "Chia Seeds", price: 15 },
      { name: "ปีโป้", nameEn: "Pipo", price: 15 },
      { name: "ว่านหางจระเข้", nameEn: "Aloe Vera", price: 15 },
      { name: "วุ้นน้ำผึ้ง", nameEn: "Honey Jelly", price: 15 },
      { name: "บุกบราว", nameEn: "Brown Sugar Konjac", price: 15 },
      { name: "น้ำผึ้ง", nameEn: "Honey", price: 15 },
      { name: "บัวลอย", nameEn: "Bua Loy", price: 15 },
      { name: "โอริโอ้", nameEn: "Oreo", price: 15 },
      { name: "กล้วย", nameEn: "Banana", price: 15 },
      { name: "บิสคอฟ", nameEn: "Biscoff", price: 15 },
      { name: "สตรอเบอรี่", nameEn: "Strawberry", price: 20 },
      { name: "อัลมอนด์", nameEn: "Almond", price: 20 },
      { name: "เสาวรส", nameEn: "Passion Fruit", price: 20 },
      { name: "มะม่วง", nameEn: "Mango", price: 20 },
      { name: "สับปะรด", nameEn: "Pineapple", price: 20 },
      { name: "มิ๊กซ์เบอรี่", nameEn: "Mixed Berry", price: 20 },
      { name: "ผักเคล", nameEn: "Kale", price: 20 },
      { name: "วิปครีม", nameEn: "Whipped Cream", price: 20 },
      { name: "ครีมชีส", nameEn: "Cream Cheese", price: 20 },
      { name: "อะโวคาโด", nameEn: "Avocado", price: 25 },
    ],
  },
  {
    slug: "greek-yogurt",
    title: "Greek Yogurt",
    tagline: "Probiotics · Real Fruit",
    items: [
      { name: "Berry Granola Honey", price: 129, note: "Greek Yogurt · Strawberry · Blueberry · Banana · Granola · Honey", image: "/images/menu/greek-berry-granola.webp" },
      { name: "Golden Mango Delight", price: 119, note: "Greek Yogurt · Mango · Kiwi · Granola · Chia Seeds · Honey", image: "/images/menu/greek-golden-mango.webp" },
      { name: "Dark Chocolate Strawberry", price: 139, note: "Greek Yogurt · Strawberry · Banana · Dark Chocolate · Almond Slices · Chocolate Flakes", image: "/images/menu/greek-dark-choc-strawberry.webp" },
      { name: "Biscoff Banana Crunch", price: 109, note: "Greek Yogurt · Banana · Biscoff Spread · Biscoff Crumble", image: "/images/menu/greek-biscoff-banana.webp" },
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
