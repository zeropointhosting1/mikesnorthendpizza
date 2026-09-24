// Single source of truth for opening hours. Used by the hours lists on the
// home page and /visit, and by the Restaurant JSON-LD in app/layout.js.
// Times are 24h, local to the shop; `open: null` means closed all day.
export const timeZone = 'America/New_York';

export const weeklyHours = [
  { day: 'Monday', short: 'Mon', open: null, close: null },
  { day: 'Tuesday', short: 'Tue', open: '11:00', close: '22:00' },
  { day: 'Wednesday', short: 'Wed', open: '11:00', close: '22:00' },
  { day: 'Thursday', short: 'Thu', open: '11:00', close: '22:00' },
  { day: 'Friday', short: 'Fri', open: '11:00', close: '23:00' },
  { day: 'Saturday', short: 'Sat', open: '11:00', close: '23:00' },
  { day: 'Sunday', short: 'Sun', open: '11:00', close: '22:00' },
];

// '22:00' -> '10 PM', '11:30' -> '11:30 AM'
export function formatTime(time) {
  const [h, m] = time.split(':').map(Number);
  const hour = h % 12 || 12;
  return `${hour}${m ? `:${String(m).padStart(2, '0')}` : ''} ${h < 12 ? 'AM' : 'PM'}`;
}

export const formatRange = ({ open, close }) => (open ? `${formatTime(open)} – ${formatTime(close)}` : 'Closed');
