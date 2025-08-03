export function isMarketOpen(): boolean {
  /*
  const now = new Date();

  const utcHour = now.getUTCHours();
  const utcDay = now.getUTCDay();

  const estHour = utcHour - 4;
  const estMinute = now.getUTCMinutes();

  const totalMinutes = estHour * 60 + estMinute;

  const marketOpen = 9 * 60 + 30;
  const marketClose = 16 * 60;

  const isWeekday = utcDay >= 1 && utcDay <= 5;

  return isWeekday && totalMinutes >= marketOpen && totalMinutes < marketClose;
  */
 return true
}
