import Header from "@/components/common/Header";
import About from "@/components/views/About";

const AboutPage = () => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/about"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="about"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <About />
    </>
  );
};

export default AboutPage;
