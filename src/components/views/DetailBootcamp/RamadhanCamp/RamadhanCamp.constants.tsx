import {
  FaChalkboardTeacher,
  FaCode,
  FaPencilRuler,
  FaSlideshare,
  FaVideo,
} from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

const SECTIONS = [
  { title: "Tentang Bootcamp", name: "about" },
  { title: "Benefit", name: "benefit" },
  { title: "Mentor", name: "mentor" },
  { title: "Kurikulum", name: "curiculum" },
  { title: "Biaya", name: "cost" },
  { title: "FAQ", name: "faq" },
];

const CURRICULUMS = [
  {
    title: "JavaScript",
    mentor: "Sandhika Galih",
    icon: "/home/icon/icon-js.png",
    subtopic1: [
      "Pengenalan JavaScript",
      "Sintaks Dasar",
      "Struktur Kontrol",
      "Fungsi",
      "Objek dan Array",
      "JavaScript ES6+",
    ],
    subtopic2: [
      "Pengenalan DOM",
      "Seleksi Elemen DOM",
      "Manipulasi Elemen DOM",
      "Event Handling",
      "DOM Traversal",
      "Contoh Implementasi Sederhana",
    ],
  },
  {
    title: "TypeScript",
    mentor: "Agung Rizkyana",
    icon: "/home/icon/icon-ts.png",
    subtopic1: [
      "Pengenalan TypeScript",
      "Tipe Data",
      "Interface dan Type",
      "Function",
    ],
    subtopic2: [
      "Object Oriented Programming",
      "Generic",
      "TypeScript dalam Frameworks (Express, NestJS, React)",
      "Study Kasus Sederhana",
    ],
  },
  {
    title: "React.js",
    mentor: "Avip Syaifulloh",
    icon: "/home/icon/icon-react.png",
    subtopic1: [
      "Pengenalan React",
      "Component",
      "Props",
      "Event Handler",
      "Form Handler",
    ],
    subtopic2: [
      "Hooks",
      "State",
      "Custom Hooks",
      "Data Fetching",
      "Deployment",
    ],
  },
];

const MENTORS = [
  {
    name: "Sandhika Galih",
    image: "/images/bootcamp/ramadhan/mentor-sandhika.png",
    description:
      "Berpengalaman lebih dari 17 tahun sebagai dosen, content creator di YouTube dengan lebih dari 900.000 subscribers dan merupakan Google Developer Expert dibidang web.",
    linkedin: "https://www.linkedin.com/in/sandhikagalih/",
  },
  {
    name: "Agung Rizkyana",
    image: "/images/bootcamp/ramadhan/mentor-agung.png",
    description:
      "Berpengalaman lebih dari 10 tahun sebagai Senior Software Engineer salah satu perusahaan di Singapura, pernah menjadi top mentor bootcamp ternama di Indonesia.",
    linkedin: "https://www.linkedin.com/in/agungrizkyana/",
  },
  {
    name: "Avip Syaifulloh",
    image: "/images/bootcamp/ramadhan/mentor-avip.png",
    description:
      "Berpengalaman lebih dari 5 tahun sebagai Software Engineer, content creator dengan fokus utama teknologi React, pernah menjadi top mentor bootcamp ternama di Indonesia.",
    linkedin: "https://www.linkedin.com/in/avipsyaifulloh/",
  },
];

const BENEFITS = [
  {
    icon: <FaChalkboardTeacher />,
    highlight: "8x Live Session",
    description: "Bersama Expert Mentor Secara Online",
  },
  {
    icon: <FaVideo />,
    highlight: "Akses Selamanya",
    description: "Video Recording Live Session",
  },
  {
    icon: <FaSlideshare />,
    highlight: "Slide Presentation",
    description: "Yang Dapat Diakses Kapan Saja",
  },
  {
    icon: <FaPencilRuler />,
    highlight: "Mini Project",
    description: "Untuk Menambah Portfolio Kamu",
  },
  {
    icon: <FaCode />,
    highlight: "Live Technical Coding",
    description: "Session Setiap Pertemuan",
  },
  {
    icon: <IoMdChatbubbles />,
    highlight: "Live QnA Session",
    description: "Setiap Pertemuan Dengan Mentor",
  },
];

const FAQ_LISTS = [
  {
    id: "1",
    question: "Apakah pemula dapat mengikuti program ini?",
    answer:
      "Ya, pemula dapat mengikuti program ini karena materi pembelajaran yang diberikan dimulai dari konsep JavaScript, TypeScript hingga React JS.",
  },
  {
    id: "2",
    question: "Apakah pembelajaran dilakukan secara online?",
    answer: "Benar, pembelajaran dilakukan sepenuhnya secara online.",
  },
  {
    id: "3",
    question: "Bagaimana proses pembelajarannya?",
    answer:
      "Pembelajaran dilakukan secara live dengan jadwal yang sudah ditentukan dan dapat diakses pada LMS WPU Course apabila sudah terdaftar.",
  },
  {
    id: "4",
    question: "Apakah materi dapat diakses selamanya?",
    answer:
      "Ya, materi pembelajaran dapat diakses selamanya dalam bentuk slide presentation dan recording live session.",
  },
];

export { SECTIONS, CURRICULUMS, MENTORS, BENEFITS, FAQ_LISTS };
