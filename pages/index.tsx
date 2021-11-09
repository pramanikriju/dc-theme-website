import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
const Wave = dynamic(() => import("../components/wave"), {
  ssr: false,
});
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";

export default function Home() {
  const containerRef = useRef(null);
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-5 right-5 z-50">
        <Navbar />
      </nav>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options
        }}
        watch={[
          router.asPath,
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
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
            className="grid grid-cols-2  " //min-h-screen place-items-center
            data-scroll-section
            data-scroll
            id="myarea"
          >
            <div
              className="text-center h-64"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#myarea"
            >
              <h1>Hey</h1>
              <h2>Test 2</h2>
              <p>👋</p>
            </div>
            <div data-scroll>
              <img src="https://source.unsplash.com/featured" alt="" />
              <img src="https://source.unsplash.com/featured?space" alt="" />
              <img src="https://source.unsplash.com/featured?nature" alt="" />
              <img src="https://source.unsplash.com/featured?ocean" alt="" />
              <img src="https://source.unsplash.com/featured?tech" alt="" />

              <img src="https://source.unsplash.com/featured?pattern" alt="" />
              <img src="https://source.unsplash.com/featured?people" alt="" />
            </div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
