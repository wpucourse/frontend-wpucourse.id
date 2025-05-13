import ConfettiSideCannons from "@/components/common/Confetti";
import GridPattern from "@/components/common/GridPattern/GridPattern";
import { cn } from "@/libs/tailwind/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { HERO_ICON_BG } from "../Home.constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative mt-20 h-[90vh] max-h-[1080px] overflow-x-hidden"
    >
      <GridPattern />
      <div className="container relative mx-auto flex h-full items-center justify-center px-4 sm:px-0">
        <div className="flex flex-col items-center md:gap-4">
          <div className="mb-2 flex w-fit items-center rounded-full border border-gray-200 bg-white/50 p-1 backdrop-blur">
            <div className="hidden rounded-full bg-gray-200/50 px-2 py-1 font-semibold text-gray-700 backdrop-blur md:block">
              Kenapa WPU Course?
            </div>
            <Link
              href="#offer"
              className="flex items-center gap-2 px-4 font-semibold text-gray-700"
            >
              Lihat penawaran eksklusif kami <FaArrowRightLong />
            </Link>
          </div>
          <h1 className="inline-block bg-gradient-to-r from-blue-500 via-green-500 to-wpu-primary bg-clip-text text-center text-3xl font-bold text-transparent md:py-2 md:text-6xl">
            Belajar Bersama Kami
          </h1>
          <h1 className="text-center text-3xl font-bold text-gray-700 md:text-6xl">
            Jadi Talenta Digital Terbaik
          </h1>
          <p className="mx-auto mt-4 text-center text-xl font-medium text-gray-700 md:w-2/3">
            Platform online course terbaik dengan dukungan mentor berpengalaman
            dan materi terlengkap
          </p>
          <Link
            href="https://learn.wpucourse.id/auth/register"
            className="mx-auto mt-5 w-fit rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white md:mt-3"
          >
            Belajar Sekarang
          </Link>
          <ConfettiSideCannons />
        </div>
        {HERO_ICON_BG.map((item) => (
          <Image
            key={item.title}
            className={cn(
              `absolute hidden scale-90 opacity-90 xl:block`,
              item.class,
            )}
            src={item.image}
            alt={item.title}
            width={item.size}
            height={item.size}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
