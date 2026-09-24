import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About',
  description:
    "Mike's North End Pizza Co. is a neighborhood pizza shop in Narragansett, RI — good food, friendly faces, and a place where everyone's welcome.",
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <About fullStory />
      </main>
      <Footer />
    </>
  );
}
