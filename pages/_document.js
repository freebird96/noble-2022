import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="Noble Varghese - Backend Developer" />
        <meta name="image" content="./profile.jpg" />
        <meta itemProp="name" content="Bonhomme" />
        <meta
          itemProp="description"
          content="Noble Varghese - Backend Developer"
        />
        <meta itemProp="image" content="./profile.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Backend Developer" />
        <meta
          name="twitter:description"
          content="Noble Varghese - Backend Developer"
        />
        <meta name="twitter:site" content="@pixel_arts" />
        <meta name="twitter:creator" content="@pixel_arts" />
        <meta name="twitter:image:src" content="./profile.jpg" />
        <meta name="og:title" content="Portfolio" />
        <meta
          name="og:description"
          content="Noble Varghese - Backend Developer"
        />
        <meta name="og:image" content="./profile.jpg" />
        <meta name="og:site_name" content="Bonhomme" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="./profile.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
