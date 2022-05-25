import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import Navbar from "../components/navbar";
import { FiChevronsDown } from "react-icons/fi";
const Wave = dynamic(() => import("../components/wave"), {
  ssr: false,
});
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";
import clientsData from "../assets/clientData";
import Profile from "../components/profile";
import CardWithRoundImage from "../components/cardWithRoundImage";
import { motion } from "framer-motion";

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
              <main className="flex flex-col items-center justify-center  flex-1 text-center ">
                <h1 className="text-5xl md:text-7xl font-bold  z-50">
                  I am{" "}
                  <span className="text-blue-600 main-font tracking-in-expand">
                    Riju Pramanik
                  </span>
                </h1>

                <p className="mt-3 text-3xl font-bold z-50">
                  Web Developer @
                  <span className="p-3 font-mono  rounded-md">Freelancer</span>
                </p>
              </main>
              {/* <ParticleWave /> */}
              <Wave />
              <p className="absolute bottom-12  animate-bounce border-2 border-blue-600 hover:bor rounded-full p-1  bg-white text-black">
                <FiChevronsDown className="text-4xl my-1" />
              </p>
            </div>
          </div>

          <div className="flex flex-col min-h-screen " data-scroll-section>
            <Profile />
          </div>
          <div
            className="flex flex-col min-h-screen items-center "
            data-scroll-section
          >
            <h1 className="neonText text-6xl">Testing Neon</h1>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
