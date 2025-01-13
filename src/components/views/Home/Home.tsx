import Link from "next/link";
import GridPattern from "@/components/common/GridPattern/GridPattern";
import Testimonial from "./Testimonial";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaArrowRightLong } from "react-icons/fa6";

const IMAGES_BG = [
  {
    title: "css",
    image: "/home/icon/icon-css.png",
    class: "right-[3.5%] top-[10%]",
    size: 50,
  },
  {
    title: "jira",
    image: "/home/icon/icon-jira.png",
    class: "right-[11%] top-[16%]",
    size: 80,
  },
  {
    title: "laravel",
    image: "/home/icon/icon-laravel.png",
    class: "right-[-9.5%] top-[22%]",
    size: 160,
  },
  {
    title: "mongo",
    image: "/home/icon/icon-mongo.png",
    class: "right-[6.7%] top-[42%]",
    size: 90,
  },
  {
    title: "html",
    image: "/home/icon/icon-html.png",
    class: "right-[-2%] top-[52%]",
    size: 50,
  },
  {
    title: "vue",
    image: "/home/icon/icon-vue.png",
    class: "right-[13.5%] top-[60.5%]",
    size: 72,
  },
  {
    title: "react-query",
    image: "/home/icon/icon-react-query.png",
    class: "right-[12.5%] top-[75.5%]",
    size: 40,
  },
  {
    title: "js",
    image: "/home/icon/icon-js.png",
    class: "right-[-2%] top-[74%]",
    size: 100,
  },
  {
    title: "node",
    image: "/home/icon/icon-node.png",
    class: "left-[-8%] top-[7.5%]",
    size: 100,
  },
  {
    title: "express",
    image: "/home/icon/icon-express.png",
    class: "left-[8%] top-[19%]",
    size: 65,
  },
  {
    title: "next",
    image: "/home/icon/icon-next.png",
    class: "left-[-3.5%] top-[28.5%]",
    size: 85,
  },
  {
    title: "figma",
    image: "/home/icon/icon-figma.png",
    class: "left-[8.2%] top-[38.5%]",
    size: 35,
  },
  {
    title: "tailwind",
    image: "/home/icon/icon-tailwind.png",
    class: "left-[1%] top-[43.5%]",
    size: 57,
  },
  {
    title: "react",
    image: "/home/icon/icon-react.png",
    class: "left-[5%] top-[54.5%]",
    size: 110,
  },
  {
    title: "ts",
    image: "/home/icon/icon-ts.png",
    class: "left-[-9%] top-[68%]",
    size: 150,
  },
];

const Home = () => {
  return (
    <div>
      <section className="relative mb-20 mt-20 h-[90vh] max-h-[1080px] overflow-x-hidden">
        <GridPattern />
        {/* <Image src="/dummy.png" alt="bg" fill /> */}
        <div className="container relative mx-auto flex h-full items-center justify-center px-4 sm:px-0">
          <div className="flex flex-col items-center lg:gap-4">
            <div className="mb-2 flex w-fit items-center rounded-full border border-gray-200 bg-white/50 p-1 backdrop-blur">
              <div className="rounded-full bg-gray-200/50 px-2 py-1 font-semibold backdrop-blur">
                Kenapa WPU Course?
              </div>
              <button className="flex items-center gap-2 px-4 font-semibold">
                Lihat penawaran eksklusif kami <FaArrowRightLong />
              </button>
            </div>
            <h1 className="inline-block bg-gradient-to-r from-blue-500 via-green-500 to-wpu-primary bg-clip-text text-center text-3xl font-bold text-transparent lg:py-2 lg:text-6xl">
              Belajar Bersama Kami
            </h1>
            <h1 className="text-center text-3xl font-bold lg:text-6xl">
              Jadi Talenta Digital Terbaik
            </h1>
            <p className="mx-auto mt-4 w-2/3 text-center text-xl font-medium">
              Platform online course terbaik dengan dukungan mentor
              berpengalaman dan materi terlengkap
            </p>
            <Link
              href="https://learn.wpucourse.id/auth/register"
              className="mx-auto mt-3 w-fit rounded-xl border bg-wpu-primary px-4 py-3 text-center font-semibold text-white"
            >
              Belajar Sekarang
            </Link>
          </div>
          {IMAGES_BG.map((item) => (
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
      <Testimonial />
    </div>
  );
};

export default Home;
