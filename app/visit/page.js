import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Visit from '@/components/Visit';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Visit Us',
  description:
    "Find Mike's North End Pizza Co. at 909 Boston Neck Rd, Narragansett, RI. Hours, directions, and contact info.",
  path: '/visit/',
});

export default function VisitPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Visit />
      </main>
      <Footer />
    </>
  );
}
