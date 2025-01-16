import Image from "next/image";
import Link from "next/link";

const Course = () => {
  return (
    <main className="container px-4 py-16 pt-28 lg:px-0">
      <h1 className="my-4 text-2xl font-bold text-wpu-primary lg:mb-8 lg:text-5xl">
        List Course
      </h1>
      <div className="grid w-full cursor-pointer grid-cols-1 gap-4 lg:grid-cols-3">
        <Link href="https://belajarmern.id" target="_blank">
          <div className="relative rounded-2xl bg-gray-100 p-4">
            <Image
              src="/general/cover-belajar-mern.webp"
              width={1920}
              height={1080}
              alt="mern"
              className="rounded-lg"
            />
            <div className="absolute right-6 top-6 h-fit rounded-md bg-white/70 px-2 py-1 text-sm font-bold text-gray-700">
              86% Off
            </div>
            <div className="mt-2 flex gap-2">
              <p className="text-lg font-bold text-red-500 line-through">
                Rp 2.500.000
              </p>
              <p className="text-lg font-bold text-gray-600">Rp 350.000</p>
            </div>
            <div className="mt-2 font-bold text-gray-500">140 Enrolled</div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Course;
