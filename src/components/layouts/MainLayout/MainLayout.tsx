import { ReactNode, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import MainLayoutNavbar from "./MainLayoutNavbar";
import MainLayoutFooter from "./MainLayoutFooter";
import Chatbot from "@/components/common/Chatbot";
import { useLoadingBar } from "react-top-loading-bar";
import { Router } from "next/router";

interface PropTypes {
  children: ReactNode;
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const MainLayout = (props: PropTypes) => {
  const { children } = props;
  const [scrollHeight, setScrollHeight] = useState(0);

  const { start, complete } = useLoadingBar({
    color: "#008080",
    height: 2,
  });

  Router.events.on("routeChangeStart", () => start());
  Router.events.on("routeChangeComplete", () => complete());
  Router.events.on("routeChangeError", () => complete());

  useEffect(() => {
    function handleScroll() {
      setScrollHeight(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={`${plusJakartaSans.className} relative`}>
      <MainLayoutNavbar />
      {children}
      <MainLayoutFooter />
      <Chatbot />
    </main>
  );
};

export default MainLayout;
