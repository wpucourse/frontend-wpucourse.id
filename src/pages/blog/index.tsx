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
            "Bearer 7efd96fc53af67e88807884d580c3a833cd687eff82402465da8c6e027e53751f633219ea65dcc7d8d774c9b9e70a70097f4dca2eeaa367a1a90290bdbfb331b789b69c5a5a6e4ac12973b913afc60460c43a1f22e9a26bfc26da36dfcf7a1b39fe4b1b2e808699485627f4ebcfd5828a130b372cef08b0dc75e120f24029138",
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
