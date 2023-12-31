import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
        <title>Wearing Glory</title>
      </Head>
      <div className="bg-gray-50 items-center justify-center sm:overflow-x-hidden text-center w-full h-[100vh]">
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default MyApp;
