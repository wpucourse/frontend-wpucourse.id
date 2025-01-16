import Header from "@/components/common/Header";
import Course from "@/components/views/Course";

const CoursePage = () => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/course"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="course"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Course />
    </>
  );
};

export default CoursePage;
