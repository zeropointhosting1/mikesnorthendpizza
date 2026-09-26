import { TOAST_ORDER_URL, business } from '@/lib/site-config';

// Renders an "Order Online" link. Once TOAST_ORDER_URL is set in
// lib/site-config.js this opens the Toast ordering page in the same tab;
// until then it falls back to a one-tap phone call.
export default function OrderButton() {
  return (
    <a
      href={TOAST_ORDER_URL || business.phoneHref}
      className="btn order-button"
    >
      Order Online <span className="arrow" aria-hidden="true">&rarr;</span>
    </a>
  );
}
