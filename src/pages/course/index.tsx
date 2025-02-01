import Header from "@/components/common/Header";
import Course from "@/components/views/Course";
import { ICourseResponse } from "@/types/course";

const CoursePage = ({ course }: { course: ICourseResponse[] }) => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/course"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="course"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Course course={course} />
    </>
  );
};

export async function getServerSideProps() {
  const { data: course } = await fetch(
    "https://api-platform.wpucourse.id/api/v1/courses?limit=8&page=1",
  )
    .then((res) => res.json())
    .then((res) => res.data);

  return {
    props: {
      course,
    },
  };
}

export default CoursePage;
