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
            `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}` || "",
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
