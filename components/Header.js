'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { business, navLinks } from '@/lib/site-config';
import OrderButton from './OrderButton';

// '/' and '/x/' both need to compare equal to a nav link's '/x' href.
const normalize = (path) => (path === '/' ? '/' : path.replace(/\/$/, ''));

export default function Header() {
  const pathname = normalize(usePathname() || '/');
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/" className="logo" aria-label={`${business.name} home`}>
          <Image
            className="logo-image"
            src="/assets/mikes-north-end-logo-wave.png"
            alt={business.name}
            width={589}
            height={600}
            sizes="86px"
            loading="eager"
          />
        </a>

        <nav className={`main-nav${navOpen ? ' open' : ''}`} id="main-nav" aria-label="Main navigation">
          {navLinks.filter((link) => link.href !== '/order').map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={normalize(link.href) === pathname ? 'active' : undefined}
              aria-current={normalize(link.href) === pathname ? 'page' : undefined}
              onClick={() => setNavOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="nav-actions">
            <OrderButton className="btn btn-primary">
              Order Online <span className="arrow">&rarr;</span>
            </OrderButton>
            <div className="nav-actions-row">
              <a className="btn btn-outline" href={business.phoneHref} aria-label={`Call ${business.phone}`}>
                Call
              </a>
              <a className="btn btn-outline" href={business.mapsUrl} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
            </div>
          </div>
        </nav>

        <div className="header-right">
          <div className="header-info">
            <a className="info-item" href={business.phoneHref} aria-label={`Call ${business.phone}`}>
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {business.phone}
            </a>
          </div>
          <OrderButton className="btn btn-primary btn-sm">
            Order Online <span className="arrow">&rarr;</span>
          </OrderButton>
          <button
            className={`nav-toggle${navOpen ? ' active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            aria-controls="main-nav"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
