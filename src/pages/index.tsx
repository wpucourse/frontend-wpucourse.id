import Header from "@/components/common/Header";
import Home from "@/components/views/Home";

export default function HomePage() {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="home"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Home />
    </>
  );
}
