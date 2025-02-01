import Header from "@/components/common/Header";
import Home from "@/components/views/Home";
import { ICourse } from "@/types/course";

export default function HomePage({ course }: { course: ICourse }) {
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
  const { data } = await fetch(
    "https://api-platform.wpucourse.id/api/v1/courses?limit=1&page=1",
  )
    .then((res) => res.json())
    .then((res) => res.data);

  const course = {
    cover: data[0].cover,
    title: data[0].title,
    price: data[0].price,
    slug: data[0].slug,
    website: data[0].website,
    description: data[0].description,
    voucher: data[0].voucher.code,
    discount: data[0].voucher.discount,
  };
  return {
    props: {
      course,
    },
  };
}
