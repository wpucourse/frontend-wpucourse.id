import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script
          id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-32XNL474NC"
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-32XNL474NC');`,
          }}
        />
      </body>
    </Html>
  );
}
