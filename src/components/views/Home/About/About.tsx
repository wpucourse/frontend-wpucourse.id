import Image from "next/image";
import { ABOUT_FOUNDERS } from "../Home.constants";

const About = () => {
  return (
    <section id="#about" className="container px-4 lg:px-0">
      <h1 className="mb-2 text-3xl font-bold text-wpu-primary lg:text-5xl">
        Meet Our Founder
      </h1>
      <p className="mb-4 text-gray-700 lg:text-lg">
        Bertemu dengan para founder WPU Course yang berpengalaman di bidang
        teknologi dan memiliki passion mengajar.
      </p>
      <div className="mb-8 h-1 w-[100px] rounded-full bg-wpu-primary" />
      <div className="flex flex-col gap-8 lg:flex-row">
        {ABOUT_FOUNDERS.map((founder) => (
          <div
            className="flex-1 rounded-3xl border-2 border-gray-100 bg-white p-5 pt-8"
            key={founder.name}
          >
            <h2 className="mb-1 text-2xl font-bold text-wpu-primary">
              {founder.name}
            </h2>
            <p className="font-medium">{founder.role}</p>
            <Image
              className="mt-4 w-full rounded-xl"
              src={founder.image}
              width={500}
              height={500}
              alt="agung"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
