import { useEffect, useState } from "react";

/** Live Melbourne time stamp (Australia/Melbourne). Updates every second. */
export const MelbourneClock = ({ className = "" }) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const date = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Melbourne",
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return (
    <span className={`font-body text-[10px] tracking-[0.3em] uppercase ${className}`}>
      <span className="opacity-70">Melbourne</span>
      <span className="mx-2 opacity-30">/</span>
      {date.format(now)}
      <span className="mx-2 opacity-30">/</span>
      <span className="tabular-nums">{fmt.format(now)}</span>
    </span>
  );
};
