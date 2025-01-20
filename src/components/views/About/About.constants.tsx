import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";

const ABOUT_FOUNDERS = [
  {
    name: "Avip Syaifulloh",
    role: "Chief Executive Officer",
    image: "/about/avip-1.png",
    description:
      "Kang Avip merupakan software engineer dengan pengalaman lebih dari 5 tahun di top IT company yang telah memiliki banyak pengalaman mengembangkan digital product menggunakan teknologi JavaScript, juga merupakan seorang content creator (VIP CODE STUDIO) dan berpengalaman menjadi instruktur bootcamp ternama di Indonesia.",
    socials: [
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/avipsyaifulloh/",
      },
      {
        title: "youtube",
        link: "https://youtube.com/@vipcodestudio/",
      },
      {
        title: "instagram",
        link: "https://www.instagram.com/avipsyaifulloh/",
      },
      {
        title: "tiktok",
        link: "https://www.tiktok.com/@vipcodestudio/",
      },
    ],
  },
  {
    name: "Sandhika Galih",
    role: "Chief Academic Officer",
    image: "/about/sandhika-1.png",
    description:
      "Pak Dhika merupakan dosen dengan pengalaman lebih dari 15 tahun, selain itu juga merupakan seorang Google Developer Expert dibidang web dan juga merupakan founder dari WPU yang memiliki lebih dari 900.000 subscribers di YouTube dan memiliki komunitas programming terbesar di Indonesia pada platform Discord dengan jumlah 50.000+ members.",
    socials: [
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/sandhikagalih/",
      },
      {
        title: "youtube",
        link: "https://youtube.com/@sandhikagalihWPU/",
      },
      {
        title: "instagram",
        link: "https://www.instagram.com/sandhikagalih/",
      },
      {
        title: "tiktok",
        link: "https://www.tiktok.com/@sandhika.galih/",
      },
    ],
  },
  {
    name: "Agung Rizkyana",
    role: "Chief Technology Officer",
    image: "/about/agung-1.png",
    description:
      "Kang Agung merupakan software engineer dengan pengalaman lebih dari 10 tahun di top IT company yang telah memiliki pengalaman dibidang web development menggunakan teknologi Javascript, selain itu juga berpengalaman menjadi instruktur bootcamp dan menjadi asisten dosen serta aktif membagikan pengalaman dan tutorial di sosial media.",
    socials: [
      {
        title: "linkedin",
        link: "https://www.linkedin.com/in/agungrizkyana/",
      },
      {
        title: "instagram",
        link: "https://www.instagram.com/agungrizkyana/",
      },
      {
        title: "tiktok",
        link: "https://www.tiktok.com/@agungrizkyana/",
      },
    ],
  },
];

const ICON_LISTS = {
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
  youtube: <FaYoutube />,
  tiktok: <FaTiktok />,
};

export { ABOUT_FOUNDERS, ICON_LISTS };
