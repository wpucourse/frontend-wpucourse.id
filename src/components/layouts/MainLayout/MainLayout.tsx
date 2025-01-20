import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { IoBusiness, IoChevronDownOutline } from "react-icons/io5";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  FaBookOpen,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaMailchimp,
  FaNewspaper,
  FaPhone,
  FaVideo,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/router";
import { LINKS_FOOTER, LINKS_SOCIAL } from "./MainLayout.constants";
import MainLayoutNavbar from "./MainLayoutNavbar";
import MainLayoutFooter from "./MainLayoutFooter";

interface PropTypes {
  children: ReactNode;
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const MainLayout = (props: PropTypes) => {
  const { children } = props;
  const router = useRouter();
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
      <Link
        href="https://api.whatsapp.com/send?phone=6285190062005"
        target="_blank"
        className={cn(
          "group fixed bottom-4 right-4 hidden cursor-pointer gap-2 rounded-xl border-2 border-white bg-wpu-primary p-4 text-white transition-all lg:bottom-8 lg:right-8",
          {
            flex: scrollHeight > 20,
          },
        )}
      >
        <FaWhatsapp size={24} />{" "}
        <span className="hidden transition-all group-hover:inline">
          Contact Support
        </span>
      </Link>
    </main>
  );
};

export default MainLayout;
