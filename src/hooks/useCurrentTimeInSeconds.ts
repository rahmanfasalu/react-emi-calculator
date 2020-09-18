import { useState, useEffect } from "react";

// HOOK: Second Trigger
// This will trigger every 10seconds with current day time in seconds.
export default function useCurrentTimeInSeconds() {
  const currenTimeInSeconds =
    new Date().getHours() * 3600 + new Date().getMinutes() * 60;
  const [seconds, setSeconds] = useState(currenTimeInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds + 10);
      //reset the day
      if (seconds > 86400) {
        setSeconds(0);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  return { seconds };
}
