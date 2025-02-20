import Header from "@/components/common/Header";
import Blog from "@/components/views/Blog";
import qs from "qs";

const BlogPage = (props: { articles: any }) => {
  const { articles } = props;
  return (
    <>
      <Header
        canonical="https://wpucourse.id/blog"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course Blog"
        page="course"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Blog articles={articles} />
    </>
  );
};

export async function getServerSideProps() {
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 10,
      },
      sort: ["createdAt:desc"],
      populate: {
        cover: {
          fields: ["url"],
        },
        author: {
          fields: ["name"],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        },
        category: {
          fields: ["name", "slug"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  try {
    const res = await fetch(
      `https://wcp-backend-cms-685037394949.asia-southeast1.run.app/api/articles?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}` || "",
        },
      },
    ).then((res) => res.json());

    return {
      props: {
        articles: res,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: {
          data: [],
          meta: {},
        },
      },
    };
  }
}

export default BlogPage;
