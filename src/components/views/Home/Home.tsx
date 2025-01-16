import Testimonial from "./Testimonial";
import About from "./About";
import Reason from "./Reason";
import Hero from "./Hero";
import Discount from "./Discount";
import Featured from "./Featured";

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <Hero />
      <Discount />
      <Reason />
      <About />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
