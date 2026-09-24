import { TOAST_ORDER_URL, business } from '@/lib/site-config';

// Renders an "Order Online" link. Once TOAST_ORDER_URL is set in
// lib/site-config.js this opens the Toast ordering page in a new tab;
// until then it falls back to a one-tap phone call.
export default function OrderButton({ className, children }) {
  const isExternal = Boolean(TOAST_ORDER_URL);
  return (
    <a
      href={TOAST_ORDER_URL || business.phoneHref}
      className={className}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
    >
      {children}
    </a>
  );
}
