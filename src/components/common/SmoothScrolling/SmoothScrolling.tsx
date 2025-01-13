import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
  // lenis options for configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: true, //smooth scroll for touch devices
    smooth: true,
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
