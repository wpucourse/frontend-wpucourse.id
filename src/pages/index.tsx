import Header from "@/components/common/Header";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import Home from "@/components/views/Home";
import { ICourse } from "@/types/course";

export default function HomePage({ course }: { course: ICourse }) {
  console.log("course", course);
  return (
    <>
      <Header
        canonical="https://wpucourse.id/"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course"
        page="home"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Home course={course} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://api-platform.wpucourse.id/api/v1/courses?limit=1&page=3&variant=course",
    )
      .then((res) => res.json())
      .then((res) => res.data);
    const course = {
      cover: res.data[0].cover,
      title: res.data[0].title,
      price: res.data[0].originalPrice,
      slug: res.data[0].slug,
      website: res.data[0].website,
      description: res.data[0].description,
      voucher: res.data[0]?.defaultVoucher?.code || "",
      discount: res.data[0]?.defaultVoucher?.discount || 0,
    };
    return {
      props: {
        course,
      },
    };
  } catch (error) {
    return {
      props: {
        course: {},
      },
    };
  }
}
