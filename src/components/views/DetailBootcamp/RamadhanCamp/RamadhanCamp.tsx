import Image from "next/image";
import Link from "next/link";
import {
  BENEFITS,
  CURRICULUMS,
  FAQ_LISTS,
  MENTORS,
  SECTIONS,
} from "./RamadhanCamp.constants";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FaCheck, FaLinkedin } from "react-icons/fa6";
import FAQ from "@/components/common/FAQ";
import { IoLogoWhatsapp } from "react-icons/io5";

const RamadhanCamp = () => {
  const [active, setActive] = useState(SECTIONS[0].name);

  useEffect(() => {
    const sectionElements = SECTIONS.map(({ name }) =>
      document.getElementById(name),
    );

    function handleScroll() {
      const scrollPosition = window.scrollY + 200;
      const activeSection = sectionElements.findLast(
        (element) => element!.offsetTop <= scrollPosition,
      );

      if (activeSection) {
        setActive(activeSection.id);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [SECTIONS]);

  return (
    <div className="container px-4 py-16 pt-28 lg:flex-row lg:px-0">
      <section className="flex flex-col-reverse items-center gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-3xl font-bold !leading-snug text-gray-700 lg:text-5xl">
            Kajian <span className="text-wpu-primary">React.js </span>
            dari dasar hingga mahir
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            WPU Course menawarkan bootcamp online yang akan membantu kamu
            mengembangkan kemampuan React.js selama bulan Ramadhan. Dapatkan
            pengalaman belajar langsung bersama Pak Dhika, Kang Avip dan Kang
            Agung.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="#offer"
              className="rounded-xl bg-wpu-primary px-5 py-3 font-semibold text-white"
            >
              Dapatkan Promo
            </Link>
            <Link
              href="https://wa.me/6285190062005"
              className="rounded-xl border border-wpu-primary px-5 py-3 font-semibold text-wpu-primary"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:p-8">
          <Image
            src="/images/bootcamp/wpuramadhan.png"
            width={1000}
            height={1000}
            alt="mern"
            className="h-full w-full rounded-3xl border-[10px] border-wpu-primary/10"
          />
        </div>
      </section>
      <section className="mt-16 flex lg:gap-16">
        <div className="sticky top-32 hidden h-fit w-1/4 flex-col gap-2 rounded-3xl border-2 border-gray-200 p-6 lg:flex">
          {SECTIONS.map((menu) => (
            <h2
              key={menu.name}
              onClick={() => {
                window.scrollTo({
                  top:
                    (document.getElementById(menu.name)?.offsetTop ?? 0) - 200,
                  behavior: "smooth",
                });
              }}
              className={cn(
                "cursor-pointer rounded-xl p-4 text-lg font-bold !leading-snug",
                {
                  "bg-wpu-primary/10 text-wpu-primary": active === menu.name,
                },
              )}
            >
              {menu.title}
            </h2>
          ))}
        </div>
        <div className="w-full space-y-24 lg:w-3/4">
          <div className="w-full space-y-4" id="about">
            <h2 className="text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              Tentang Bootcamp
            </h2>
            <p className="font-medium text-gray-500 lg:text-lg">
              WPU Ramadhan Camp adalah program intensif yang diselenggarakan WPU
              Course untuk membantu kamu belajar React JS. Program ini terdiri
              dari 8 pertemuan yang akan membimbing kamu untuk belajar React JS
              mulai dari dasar hingga mahir.
            </p>
            <p className="font-medium text-gray-500 lg:text-lg">
              Kamu akan mendapatkan materi yang terstruktur dari JavaScript,
              TypeScript dan React, secara live session yang akan membantu kamu
              untuk memahami materi dengan lebih baik bersama para expert di
              bidangnya.
            </p>
            <p className="font-medium text-gray-500 lg:text-lg">
              Bootcamp ini dirancang untuk semua tahapan karir, dari mulai
              mahasiswa, fresh graduate sampai profesional. Sehingga buat kamu
              yang masih pemula juga dapat mengikuti bootcamp ini.
            </p>
            <p className="font-medium text-gray-500 lg:text-lg">
              Bootcamp ini exclusive hanya untuk 35 pendaftar pertama, sehingga
              jangan lewatkan kesempatan ini!
            </p>
          </div>
          <div className="w-full" id="benefit">
            <h2 className="mb-6 text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              <span className="text-wpu-primary">Benefit</span> yang akan kamu
              dapatkan jika mengikuti Bootcamp ini
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
              {BENEFITS.map((benefit) => (
                <div className="flex items-center gap-4 rounded-2xl bg-wpu-primary bg-cover bg-center p-4 text-white lg:p-8">
                  <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border-2 border-white text-lg lg:h-12 lg:w-12 lg:text-xl">
                    {benefit.icon}
                  </div>
                  <p className="font-semibold lg:text-lg">
                    {benefit.highlight} {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full" id="mentor">
            <h2 className="mb-6 text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              <span className="text-wpu-primary">Mentor</span> expert yang akan
              membimbing kamu
            </h2>
            <div className="space-y-4">
              {MENTORS.map((mentor) => (
                <div
                  key={`mentor-${mentor.name}`}
                  className="flex flex-col items-center gap-4 rounded-3xl border-2 border-gray-200 px-6 py-4 lg:flex-row"
                >
                  <Image
                    src={mentor.image}
                    width={500}
                    height={500}
                    alt="avip"
                    className="h-fit w-32"
                  />
                  <div className="text-center lg:text-left">
                    <h4 className="mb-2 text-xl font-bold text-wpu-primary">
                      {mentor.name}
                    </h4>
                    <p className="font-medium text-gray-500">
                      {mentor.description}
                    </p>
                    <div className="mt-4 flex justify-center lg:justify-start">
                      <Link
                        href={mentor.linkedin}
                        target="_blank"
                        className="text-2xl text-gray-600"
                      >
                        <FaLinkedin />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full" id="curiculum">
            <h2 className="mb-6 text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              <span className="text-wpu-primary">Materi</span> yang akan kamu
              pelajari selama bootcamp
            </h2>
            <div className="space-y-4">
              {CURRICULUMS.map((curiculum) => (
                <div
                  key={curiculum.title}
                  className="flex flex-col-reverse justify-between rounded-3xl border-2 border-gray-200 p-6 lg:flex-row"
                >
                  <div>
                    <h4 className="text-2xl font-bold text-gray-700">
                      {curiculum.title}
                    </h4>
                    <p className="mt-1 font-medium text-gray-500">
                      <span className="font-bold">Mentor</span> :{" "}
                      {curiculum.mentor}
                    </p>
                    <p className="mt-1 font-bold text-gray-500">Materi :</p>
                    <div className="flex flex-col lg:flex-row lg:gap-8">
                      <ol className="list-decimal pl-8">
                        {curiculum.subtopic1.map((topic) => (
                          <li
                            className="mt-1 font-medium text-gray-500"
                            key={topic}
                          >
                            {topic}
                          </li>
                        ))}
                      </ol>
                      <ol
                        className="list-decimal pl-8"
                        start={curiculum.subtopic1.length + 1}
                      >
                        {curiculum.subtopic2.map((topic) => (
                          <li
                            className="mt-1 font-medium text-gray-500"
                            key={topic}
                          >
                            {topic}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  <Image
                    src={curiculum.icon}
                    width={500}
                    height={500}
                    alt={curiculum.title}
                    className="mb-3 h-fit w-20"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full" id="cost">
            <h2 className="mb-6 text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              <span className="text-wpu-primary">Biaya</span> terjangkau untuk
              masa depan kamu
            </h2>
            <div className="flex flex-col-reverse gap-8 rounded-2xl border-2 border-wpu-primary/50 p-8 lg:flex-row">
              <div className="w-full md:w-3/5">
                <ul className="space-y-4">
                  {BENEFITS.map((benefit, index) => (
                    <li className="flex gap-4" key={`benefit-price-${index}`}>
                      <div className="flex aspect-square h-6 w-6 items-center justify-center rounded-full bg-wpu-primary/20 text-wpu-primary">
                        <FaCheck />
                      </div>
                      <p className="text-sm font-medium text-gray-700 lg:text-base">
                        <span className="font-bold text-wpu-primary">
                          {benefit.highlight}
                        </span>{" "}
                        {benefit.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="mb-2 flex items-center gap-2">
                  <p className="text-gray-500 line-through lg:text-lg">
                    Rp 3.000.000
                  </p>
                  <div className="rounded-full bg-wpu-primary py-1 pl-2 pr-1.5 text-xs font-semibold text-white lg:py-0.5 lg:pr-1 lg:text-sm">
                    Hemat{" "}
                    <span className="ml-1 rounded-full bg-white px-1.5 font-bold text-wpu-primary">
                      83.5%
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 text-3xl font-black text-wpu-primary lg:text-5xl">
                  Rp 495.000
                </h3>
                <p className="mb-6 border-b border-gray-200 pb-6 text-sm text-gray-500">
                  {/* *Hari terakhir untuk harga tersebut */}
                  *Jumlah Kursi Terbatas
                </p>
                <Link
                  // href="https://learn.wpucourse.id"
                  href="#cost"
                  className="flex w-full justify-center rounded-lg bg-wpu-primary px-4 py-3 font-semibold text-white lg:text-xl"
                >
                  {/* Daftar Sekarang */}
                  Segera Hadir
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full" id="faq">
            <h2 className="mb-6 text-2xl font-bold !leading-snug text-gray-700 lg:text-3xl">
              <span className="text-wpu-primary">Punya pertanyaan</span> seputar
              bootcamp
            </h2>
            <FAQ lists={FAQ_LISTS} hideTitle />
            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-wpu-primary/10 p-8 lg:flex-row lg:items-center lg:px-12">
              <div>
                <h3 className="mb-2 text-2xl font-bold text-wpu-primary">
                  Konsultasi Program Gratis
                </h3>
                <p className="text-sm font-medium text-gray-800 lg:text-base">
                  Apabila kamu memiliki pertanyaan dan ingin berkonsultasi
                  langsung dengan team WPU Course
                </p>
              </div>
              <Link
                href="https://wa.me/6285190062005"
                className="flex items-center gap-2 text-nowrap rounded-xl bg-wpu-primary px-4 py-3 font-bold text-white lg:text-lg"
              >
                <IoLogoWhatsapp />
                Konsultasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RamadhanCamp;
