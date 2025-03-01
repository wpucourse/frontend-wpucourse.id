import {
  FaChalkboardTeacher,
  FaCode,
  FaPencilRuler,
  FaSlideshare,
  FaVideo,
} from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
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
    title: "1.JavaScript Overview For React",
    mentor: "Sandhika Galih",
    icon: "/home/icon/icon-js.png",
    schedule: "Rabu, 5 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Variabel", "Struktur Kontrol"],
    subtopic2: ["Function", "Objek dan Array"],
  },
  {
    title: "2.JavaScript Asyncronous",
    mentor: "Sandhika Galih",
    icon: "/home/icon/icon-js.png",
    schedule: "Jumat, 7 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Event Loop", "Callback", "Promise"],
    subtopic2: ["Async / Await", "Fetch API"],
  },
  {
    title: "3.DOM Manipulation",
    mentor: "Sandhika Galih",
    icon: "/home/icon/icon-js.png",
    schedule: "Senin, 10 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Pengenalan DOM", "Element Selection", "DOM Manipulation"],
    subtopic2: ["Event Handling", "DOM Traversal", "Implementation"],
  },
  {
    title: "4.Functional Programming",
    mentor: "Agung Rizkyana",
    icon: "/home/icon/icon-js.png",
    schedule: "Rabu, 12 Maret 2024, 20.30-22.30 WIB",
    subtopic1: [
      "Imperative Versus Declarative",
      "Functional Concept",
      "Immutability",
      "Pure Functions",
    ],
    subtopic2: [
      "Data Transformations",
      "Higher-Order Functions",
      "Recursion",
      "Composition",
    ],
  },
  {
    title: "5.Typescript For React",
    mentor: "Agung Rizkyana",
    icon: "/home/icon/icon-ts.png",
    schedule: "Jumat, 14 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Pengenalan TypeScript", "Data Type"],
    subtopic2: ["Interface and Type", "Function"],
  },
  {
    title: "6.How React Works",
    mentor: "Agung Rizkyana",
    icon: "/home/icon/icon-react.png",
    schedule: "Senin, 17 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Pengenalan React JS", "Konsep Komponen"],
    subtopic2: ["Atomic Design", "Folder Structure"],
  },
  {
    title: "7.React Fundamental",
    mentor: "Avip Syaifulloh",
    icon: "/home/icon/icon-react.png",
    schedule: "Rabu, 19 Maret 2024, 20.30-22.30 WIB",
    subtopic1: [
      "Basic Component",
      "JSX",
      "Conditional Rendering",
      "Nested Component",
    ],
    subtopic2: ["Render List", "Props", "Routing"],
  },
  {
    title: "8.React Hooks & Handling Event",
    mentor: "Avip Syaifulloh",
    icon: "/home/icon/icon-react.png",
    schedule: "Jumat, 21 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Event Handler", "State Concept", "useState"],
    subtopic2: ["useEffect", "Custom Hooks", "Fetch Data"],
  },
  {
    title: "9.Mini Project & QnA",
    mentor: "Avip Syaifulloh",
    icon: "/home/icon/icon-react.png",
    schedule: "Senin, 24 Maret 2024, 20.30-22.30 WIB",
    subtopic1: ["Penjelasan Mini Project", "Live QnA"],
    subtopic2: ["Tips & Tricks For Next Step", "Closing"],
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
    highlight: "9x Live Session",
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
    icon: <FaMedal />,
    highlight: "Sertifikat Digital",
    description: "Setelah Selesai Bootcamp",
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
