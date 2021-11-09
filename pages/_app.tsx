import "../styles/globals.css";
import "../styles/locomotive-scroll.min.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Riju Pramanik | Web Developer</title>
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
