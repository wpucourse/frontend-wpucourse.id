import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FAQ_LISTS } from "../Home.constants";

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
