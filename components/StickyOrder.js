'use client';

import { useEffect, useState } from 'react';
import { TOAST_ORDER_URL, business } from '@/lib/site-config';

// Floating copy of the "Order Online" button pinned to the bottom-right corner on
// phones (CSS hides it above 640px). Hidden once the footer scrolls into view, and while
// the mobile menu is open, since the menu has its own Order button.
export default function StickyOrder({ hidden = false }) {
  const [footerInView, setFooterInView] = useState(false);
  const visible = !hidden && !footerInView;

  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return undefined;
    const observer = new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={TOAST_ORDER_URL || business.phoneHref}
      className={`btn order-button sticky-order${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      Order Online <span className="arrow" aria-hidden="true">&rarr;</span>
    </a>
  );
}
