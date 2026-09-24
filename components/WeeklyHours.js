'use client';

import { useEffect, useState } from 'react';
import { formatRange, formatTime, timeZone, weeklyHours } from '@/lib/hours';

const DAY_INDEX = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
const toMinutes = (time) => { const [h, m] = time.split(':').map(Number); return h * 60 + m; };

// Today's index (Mon = 0) and minutes past midnight, in the shop's time zone.
function shopNow() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
    timeZone, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
  }).formatToParts(new Date()).map(({ type, value }) => [type, value]));
  return { today: DAY_INDEX[parts.weekday], minutes: Number(parts.hour) * 60 + Number(parts.minute) };
}

function statusFor({ today, minutes }) {
  const { open, close } = weeklyHours[today];
  if (open && minutes >= toMinutes(open) && minutes < toMinutes(close)) {
    return { open: true, text: `Open now · until ${formatTime(close)}` };
  }
  if (open && minutes < toMinutes(open)) return { open: false, text: `Closed now · opens today at ${formatTime(open)}` };
  for (let ahead = 1; ahead <= 7; ahead++) {
    const next = weeklyHours[(today + ahead) % 7];
    if (next.open) return { open: false, text: `Closed now · opens ${ahead === 1 ? 'tomorrow' : next.day} at ${formatTime(next.open)}` };
  }
  return null;
}

export default function WeeklyHours({ headingLevel = 3, className = '' }) {
  const Heading = `h${headingLevel}`;
  // The page is prerendered, so "today" is only known in the browser.
  const [now, setNow] = useState(null);
  useEffect(() => {
    const tick = () => setNow(shopNow());
    tick();
    const timer = setInterval(tick, 60000);
    return () => clearInterval(timer);
  }, []);
  const status = now && statusFor(now);

  return (
    <div className={`weekly-hours ${className}`.trim()}>
      <div className="weekly-hours-head">
        <Heading>Hours</Heading>
        {status && <p className={`hours-status${status.open ? ' is-open' : ''}`}>{status.text}</p>}
      </div>
      <dl>
        {weeklyHours.map((hours, index) => (
          <div className={`weekly-hours-row${now?.today === index ? ' is-today' : ''}`} key={hours.day}>
            <dt><abbr title={hours.day}>{hours.short}</abbr>{now?.today === index && <span className="weekly-hours-today"> · Today</span>}</dt>
            <dd>{formatRange(hours)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
