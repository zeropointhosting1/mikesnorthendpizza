import { business, siteCredit } from '@/lib/site-config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">MIKE&apos;S NORTH END PIZZA CO.</div>
        <p className="footer-contact">
          <a href={business.mapsUrl} target="_blank" rel="noopener">
            {business.addressLine1}, {business.addressLine2}
          </a>
          <span className="footer-dot" aria-hidden="true">&middot;</span>
          <a href={business.phoneHref}>{business.phone}</a>
        </p>
        <div className="footer-social">
          <a href={business.instagramUrl} target="_blank" rel="noopener" aria-label="Mike's on Instagram">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <a href={business.facebookUrl} target="_blank" rel="noopener" aria-label="Mike's on Facebook">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9z" />
            </svg>
          </a>
        </div>
        <p className="footer-copy">
          &copy; {year} {business.name}
          <span className="footer-dot" aria-hidden="true">&middot;</span>
          <span className="footer-credit">
            Website by{' '}
            {siteCredit.url ? (
              <a href={siteCredit.url} target="_blank" rel="noopener">{siteCredit.name}</a>
            ) : (
              siteCredit.name
            )}
          </span>
        </p>
      </div>
    </footer>
  );
}
