import { RefObject, useEffect, useState } from "react";

const useScreenHeight = (ref: RefObject<HTMLDivElement>) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    const onScroll = () =>
      element &&
      setScrollHeight(
        element.scrollHeight - element.clientHeight - element.scrollTop,
      );

    if (element) {
      element.addEventListener("scroll", onScroll, { passive: true });

      // Clean-up
      return () => element.removeEventListener("scroll", onScroll);
    }
  }, []);

  return {
    scrollHeight,
  };
};

export default useScreenHeight;
