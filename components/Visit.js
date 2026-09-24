import Image from 'next/image';
import { business } from '@/lib/site-config';
import MapEmbed from './MapEmbed';
import OrderButton from './OrderButton';
import WeeklyHours from './WeeklyHours';

export default function Visit({ compact = false }) {
  if (compact) {
    return (
      <section className="home-visit" id="visit" aria-labelledby="home-visit-title">
        <div className="wrap home-visit-layout">
          <div className="home-visit-location">
            <p className="eyebrow">Visit Mike&apos;s</p>
            <h2 id="home-visit-title">See you on<br />Boston Neck Road.</h2>
            <address>
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{business.addressLine1}<br />{business.addressLine2}</a>
            </address>
            <a className="home-visit-phone" href={business.phoneHref}>{business.phone}</a>
            <div className="btn-row">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get directions</a>
              <a href="/menu" className="btn btn-outline">View menu</a>
            </div>
          </div>
          <MapEmbed className="home-visit-map" />
          <WeeklyHours />
        </div>
      </section>
    );
  }

  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <header className="wrap visit-intro">
        <p className="eyebrow">Visit Us</p>
        <h1 id="visit-title">Come See Us</h1>
        <address>
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">{business.addressLine1}, <span className="nowrap">{business.addressLine2}</span></a>
        </address>
      </header>

      <div className="wrap visit-main">
        <div className="visit-actions">
          <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get directions
          </a>
          <a href={business.phoneHref} className="btn btn-outline" aria-label={`Call ${business.phone}`}>
            Call <span className="visit-call-number">{business.phone}</span>
          </a>
        </div>

        <MapEmbed className="visit-map" />

        <WeeklyHours headingLevel={2} className="visit-hours" />
      </div>

      <div className="wrap">
        <div className="visit-closing">
          <Image
            className="visit-sign-image"
            src="/images/visit-signpost.jpg"
            alt="Illustrated signpost reading Pizza, Friends, Narragansett, Good Times, overlooking the ocean"
            width={1752}
            height={897}
            sizes="(max-width: 980px) 100vw, 560px"
          />
          <div className="visit-closing-copy">
            <h2>Can&apos;t make it in?</h2>
            <p>Order ahead and your pizza will be hot and ready when you get here.</p>
            <OrderButton className="btn btn-primary">
              Order online <span className="arrow">&rarr;</span>
            </OrderButton>
          </div>
        </div>
      </div>
    </section>
  );
}
