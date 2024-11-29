import Image from 'next/image';
import { useEffect, useState } from 'react';

const Launching = () => {
  const defaultCounter = 5;
  const [counter, setCounter] = useState(defaultCounter);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 0.01), 10);
    }
  }, [counter]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative size-80">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200"
            stroke-width="2"
          ></circle>
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-wpu-primary"
            stroke-width="2"
            stroke-dasharray="100"
            stroke-dashoffset={counter * (100 / defaultCounter)}
            stroke-linecap="round"
          ></circle>
        </svg>

        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-5xl font-bold text-wpu-primary">
            <Image
              className="animate-pulse"
              src="/general/logomark.png"
              alt="WPU Logo"
              width={200}
              height={200}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Launching;
