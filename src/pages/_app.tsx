import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-400 h-screen">
      <Head>
        <title>Libelle Beauty Lounge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
