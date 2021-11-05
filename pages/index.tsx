import Head from "next/head";
import Sidebar from "../components/sidebar";
// import Wave from "../components/wave";
//import ParticleWave from "../components/particlewave";

import dynamic from "next/dynamic";

const Wave = dynamic(() => import("../components/wave"), {
  ssr: false,
});
const ParticleWave = dynamic(() => import("../components/particlewave"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex ">
        <Sidebar />

        <div className="flex md:flex-col flex-row items-center justify-center  py-2 w-full relative">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mb-32">
            <h1 className="text-6xl font-bold  ">
              I am{" "}
              <a className="text-blue-600 glitch" href="https://nextjs.org">
                Riju Pramanik
              </a>
            </h1>

            <p className="mt-3 text-2xl">
              Web Developer @
              <span className="p-3 font-mono  rounded-md">Freelancer</span>
            </p>
          </main>
          {/* <ParticleWave /> */}
          <Wave />
        </div>
      </div>
    </>
  );
}
