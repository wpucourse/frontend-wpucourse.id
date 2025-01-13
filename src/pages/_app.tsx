import SmoothScrolling from "@/components/common/SmoothScrolling";
import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SmoothScrolling>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SmoothScrolling>
  );
}
