import Head from "next/head";
import Sidebar from "../components/sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex ">
        <Sidebar />
        <div className="flex md:flex-col flex-row items-center justify-center  py-2 w-full">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              I am{" "}
              <a className="text-blue-600" href="https://nextjs.org">
                Riju Pramanik
              </a>
            </h1>

            <p className="mt-3 text-2xl">
              Web Developer @
              <span className="p-3 font-mono  rounded-md">Freelancer</span>
            </p>
          </main>
        </div>
      </div>
    </>
  );
}
