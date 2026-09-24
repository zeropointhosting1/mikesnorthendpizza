import Image from 'next/image';
import { business, TOAST_ORDER_URL } from '@/lib/site-config';
import OrderButton from './OrderButton';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero-media">
          <Image
            src="/images/hero-background.png"
            alt="Close-up of a sliced pizza with melted cheese and a charred crust on a metal tray"
            width={2051}
            height={767}
            sizes="100vw"
            preload
          />
        </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Narragansett, Rhode Island</p>
          <h1 id="hero-heading">Great Pizza.<br />Good People.<br />Narragansett.</h1>
          <p className="hero-sub">Freshly made pies, loaded grinders, and the favorites you come back for. Right here on Boston Neck Road.</p>
          <div className="btn-row">
            <a href="/menu" className="btn btn-primary">Explore the menu <span className="arrow" aria-hidden="true">&rarr;</span></a>
            {TOAST_ORDER_URL ? (
              <OrderButton className="btn btn-outline hero-order-secondary">Order online</OrderButton>
            ) : (
              <a href={business.phoneHref} className="btn btn-outline hero-order-secondary">Call to order</a>
            )}
          </div>
          <div className="hero-contact">
            <a className="hero-address" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
              <span>{business.addressLine1}</span>
              <span className="hero-town">Narragansett, RI</span>
            </a>
            <a className="hero-phone" href={business.phoneHref}>
              <span className="hero-contact-label">Give us a call</span>
              <span>{business.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
