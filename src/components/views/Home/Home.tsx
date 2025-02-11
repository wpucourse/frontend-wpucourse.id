import Testimonial from "./Testimonial";
import About from "./About";
import Reason from "./Reason";
import Hero from "./Hero";
import Discount from "./Discount";
import Featured from "./Featured";
import FAQ from "./FAQ";
import { ICourse } from "@/types/course";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Home = ({ course }: { course: ICourse }) => {
  const isMaintenance = Object.keys(course).length < 1;
  const [closeMaintenance, setCloseMaintenance] = useState(false);
  return (
    <div className="flex flex-col gap-16 lg:gap-32">
      {isMaintenance && !closeMaintenance && (
        <div className="fixed bottom-2 left-2 z-50 flex w-fit items-center gap-2 rounded-lg bg-wpu-primary px-3 py-2 text-white">
          <MdClose
            className="cursor-pointer"
            onClick={() => setCloseMaintenance(true)}
          />
          Platform saat ini sedang maintenance
        </div>
      )}
      <Hero />
      {!isMaintenance && <Discount course={course} />}
      <Reason />
      <About />
      <Featured />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
