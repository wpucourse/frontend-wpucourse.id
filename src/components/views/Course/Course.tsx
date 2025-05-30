import { ICourseResponse } from "@/types/course";
import { convertIDR } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";

const Course = ({ course }: { course: ICourseResponse[] }) => {
  return (
    <main className="container px-4 py-16 pt-28 lg:px-0">
      <section className="flex flex-col items-center gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-4 text-3xl font-bold !leading-snug text-gray-700 lg:text-5xl">
            Dapatkan Skill Digital Baru Bersama
            <span className="text-wpu-primary"> WPU Course</span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Online coures kami bisa bantu kamu dalam meningkatkan skill digital
            yang sesuai dengan kebutuhan industri. Kamu bisa belajar kapanpun
            dan dimanapun kamu mau. kami juga menyediakan mentor yang
            berpengalaman di bidangnya yang siap membantu kamu dalam proses
            belajar.
          </p>
          <div className="mt-8 flex gap-4" id="offer">
            <Link
              href="#offer"
              className="rounded-xl bg-wpu-primary px-5 py-3 font-semibold text-white"
            >
              Pilih Course
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
            src="/images/course/hero.png"
            width={1000}
            height={1000}
            alt="mern"
            className="h-full w-full"
          />
        </div>
      </section>
      <section className="mt-16">
        <h2 className="mb-2 text-3xl font-bold text-wpu-primary lg:text-4xl">
          Course Terbaru Kami
        </h2>
        <p className="mb-4 w-full text-gray-700 lg:text-lg">
          Kami menyediakan berbagai macam course yang dapat membantu kamu dalam
          mengembangkan kemampuan dan keterampilan digital.
        </p>
        <div className="mb-8 h-1 w-[100px] rounded-full bg-wpu-primary" />
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {course.map((item) => (
            <Link href={`${item?.website}`} target="_blank">
              <div className="relative flex h-full flex-col rounded-2xl bg-gray-200/50 p-4">
                <div>
                  <Image
                    src={item?.cover}
                    width={1920}
                    height={1080}
                    alt="mern"
                    className="aspect-video rounded-lg"
                  />
                  {item?.defaultVoucher?.discount && (
                    <div className="absolute right-6 top-6 h-fit rounded-md bg-white/70 px-2 py-1 text-sm font-bold text-gray-700">
                      {item?.defaultVoucher?.discount}% Off
                    </div>
                  )}
                  <h4 className="mb-4 mt-4 text-lg font-bold">{item.title}</h4>
                </div>
                <div className="flex flex-1 flex-col justify-end">
                  {item?.defaultVoucher?.discount && (
                    <p className="font-bold text-red-500 line-through">
                      {convertIDR(item?.originalPrice)}
                    </p>
                  )}
                  <p className="text-2xl font-black text-gray-700">
                    {item.isTeaser
                      ? "Segera Hadir"
                      : convertIDR(
                          item?.originalPrice -
                            (item?.defaultVoucher?.discount
                              ? item?.originalPrice *
                                item?.defaultVoucher?.discount
                              : 0) /
                              100,
                        )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Course;
