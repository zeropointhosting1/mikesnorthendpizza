import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import OrderButton from '@/components/OrderButton';

// Next.js adds the noindex tag to this page itself.
export const metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="not-found wrap" aria-labelledby="not-found-title">
          <p className="eyebrow">Error 404</p>
          <h1 id="not-found-title">This slice is missing.</h1>
          <p className="not-found-copy">
            We couldn&apos;t find the page you were looking for. It may have moved, or the link might be off by a topping or two.
          </p>
          <div className="btn-row not-found-actions">
            <Link href="/menu" className="btn btn-primary">See the menu <span className="arrow" aria-hidden="true">&rarr;</span></Link>
            <OrderButton className="btn btn-outline">Order online</OrderButton>
          </div>
          <p className="not-found-home"><Link href="/">Back to the home page</Link></p>
        </section>
      </main>
      <Footer />
    </>
  );
}
