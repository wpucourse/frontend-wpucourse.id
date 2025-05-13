import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingBarContainer } from "react-top-loading-bar";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/libs/react-query/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingBarContainer>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </LoadingBarContainer>
    </QueryClientProvider>
  );
}
