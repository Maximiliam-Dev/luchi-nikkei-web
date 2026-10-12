const TIME_ZONE = "America/Santiago";
const EVENING_OPEN = 17 * 60;
const SUNDAY_MORNING_CLOSE = 12 * 60;

function getSantiagoClock(date = new Date()): { weekday: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekdayName = parts.find((part) => part.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);

  return {
    weekday: weekdayMap[weekdayName] ?? 1,
    minutes: hour * 60 + minute,
  };
}

function isSunday(weekday: number): boolean {
  return weekday === 0;
}

function isOpenAt(weekday: number, minutes: number): boolean {
  if (isSunday(weekday)) {
    return minutes < SUNDAY_MORNING_CLOSE || minutes >= EVENING_OPEN;
  }
  return minutes >= EVENING_OPEN;
}

export function isOpenNow(date = new Date()): boolean {
  const { weekday, minutes } = getSantiagoClock(date);
  return isOpenAt(weekday, minutes);
}

export function getOpenStatus(date = new Date()): {
  open: boolean;
  label: string;
} {
  const { weekday, minutes } = getSantiagoClock(date);
  const open = isOpenAt(weekday, minutes);

  if (open) {
    const closesAt =
      isSunday(weekday) && minutes < SUNDAY_MORNING_CLOSE ? "las 12:00" : "las 00:00";
    return { open: true, label: `Abierto ahora · cerramos a ${closesAt}` };
  }

  return { open: false, label: "Cerrado · abrimos hoy a las 17:00" };
}
