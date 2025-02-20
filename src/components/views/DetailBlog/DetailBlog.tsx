import { formatDate } from "@/utils/date";
import Image from "next/image";
import Markdown from "react-markdown";
import { FaLinkedin, FaTwitter, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const DetailBlog = (props: { article: any }) => {
  const { article } = props;
  return (
    <div className="container relative mx-auto px-4 pt-36 lg:px-0">
      <section className="flex w-full flex-col items-center justify-center antialiased lg:px-32">
        <div className="flex items-center justify-center gap-4">
          <div
            className="inline-block rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: `${article.category.backgroundColorPill}33`,
              color: `${article.category.backgroundColorPill}`,
            }}
          >
            {article.category.name}
          </div>
          <div className="text-sm font-semibold text-gray-700">
            {formatDate(article.publishedAt, "dName, D MMMM YYYY")}
          </div>
        </div>
        <h1 className="my-4 text-center text-3xl font-bold text-wpu-primary lg:mb-4 lg:text-5xl">
          {article.title}
        </h1>
        <p className="mb-4 text-center text-gray-700">{article.description}</p>
        <div className="mb-8 mt-4 flex items-center gap-2">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={article.author.avatar.url}
              width={1000}
              height={1000}
              alt={article.author.name}
              className="w-full"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">{article.author.name}</p>
          </div>
        </div>
        <Image
          className="w-full rounded-2xl"
          src={article.cover.url}
          width={1920}
          height={1080}
          alt="cover"
        />
      </section>
      <section className="mt-8 w-full antialiased lg:mt-16 lg:px-32">
        <Markdown className="blog">{article.blocks[0].body}</Markdown>
        <div className="my-8 flex items-center gap-4">
          <p>Bagikan ini: </p>

          <Link
            href={`https://x.com/intent/tweet?text=https://wpucourse.id/blog/${article.slug}`}
            target="blank"
            aria-label="X share"
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-1 text-sm font-semibold text-wpu-primary"
          >
            <FaXTwitter />
            Twitter - X
          </Link>

          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://wpucourse.id/blog/${article.slug}`}
            target="blank"
            aria-label="Linkedin share"
            className="flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-2 py-1 text-sm font-semibold text-wpu-primary"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DetailBlog;
