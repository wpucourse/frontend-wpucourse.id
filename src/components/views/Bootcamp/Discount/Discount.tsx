import Countdown from "@/components/common/Countdown";
import { cn } from "@/lib/utils";
import { ICourse } from "@/types/course";
import { convertIDR } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegPaste } from "react-icons/fa6";

const COUNTDOWN_FROM = new Date("2025-03-04T23:59:59");

const Discount = () => {
  const [successCopy, setSuccessCopy] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("WPU Ramadhan Camp");
    setSuccessCopy(true);
    setTimeout(() => {
      setSuccessCopy(false);
    }, 3000);
  };

  return (
    <section className="container relative flex flex-col items-center gap-16 px-4 lg:flex-row lg:px-0">
      <div id="offer" className="absolute -top-[300px]" />
      <div className="w-full lg:w-1/2">
        <div className="flex-1 rounded-3xl border-2 border-gray-100 bg-white p-4">
          <Image
            className="w-full rounded-xl border border-gray-100"
            src="/images/bootcamp/wpuramadhan.png"
            width={1920}
            height={1080}
            alt="bootcamp"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="mt-4 text-2xl font-bold !leading-snug text-wpu-primary lg:text-4xl">
          Manfaatkan Waktu Ramadhan Untuk Belajar Skill Baru
        </h2>
        <p className="mb-10 mt-2 font-medium leading-relaxed text-gray-600 lg:text-lg">
          WPU Course menawarkan diskon eksklusif kepada student yang ingin
          belajar di platform kami. Dapatkan pengalaman belajar langsung bersama
          Pak Dhika, Kang Avip dan Kang Agung.
        </p>
        <Link
          href="/bootcamp/wpu-ramadhan-camp"
          className="rounded-xl bg-wpu-primary px-5 py-3 font-semibold text-white"
        >
          Lihat Selengkapnya
        </Link>
        {/* <div
          className={cn(
            "flex w-fit items-center justify-between gap-6 rounded-lg border-2 border-dashed border-gray-300 px-4 py-3",
            {
              "border-wpu-primary": successCopy,
            },
          )}
        >
          <p
            className={cn("line-clamp-1 text-sm font-bold text-gray-500", {
              "text-wpu-primary": successCopy,
            })}
          >
            ???
          </p>
          {successCopy ? (
            <FaRegCheckCircle className="text-xl text-wpu-primary" />
          ) : (
            <FaRegPaste
              className={cn("cursor-pointer text-xl text-gray-500", {
                "text-wpu-primary": successCopy,
              })}
              onClick={copyToClipboard}
            />
          )}
        </div> */}
      </div>
    </section>
  );
};

export default Discount;
