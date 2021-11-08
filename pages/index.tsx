import dynamic from "next/dynamic";
import { createRef, useEffect } from "react";
import Navbar from "../components/navbar";
const Wave = dynamic(() => import("../components/wave"), {
  ssr: false,
});

const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

export default function Home() {
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    });

    // `useEffect's cleanup phase
    return () => scroll.destroy();
  });

  return (
    <>
      <nav className="fixed top-5 right-5 z-50">
        <Navbar />
      </nav>
      <main data-scroll-container>
        <div className="flex " data-scroll-section>
          {/* <Sidebar /> */}

          <div className="flex  items-center justify-center  py-2 w-full h-full min-h-screen relative">
            <main className="flex flex-col items-center justify-center  flex-1 text-center mb-46 main-font">
              <h1 className="text-5xl md:text-7xl font-bold  z-50">
                I am <span className="text-blue-600 ">Riju Pramanik</span>
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
        <div
          className="grid grid-cols-2 min-h-screen place-items-center content-center"
          data-scroll-section
        >
          <div className="items-center" data-scroll>
            <h1
              data-scroll-speed="2"
              data-scroll-position="top"
              data-scroll-direction="horizontal"
            >
              Hey
            </h1>
            <p>👋</p>
          </div>
          <div className="items-center" data-scroll>
            <Navbar />
          </div>
        </div>
      </main>
    </>
  );
}
