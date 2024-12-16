import GridPattern from "@/components/common/GridPattern/GridPattern";
import Header from "@/components/common/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="home"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <section className="relative mb-20 h-screen">
        <GridPattern />
        <div className="container mx-auto flex h-screen items-center justify-center px-4 sm:px-0">
          <div className="flex flex-col lg:gap-4">
            <h1 className="inline-block bg-gradient-to-r from-blue-500 via-green-500 to-wpu-primary bg-clip-text text-center text-3xl font-bold text-transparent lg:py-2 lg:text-6xl">
              Belajar Bersama Kami
            </h1>
            <h1 className="text-center text-3xl font-bold lg:text-6xl">
              Jadi Talenta Digital Terbaik
            </h1>
            <p className="mx-auto mt-4 w-2/3 text-center text-xl">
              Platform online course terbaik dengan dukungan mentor
              berpengalaman dan materi terlengkap
            </p>
            <Link
              href="https://learn.wpucourse.id/auth/register"
              className="mx-auto w-fit rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white"
            >
              Belajar Sekarang
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
