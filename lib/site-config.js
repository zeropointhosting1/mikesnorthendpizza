// Single place to update business info and the Toast ordering link.
// Every "Order Online" button on the site reads TOAST_ORDER_URL from here.
// Opening hours live in lib/hours.js.

// Public address of this site (no trailing slash). Used for canonical URLs,
// Open Graph images, the sitemap and JSON-LD. The GitHub Pages demo build
// overrides it with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mikesnorthendpizza.com';

// Toast-hosted ordering page (currently served from the Toast website on our
// domain). If mikesnorthendpizza.com is ever pointed at this site instead of
// Toast, switch this to the direct order.toasttab.com/online/... link.
export const TOAST_ORDER_URL =
  'https://mikesnorthendpizza.com/order/north-end-pizza-company-909-boston-neck-road';

export const business = {
  name: "Mike's North End Pizza Co.",
  shortName: "Mike's",
  addressLine1: '909 Boston Neck Rd',
  addressLine2: 'Narragansett, RI 02882',
  phone: '(401) 789-4950',
  phoneHref: 'tel:+14017894950',
  mapsUrl: 'https://maps.google.com/?q=909+Boston+Neck+Rd+Narragansett+RI+02882',
  // Keyless Google Maps embed (home page Visit section and /visit).
  mapEmbedUrl: 'https://maps.google.com/maps?q=909+Boston+Neck+Rd+Narragansett+RI+02882&z=15&output=embed',
  // From OpenStreetMap's record for 909 Boston Neck Rd; used in the JSON-LD.
  geo: { latitude: 41.4756133, longitude: -71.4350191 },
  instagramUrl: 'https://www.instagram.com/mikesnorthendpizza/',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61592777957263',
  googleReviewsUrl: 'https://www.google.com/search?q=mikes+north+end+pizza+narragansett',
};

export const favorites = [
  {
    name: 'Classic Cheese Pizza',
    description: 'Simple. Perfect. A local favorite for a reason.',
    image: '/images/favorite-cheese.jpg',
    width: 548,
    height: 401,
    alt: 'Classic Cheese Pizza with a cheese pull',
  },
  {
    name: 'Pepperoni Pizza',
    description: 'Crispy, cheesy, always a good idea.',
    image: '/images/favorite-pepperoni.jpg',
    width: 1200,
    height: 1200,
    alt: 'Pepperoni Pizza',
  },
  {
    name: 'Buffalo Chicken Pizza',
    description: 'A Narragansett favorite with just the right kick.',
    image: '/images/favorite-buffalo.png',
    width: 894,
    height: 639,
    alt: 'Buffalo Chicken Pizza',
  },
];

// Copied from the Google listing (Sep 2026). Per-review star ratings weren't
// captured, so cards show no stars; the overall rating is in reviewSummary.
export const reviewSummary = { rating: 4.6, count: 18 };

export const reviews = [
  { name: 'Shea H.', quote: "Wowza! Took a bite and my heart skipped a beat! Nothing east of the Mississippi will satisfy your hunger like Mike's North End Pizza Co. Great vibe and the friendliest workers you could ask for. All I can say is I WAS hungry. Not anymore. Thanks Mike!" },
  { name: 'Skylar O.', quote: "This was the best pizza I have ever ate ever. The crust was so crisp and delicious, I need another one right now. The vibe and atmosphere here is unmatchable. Grab a beer from Pelly's to wash down the infamous Mike's pizza and you're set for life. I'm coming back every day." },
  { name: 'Nick E.', quote: 'Excellent pizza and great hospitality! Fantastic selection of wine and beer. Mike has brought authentic Italian traditions to Narragansett! Loved the aperitivo menu!' },
  { name: 'Jay L.', quote: 'Great food. Great atmosphere. Clean bathroom. Will be back.' },
];

// Footer credit for the studio that built the site. Set url to link the name.
export const siteCredit = { name: 'Zeropoint', url: 'https://zeropointhosting1.github.io/zeropoint' };

// Every header/footer nav item is its own real page.
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/order', label: 'Order Online' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit Us' },
];
