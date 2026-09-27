// Single place to update business info and the Toast ordering link.
// Every "Order Online" button on the site reads TOAST_ORDER_URL from here.
// Opening hours live in lib/hours.js.

// Public address of this site (no trailing slash). Used for canonical URLs,
// Open Graph images, the sitemap and JSON-LD. The GitHub Pages demo build
// overrides it with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mikesnorthendpizza.com';

// Toast-hosted ordering page, served from the order. subdomain so the main
// domain can point at this site.
export const TOAST_ORDER_URL =
  'https://order.mikesnorthendpizza.com';

export const business = {
  name: "Mike's North End Pizza Co.",
  shortName: "Mike's",
  addressLine1: '909 Boston Neck Rd',
  addressLine2: 'Narragansett, RI 02882',
  phone: '(401) 789-4950',
  phoneHref: 'tel:+14017894950',
  mapsUrl: 'https://maps.google.com/?q=909+Boston+Neck+Rd+Narragansett+RI+02882',
  // Keyless Google Maps embed (home page Visit section and /visit). This is the
  // URL maps.google.com/maps?q=…&output=embed redirects to; using it directly
  // skips that redirect.
  mapEmbedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s909+Boston+Neck+Rd+Narragansett+RI+02882!6i15',
  // From OpenStreetMap's record for 909 Boston Neck Rd; used in the JSON-LD.
  geo: { latitude: 41.4756133, longitude: -71.4350191 },
  instagramUrl: 'https://www.instagram.com/mikesnorthendpizza/',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61592777957263',
  googleReviewsUrl: 'https://www.google.com/search?q=mikes+north+end+pizza+narragansett#lrd=0x89e5bb142fe3b48f:0x1203559b11f08c96,1,,,,',
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
    name: 'Italian Grinder',
    description: 'Stacked high and loaded just the way you like it.',
    image: '/images/favorite-grinder.jpg',
    width: 1200,
    height: 800,
    alt: 'An Italian grinder stacked with salami, ham, provolone, lettuce, tomato, onion and hot peppers',
  },
  {
    name: 'Calzone',
    description: 'Golden, stuffed and baked fresh.',
    image: '/images/favorite-calzone.jpg',
    width: 1200,
    height: 800,
    alt: 'A golden baked calzone with a cup of marinara sauce',
  },
];

// Copied from the Google listing (Sep 2026). Each card shows five stars.
export const reviewSummary = { rating: 4.6, count: 18 };

export const reviews = [
  { name: 'Shea H.', rating: 5, quote: "Wowza! Took a bite and my heart skipped a beat! Nothing east of the Mississippi will satisfy your hunger like Mike's North End Pizza Co. Great vibe and the friendliest workers you could ask for. All I can say is I WAS hungry. Not anymore. Thanks Mike!" },
  { name: 'Skylar O.', rating: 5, quote: "This was the best pizza I have ever ate ever. The crust was so crisp and delicious, I need another one right now. The vibe and atmosphere here is unmatchable. Grab a beer from Pelly's to wash down the infamous Mike's pizza and you're set for life. I'm coming back every day." },
  { name: 'Nick E.', rating: 5, quote: 'Excellent pizza and great hospitality! Fantastic selection of wine and beer. Mike has brought authentic Italian traditions to Narragansett! Loved the aperitivo menu!' },
  { name: 'Jay L.', rating: 5, quote: 'Great food. Great atmosphere. Clean bathroom. Will be back.' },
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
