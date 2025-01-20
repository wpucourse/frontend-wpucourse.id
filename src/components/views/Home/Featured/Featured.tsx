import Countdown from "@/components/common/Countdown";
import Image from "next/image";
import Link from "next/link";
import { FaPencilRuler } from "react-icons/fa";

const Featured = () => {
  return (
    <section
      id="featured"
      className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:px-0"
    >
      <div className="hidden w-full lg:block lg:w-1/2">
        <Image
          className="mt-4 w-full rounded-lg border border-gray-100"
          src="/general/cover-belajar-mern.webp"
          width={500}
          height={500}
          alt="mern"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <FaPencilRuler className="mb-4 text-5xl text-wpu-primary" />
        <h1 className="text-2xl font-bold leading-normal text-wpu-primary lg:text-4xl">
          Jelajahi Course Unggulan Kami
        </h1>
        <div className="w-full lg:hidden lg:w-1/2">
          <Image
            className="mt-4 w-full rounded-lg border border-gray-100"
            src="/general/cover-belajar-mern.webp"
            width={500}
            height={500}
            alt="mern"
          />
        </div>
        <p className="mt-5 leading-relaxed text-gray-700 lg:text-lg">
          Temukan berbagai macam course yang kami sediakan untuk membantu kamu
          meningkatkan kemampuan dan keterampilan kamu. Dari course dasar hingga
          course lanjutan.
        </p>
        <Link href="/course">
          <button className="mt-5 rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white">
            Lihat Katalog Course
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
