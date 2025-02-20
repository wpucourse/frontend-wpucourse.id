import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingBarContainer } from "react-top-loading-bar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingBarContainer>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </LoadingBarContainer>
  );
}
