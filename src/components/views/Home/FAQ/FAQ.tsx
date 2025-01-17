import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const FAQ_LISTS = [
  {
    id: "1",
    question: "Apakah pembelajaran dilakukan secara online?",
    answer: "Benar, pembelajaran dilakukan sepenuhnya secara online.",
  },
  {
    id: "2",
    question: "Apakah ada jadwal belajar yang tetap?",
    answer:
      "Tidak ada. Kamu dapat belajar sesuai dengan waktu luang Kamu, tanpa terikat jadwal tertentu.",
  },
  {
    id: "3",
    question: "Bagaimana proses pembelajarannya?",
    answer:
      "Kamu dapat mempelajari materi melalui video pembelajaran yang telah disediakan, kemudian mempraktikkannya secara mandiri.",
  },
  {
    id: "4",
    question: "Apakah ada sesi tatap muka online dengan mentor?",
    answer:
      "Ada, tetapi hanya untuk sesi tanya jawab. Penyampaian materi pembelajaran dilakukan melalui video.",
  },
  {
    id: "5",
    question: "Apakah materi pembelajaran dapat diunduh?",
    answer: "Maaf, saat ini materi pembelajaran tidak dapat diunduh.",
  },
  {
    id: "6",
    question: "Apakah ada batasan waktu akses untuk program ini?",
    answer:
      "Tidak ada. Kamu dapat mengakses semua materi pembelajaran selamanya, selama program ini masih beroperasi.",
  },
  {
    id: "7",
    question:
      "Bagaimana jika saya mengalami kesulitan selama proses pembelajaran?",
    answer:
      "Kamu dapat mengajukan pertanyaan melalui komunitas discord eksklusif untuk member belajarmern.",
  },
  {
    id: "8",
    question: "Apakah ada grup khusus untuk berinteraksi dengan sesama member?",
    answer:
      "Ya, tersedia grup diskusi yang dapat digunakan untuk berinteraksi dan berbagi informasi dengan sesama member.",
  },
];

const FAQ = () => {
  const [openedQuestion, setOpenedQuestion] = useState<string | null>(null);
  return (
    <section className="container px-4 lg:px-0">
      <h1 className="mb-8 text-center text-3xl font-bold text-wpu-primary lg:mb-12 lg:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {FAQ_LISTS.map((item) => (
          <div
            className="h-fit rounded-lg bg-gray-100 px-6 py-4"
            key={`FAQ-${item.id}`}
          >
            <div
              className="flex cursor-pointer items-center justify-between"
              onClick={() => {
                if (openedQuestion === item.id) {
                  setOpenedQuestion(null);
                } else {
                  setOpenedQuestion(item.id);
                }
              }}
            >
              <h4 className="font-semibold lg:text-lg">{item.question}</h4>
              <FaChevronDown
                className={cn({ "rotate-180": openedQuestion === item.id })}
              />
            </div>
            <p
              className={cn(
                "mt-4 border-t border-dashed border-gray-200 py-4",
                {
                  hidden: openedQuestion !== item.id,
                },
              )}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
