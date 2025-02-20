import {
  FaBookOpen,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaNewspaper,
  FaVideo,
} from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";

const LINK_NAVBAR = [
  {
    title: "Beranda",
    type: "link",
    href: "/",
  },
  {
    title: "Tentang Kami",
    type: "link",
    href: "/about",
  },
  {
    title: "Program",
    type: "dropdown",
    items: [
      {
        title: "Online Course",
        description:
          "Belajar melalui video, akses selamanya dan dapatkan sertifikat",
        href: "/course",
        icon: <FaVideo />,
        isReleased: true,
      },
      {
        title: "Bootcamp",
        description:
          "Belajar secara interaktif untuk tingkatkan kemampuan digital kamu",
        href: "/bootcamp",
        icon: <FaBookOpen />,
        isReleased: true,
      },
      {
        title: "Corporate Training",
        description:
          "Tingkatkan kemampuan melalui pelatihan untuk perusahaan kamu",
        href: "#",
        icon: <IoBusiness />,
        isReleased: false,
      },
    ],
  },
  {
    title: "Komunitas",
    type: "dropdown",
    items: [
      {
        title: "WPU Discord Community",
        description:
          "Gabung dengan komunitas IT terbesar di Indonesia dengan lebih dari 50.000+ member",
        href: "https://discord.gg/wpu",
        icon: <FaDiscord />,
        isReleased: true,
      },
      {
        title: "Blog",
        description:
          "Temukan berbagai artikel dan tips untuk meningkatkan kemampuan digital kamu",
        href: "/blog",
        icon: <FaNewspaper />,
        isReleased: true,
      },
    ],
  },
  {
    title: "Kontak",
    type: "link",
    href: "/contact",
  },
];

const LINKS_FOOTER = [
  {
    title: "Program",
    items: [
      {
        title: "Online Course",
        href: "/course",
      },
      {
        title: "Bootcamp",
        href: "/bootcamp",
      },
      {
        title: "Corporate Training",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        title: "Tentang Kami",
        href: "/about",
      },
      {
        title: "Blog",
        href: "/blog",
      },
      {
        title: "Komunitas",
        href: "https://discord.gg/wpu",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Hubungi Kami",
        href: "/contact",
      },
      {
        title: "Syarat dan Ketentuan",
        href: "/terms-condition",
      },
      {
        title: "Kebijakan Privasi",
        href: "/privacy-policy",
      },
    ],
  },
];

const LINKS_SOCIAL = [
  {
    title: "Instagram",
    href: "https://instagram.com/wpucourse.id",
    icon: <FaInstagram />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/wpu-course",
    icon: <FaLinkedin />,
  },
];

export { LINK_NAVBAR, LINKS_FOOTER, LINKS_SOCIAL };
