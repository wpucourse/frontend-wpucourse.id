import Head from "next/head";

const NotFoundPage = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Head>
        <title>404 Not Found</title>
      </Head>
      <h1 className="text-7xl font-bold text-wpu-primary">404</h1>
      <p className="text-2xl text-gray-700">Halaman tidak ditemukan</p>
    </main>
  );
};

export default NotFoundPage;
