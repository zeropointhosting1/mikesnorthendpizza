import Image from 'next/image';

export default function About({ fullStory = false }) {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="about-media">
          <Image
            src="/images/about-mikes-home.jpg"
            alt="A man standing outside Mike's North End Pizza Co. in a wave-logo shirt, looking up at the shop sign"
            width={1085}
            height={1449}
            sizes="(max-width: 980px) 100vw, 50vw"
            loading={fullStory ? 'eager' : 'lazy'}
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <svg className="eyebrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M12 3c-3 3-3 7 0 10 3-3 3-7 0-10z" />
              <path d="M12 13v8" />
            </svg>
            About Mike&apos;s
          </p>
          <h2>
            Pizza Brings
            <br />
            Us Together.
          </h2>
          {fullStory ? <>
            <p>
              Here in Narragansett, Mike&apos;s North End Pizza Company is a place to
              settle in, share a meal, and feel at home. We bring together good food,
              friendly faces, and the easygoing atmosphere of a neighborhood favorite.
            </p>
            <p>
              Join us for dinner with family, catch up with friends over lunch, or
              pull up a seat at the bar. From pizza to grinders and more, there&apos;s
              something for everyone at the table. Come as you are, stay a while,
              and leave well fed and smiling.
            </p>
          </> : <p>
            At Mike&apos;s North End Pizza, we&apos;re more than just a pizza shop &mdash; we&apos;re part of the
            Narragansett community. Good food, friendly faces, and a place where everyone&apos;s welcome. That&apos;s
            what we&apos;re all about.
          </p>}
          <p className="script">See you at Mike&apos;s!</p>
          <svg className="script-underline" width="150" height="14" viewBox="0 0 150 14" fill="none" aria-hidden="true">
            <path d="M2 8 Q 30 2 60 8 T 120 7 T 148 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <svg className="about-wave" width="260" height="220" viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-20 70 Q 45 20 110 70 T 280 70" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-20 105 Q 45 55 110 105 T 280 105" stroke="currentColor" strokeWidth="1.2" />
          <path d="M-20 140 Q 45 90 110 140 T 280 140" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </section>
  );
}
