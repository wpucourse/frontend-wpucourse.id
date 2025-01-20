import { useEffect, useState } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollHeight,
  };
};

export default useScrollHeight;
