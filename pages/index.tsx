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
        {/* <Sidebar /> */}

        <div className="flex md:flex-col flex-row items-center justify-center  py-2 w-full h-full min-h-screen relative">
          <main className="flex flex-col items-center justify-center  flex-1 text-center mb-42 main-font">
            <h1 className="text-7xl font-bold  z-50">
              I am{" "}
              <a className="text-blue-600 " href="https://nextjs.org">
                Riju Pramanik
              </a>
            </h1>

            <p className="mt-3 text-3xl font-bold z-50">
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
