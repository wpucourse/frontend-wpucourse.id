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
    navigator.clipboard.writeText("WPUCOURSELAUNCH");
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
          <div className="mb-1 flex items-center gap-2 text-xl font-bold text-wpu-primary lg:gap-4 lg:text-2xl">
            Belajar MERN Stack{" "}
            <div className="rounded-full bg-wpu-primary px-2 py-1 text-sm text-white">
              86% Off
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 line-through">Rp 2.500.000</p>
            <p className="text-lg font-bold text-wpu-primary">Rp 350.000</p>
          </div>
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
        <h1 className="mt-4 text-2xl font-bold leading-normal text-wpu-primary lg:text-4xl">
          Nikmati Penawaran Eksklusif dari WPU Course
        </h1>
        <p className="mb-6 mt-2 font-medium leading-relaxed text-gray-600 lg:text-lg">
          WPU Course menawarkan diskon eksklusif kepada student yang ingin
          belajar di platform kami. Salin kode ini dan nikmati penawaran spesial
          saat membeli course di WPU Course.
        </p>
        <div
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
            WPUCOURSELAUNCH
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
