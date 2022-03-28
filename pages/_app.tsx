import "../styles/globals.css";
import "../styles/locomotive-scroll.min.css";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Riju Pramanik | Web Developer</title>
      </Head>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
export default App;
