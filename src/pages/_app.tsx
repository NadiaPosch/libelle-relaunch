import { AppProps } from "next/app";
import Head from "next/head";
import "../styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Head>
        <title>Libelle Beauty Lounge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
