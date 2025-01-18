import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// const COUNTDOWN_FROM = new Date().setHours(23, 59, 59, 999);
const COUNTDOWN_FROM = new Date("2025-01-24T23:59:59");

const useTimer = (unit: string) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 },
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 },
      );
    }
  };

  return { ref, time };
};

const CountdownItem = ({ unit, text }: { unit: string; text: string }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-16 w-1/5 flex-col items-center justify-center gap-1 border-r-[1px] border-slate-200 last:border-r-0 md:h-24 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span ref={ref} className="block text-4xl font-medium text-black">
          {time}
        </span>
      </div>
      <span className="text-xs font-light text-slate-500 md:text-sm lg:text-base">
        {text}
      </span>
    </div>
  );
};

const Countdown = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl items-center bg-white">
      <CountdownItem unit="Day" text="Hari" />
      <CountdownItem unit="Hour" text="Jam" />
      <CountdownItem unit="Minute" text="Menit" />
      <CountdownItem unit="Second" text="Detik" />
    </div>
  );
};

export default Countdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
