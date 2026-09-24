import OrderButton from './OrderButton';

export default function Cta() {
  return (
    <section className="cta" id="order">
      <svg className="cta-wave" width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20 80 Q 40 40 90 80 T 200 80" stroke="currentColor" strokeWidth="1.2" />
        <path d="M-20 110 Q 40 70 90 110 T 200 110" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <div className="wrap cta-copy">
        <p className="eyebrow">Good Pizza Is Always A Good Idea</p>
        <h2>Order Online Today</h2>
        <p className="cta-sub">Same great pizza, even easier.</p>
        <OrderButton className="btn btn-light">
          Order Online <span className="arrow">&rarr;</span>
        </OrderButton>
      </div>
    </section>
  );
}
