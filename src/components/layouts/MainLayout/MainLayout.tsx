import { ReactNode, useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
import MainLayoutNavbar from "./MainLayoutNavbar";
import MainLayoutFooter from "./MainLayoutFooter";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiCloseLargeFill } from "react-icons/ri";
import Chatbot from "@/components/common/Chatbot";

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
