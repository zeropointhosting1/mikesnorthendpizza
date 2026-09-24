import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Favorites from '@/components/Favorites';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  description:
    'Great Pizza. Good People. Narragansett. Local pizza, fresh ingredients, and a neighborhood spot that feels like home.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Favorites />
        <About />
        <Reviews />
        <Visit compact />
      </main>
      <Footer />
    </>
  );
}
