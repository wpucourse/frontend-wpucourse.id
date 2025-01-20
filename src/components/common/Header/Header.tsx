import Head from "next/head";
interface PropTypes {
  canonical: string;
  description: string;
  title: string;
  page: string;
  keywords: string;
}

const Header = (props: PropTypes) => {
  const { canonical, description, title, page, keywords } = props;

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical}></link>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="WPU Course" />
      <meta property="og:type" content={page} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="wpucourse.id" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://wpucourse.id/favicon.ico" />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
      <meta name="twitter:url" content={canonical}></meta>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default Header;
