import Testimonial from "./Testimonial";
import About from "./About";
import Reason from "./Reason";
import Hero from "./Hero";
import Discount from "./Discount";
import Featured from "./Featured";
import FAQ from "./FAQ";
import { ICourse } from "@/types/course";

const Home = ({ course }: { course: ICourse }) => {
  return (
    <div className="flex flex-col gap-16 lg:gap-32">
      <Hero />
      <Discount course={course} />
      <Reason />
      <About />
      <Featured />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Home;
