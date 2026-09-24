import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import { business, TOAST_ORDER_URL } from '@/lib/site-config';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Order Online',
  description:
    "Order from Mike's North End Pizza Co. in Narragansett, RI — order online or call ahead.",
  path: '/order/',
});

export default function OrderPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="order-intro wrap">
          <p className="eyebrow">Order From Mike&apos;s</p>
          <h1>Ready when<br />you are.</h1>
          <p className="order-intro-copy">
            {TOAST_ORDER_URL
              ? "Order online, or give us a call — either way, it's the same great pizza."
              : "Online ordering is on its way. For now, give us a call and we'll get your order started."}
          </p>
          <a className="btn btn-primary" href={business.phoneHref}>Call to order · {business.phone}</a>
          <p className="order-intro-note">
            <a href="/menu">See the full menu</a> before you call.
          </p>
        </section>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
