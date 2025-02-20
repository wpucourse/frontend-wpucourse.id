import * as fs from "fs";
import { getCurrentDateInUTC } from "@/utils/date";

const Sitemap = () => {
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = "https://wpucourse.id";

  const staticPaths = fs
    .readdirSync("src/pages")
    .filter((staticPage) => {
      return ![
        "sitemap.xml.tsx",
        "404.tsx",
        "_app.tsx",
        "_document.tsx",
        "api",
        ".DS_Store",
        "index.tsx",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace(".tsx", "")}`;
    });

  const allPaths: string[] = [
    "https://wpucourse.id/",
    "https://wpucourse.id/about",
    "https://wpucourse.id/course",
    "https://wpucourse.id/blog",
    "https://wpucourse.id/contact",
    "https://wpucourse.id/privacy-policy",
    "https://wpucourse.id/terms-conditions",
    "https://wpucourse.id/bootcamp",
    ...staticPaths,
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${getCurrentDateInUTC()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
