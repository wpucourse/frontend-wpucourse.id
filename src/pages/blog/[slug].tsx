import Header from "@/components/common/Header";
import DetailBlog from "@/components/views/DetailBlog";
import qs from "qs";

const DetailBlogPage = (props: { article: any }) => {
  const { article } = props;
  return (
    <>
      <Header
        canonical={`https://wpucourse.id/blog/${article.slug}`}
        description={article.description}
        title={article.title}
        author={article.author.name}
        page="article"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <DetailBlog article={article} />
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { slug } = context.params;
  const query = qs.stringify(
    {
      fields: ["title", "description", "slug", "publishedAt"],
      pagination: {
        page: 1,
        pageSize: 10,
      },
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
          fields: ["name", "slug", "backgroundColorPill"],
        },
        blocks: {
          on: {
            "shared.rich-text": {
              populate: "*",
            },
          },
        },
      },
      filters: {
        slug: {
          $eq: slug,
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

    if (res.data.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        article: res.data[0],
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default DetailBlogPage;
