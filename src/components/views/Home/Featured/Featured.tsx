import Image from "next/image";
import Link from "next/link";
import { FaVideo } from "react-icons/fa6";

const Featured = () => {
  return (
    <section
      id="featured"
      className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:px-0"
    >
      <div className="hidden w-full lg:block lg:w-1/2">
        <Image
          className="mt-4 w-full rounded-3xl border border-gray-100"
          src="/general/cover-belajar-mern.webp"
          width={1920}
          height={1080}
          alt="mern"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <FaVideo className="mb-4 text-5xl text-wpu-primary" />
        <h1 className="text-2xl font-bold leading-normal text-wpu-primary lg:text-4xl">
          Course Unggulan
        </h1>
        <div className="w-full lg:hidden lg:w-1/2">
          <Image
            className="mt-4 w-full rounded-2xl border border-gray-100"
            src="/general/cover-belajar-mern.webp"
            width={500}
            height={500}
            alt="mern"
          />
        </div>
        <p className="mt-5 leading-relaxed text-gray-700 lg:text-lg">
          Temukan berbagai course unggulan untuk mengembangkan keterampilan
          digital dengan materi yang komprehensif dan dukungan dari instruktur
          berpengalaman untuk memberikan pengalaman belajar yang efektif dan
          menyenangkan.
        </p>
        <Link href="/course">
          <button className="mt-5 rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white">
            Lihat Seluruh Course
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
