import { ICourseResponse } from "@/types/course";
import { convertIDR } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";

const Course = ({ course }: { course: ICourseResponse[] }) => {
  return (
    <main className="container px-4 py-16 pt-28 lg:px-0">
      <h1 className="my-4 text-2xl font-bold text-wpu-primary lg:mb-8 lg:text-5xl">
        Online Course
      </h1>
      <div className="grid w-full cursor-pointer grid-cols-1 gap-4 lg:grid-cols-3">
        {course.map((item) => (
          <Link href={item?.website} target="_blank">
            <div className="relative rounded-2xl bg-gray-200/50 p-4">
              <Image
                src="/general/cover-belajar-mern.webp"
                width={1920}
                height={1080}
                alt="mern"
                className="rounded-lg"
              />
              <div className="absolute right-6 top-6 h-fit rounded-md bg-white/70 px-2 py-1 text-sm font-bold text-gray-700">
                {item.defaultVoucher.discount}% Off
              </div>
              <h4 className="mb-4 mt-4 text-lg font-bold">{item.title}</h4>
              <p className="font-bold text-red-500 line-through">
                {convertIDR(item.originalPrice)}
              </p>
              <p className="text-2xl font-black text-gray-700">
                {convertIDR(
                  item?.originalPrice -
                    (item?.originalPrice * item?.defaultVoucher?.discount) /
                      100,
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Course;
