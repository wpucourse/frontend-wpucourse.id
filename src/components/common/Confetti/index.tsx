import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ConfettiSideCannons() {
  const router = useRouter();
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  useEffect(() => {
    if (router.query.launch) {
      handleClick();
      setTimeout(() => {
        handleClick();
      }, 4000);
    }
  }, [router.isReady]);

  return <div className="flex justify-center"></div>;
}

export default ConfettiSideCannons;
