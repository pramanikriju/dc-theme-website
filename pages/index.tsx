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
              <main className="flex flex-col items-center justify-center  flex-1 text-center mb-46 ">
                <h1 className="text-5xl md:text-7xl font-bold  z-50">
                  I am{" "}
                  <span className="text-blue-600 main-font">Riju Pramanik</span>
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
            id="myarea1"
          >
            <div
              className="text-center h-64"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#myarea1"
            >
              <div
                className="mt-64"
                data-scroll
                data-scroll-delay="0.08"
                data-scroll-speed="1"
              >
                <h1>Hey</h1>
                <h2>I'm RIju.</h2>
                <p>
                  Hi, I'm Riju Pramanik, a full stack developer and designer
                  based out of India. I help design and curate rich digital
                  experiences, both online and on mobile devices.
                </p>
              </div>
              <div
                className="mt-10"
                data-scroll
                data-scroll-delay="0.9"
                data-scroll-speed="1"
                data-scroll-offset="10%"
              >
                <p>A digital experience Developer</p>
              </div>
            </div>
            <div data-scroll>
              <img src="https://source.unsplash.com/featured?portrait" alt="" />
            </div>
          </div>
          <div
            className="grid grid-cols-2  " //min-h-screen place-items-center
            data-scroll-section
            data-scroll
            id="myarea"
          >
            <div data-scroll>
              <img src="https://source.unsplash.com/featured?space" alt="" />
              <img src="https://source.unsplash.com/featured?nature" alt="" />
              <img src="https://source.unsplash.com/featured?ocean" alt="" />
              <img src="https://source.unsplash.com/featured?places" alt="" />
              <img src="https://source.unsplash.com/featured?pattern" alt="" />
              <img src="https://source.unsplash.com/featured?people" alt="" />
              <img src="https://source.unsplash.com/featured" alt="" />
            </div>
            <div
              className="text-center h-64"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#myarea"
            >
              <div
                className="mt-64"
                data-scroll
                data-scroll-delay="0.08"
                data-scroll-speed="1"
              >
                <h1>Hey</h1>
                <h2>I'm RIju.</h2>
                <p>👋</p>
              </div>
              <div
                className="mt-10"
                data-scroll
                data-scroll-delay="0.9"
                data-scroll-speed="1"
                //data-scroll-offset="100%"
              >
                <p>A digital experience Developer</p>
              </div>
            </div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
