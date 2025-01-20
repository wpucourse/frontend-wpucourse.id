import Marquee from "@/components/common/Marquee";
import { TESTIMONIALS } from "../Home.constants";
import ReviewCard from "@/components/ui/ReviewCard";

const Testimonial = () => {
  const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);
  return (
    <section
      id="testimonial"
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="container px-4 lg:px-0">
        <h1 className="mb-2 text-3xl font-bold text-wpu-primary lg:text-5xl">
          Testimonial
        </h1>
        <p className="mb-4 text-gray-700 lg:text-lg">
          Kami percaya bahwa pengalaman terbaik datang dari student yang telah
          menyelesaikan course di WPU Course.
        </p>
        <div className="mb-8 h-1 w-[100px] rounded-full bg-wpu-primary" />
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonial;
