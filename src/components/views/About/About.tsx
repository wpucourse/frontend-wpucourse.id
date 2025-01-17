import Image from "next/image";
import Link from "next/link";
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

const About = () => {
  return (
    <main className="container px-4 py-16 pt-32 lg:px-0">
      <section>
        <h1 className="mb-4 text-center text-4xl font-bold text-wpu-primary lg:mb-8 lg:text-5xl">
          Tentang Kami
        </h1>
        <p className="mx-auto mb-8 w-full text-center text-gray-700 lg:w-3/4 lg:text-lg">
          WPU Course adalah sebuah platform pembelajaran digital yang dibuat
          untuk memudahkan kamu dalam belajar di bidang teknologi dan digital.
          Kami menyediakan berbagai macam course yang dapat membantu kamu dalam
          mengembangkan kemampuan dan keterampilan digital.
        </p>
        <Image
          src="/general/about.png"
          alt="about"
          width={1920}
          height={1080}
          className="mx-auto w-full lg:w-3/4"
        />
      </section>
      <section className="mt-32">
        <h1 className="mb-4 text-center text-3xl font-bold text-wpu-primary lg:text-4xl">
          Meet Our Founder
        </h1>
        <p className="mx-auto mb-4 w-full text-center text-gray-700 lg:w-3/4 lg:text-lg">
          Bertemu dengan para founder WPU Course yang berpengalaman di bidang
          teknologi dan memiliki passion mengajar, memastikan WPU Course bisa
          memberikan pelayanan yang terbaik.
        </p>
        <div className="mx-auto mb-16 h-2 w-[100px] rounded-full bg-wpu-primary"></div>
        <div className="mt-16 flex flex-col gap-28 lg:mx-40">
          {ABOUT_FOUNDERS.map((founder) => (
            <div className="flex w-full flex-col items-center gap-10 rounded-2xl lg:flex-row-reverse lg:first:flex-row lg:last:flex-row">
              <Image
                className="rounded-3xl lg:w-2/5"
                src={founder.image}
                width={500}
                height={500}
                alt={founder.name}
              />
              <div className="lg:w-3/5">
                <p className="mb-2 text-lg font-medium text-wpu-primary lg:text-xl">
                  {founder.role}
                </p>
                <h2 className="mb-4 text-4xl font-bold text-gray-700 lg:text-5xl">
                  {founder.name}
                </h2>
                <p className="mb-4 leading-relaxed text-gray-600 lg:text-lg">
                  {founder.description}
                </p>
                <div className="flex gap-4 text-gray-600">
                  {founder.socials.map((social) => (
                    <Link
                      href={social.link}
                      target="_blank"
                      className="text-3xl"
                    >
                      {ICON_LISTS[social.title as keyof typeof ICON_LISTS]}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
