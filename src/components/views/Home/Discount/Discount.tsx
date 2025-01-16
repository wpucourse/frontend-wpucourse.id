import Countdown from "@/components/common/Countdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { CiCircleCheck, CiMedicalClipboard } from "react-icons/ci";
import { FaPaste, FaRegCheckCircle } from "react-icons/fa";
import { FaRegPaste } from "react-icons/fa6";

const Discount = () => {
  const [successCopy, setSuccessCopy] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("WPU_COURSE_LAUNCH");
    setSuccessCopy(true);
    setTimeout(() => {
      setSuccessCopy(false);
    }, 3000);
  };
  return (
    <section className="container relative flex flex-col items-center gap-16 px-4 lg:flex-row lg:px-0">
      <div id="offer" className="absolute -top-[300px]" />
      <div className="w-full lg:w-1/2">
        <div className="flex-1 rounded-2xl border-2 border-gray-100 bg-white p-5 pt-8">
          <h2 className="mb-1 text-2xl font-bold text-wpu-primary">
            Belajar MERN Stack
          </h2>
          <Image
            className="mt-4 w-full rounded-lg border border-gray-100"
            src="/general/cover-belajar-mern.webp"
            width={500}
            height={500}
            alt="mern"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <Countdown />
        <h1 className="mt-4 text-4xl font-bold leading-normal text-wpu-primary">
          Nikmati Penawaran Eksklusif dari WPU Course
        </h1>
        <p className="mb-8 mt-2 text-base font-medium leading-relaxed text-gray-600">
          WPU Course menawarkan diskon eksklusif kepada student yang ingin
          belajar di platform kami. Salin kode ini untuk kelas Belajar MERN
          Stack dan nikmati penawaran spesial saat membeli course di WPU Course.
        </p>
        <div
          className={cn(
            "flex w-fit items-center justify-between gap-6 rounded-lg border-2 border-gray-300 px-4 py-3",
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
            WPU_COURSE_LAUNCH
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
        </div>
      </div>
    </section>
  );
};

export default Discount;
