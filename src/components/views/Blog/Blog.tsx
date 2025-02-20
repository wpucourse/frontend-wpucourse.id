import Image from "next/image";
import Link from "next/link";

const Blog = (props: { articles: any }) => {
  const { articles } = props;
  console.log(articles);
  return (
    <main className="container space-y-16 px-4 py-16 pt-32 lg:space-y-32 lg:px-0">
      <section className="flex min-h-[50vh] flex-col-reverse items-center gap-4 md:flex-row lg:gap-16">
        <div className="lg:w-2/5">
          <div className="font-bold text-gray-500">Artikel Terbaru</div>
          <h1 className="mb-2 mt-3 text-4xl font-black text-wpu-primary">
            {articles.data[0].title}
          </h1>
          <p className="text-gray-700">{articles.data[0].description}</p>
          <a href={`/blog/${articles.data[0].slug}`}>
            <button className="mt-4 rounded-xl bg-neutral-800 px-6 py-3 font-semibold text-white">
              Baca Selengkapnya
            </button>
          </a>
        </div>
        <div className="lg:w-3/5">
          <Image
            className="w-full rounded-2xl"
            src={articles.data[0].cover.url}
            width={3840}
            height={2160}
            alt="mern"
          />
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-3xl font-bold">Semua Artikel</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.data.map((item: any) => (
            <Link
              href={`/blog/${item.slug}`}
              key={item.id}
              className="group relative h-full rounded-3xl border border-gray-100 bg-white p-4"
            >
              <Image
                src={item.cover.url}
                width={3840}
                height={2160}
                alt={item.title}
                className="w-full rounded-xl"
              />
              <div className="mt-4 flex h-[20vh] flex-col justify-between">
                <div>
                  <h3 className="line-clamp-1 text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={item.author.avatar.url}
                      width={3840}
                      height={2160}
                      alt={item.title}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.author.name}</p>
                    <p className="text-xs text-gray-500">Penulis</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
