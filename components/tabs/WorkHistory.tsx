import React from "react";
import { FaLaravel, FaReact } from "react-icons/fa";
import { FiServer } from "react-icons/fi";

function WorkHistory(props) {
  return (
    <div className="flex items-center   ">
      <section className="text-gray-400  body-font">
        <div className="container  py-10 mx-auto flex flex-wrap">
          <div className="flex relative  pb-10 sm:items-center md:w-4/5 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-blue-400 rounded-full inline-flex items-center justify-center">
                <FaLaravel className="h-full w-full p-5 text-red-600" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium  main-font text-white mb-1 text-xl">
                  Laravel
                </h2>
                <p className="leading-relaxed">
                  Full stack PHP framework for constructing everything from
                  small to enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-4/5 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-blue-400 rounded-full inline-flex items-center justify-center">
                <FaReact className="h-full w-full p-5 text-cyan-300" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium main-font text-white mb-1 text-xl">
                  ReactJS
                </h2>
                <p className="leading-relaxed">
                  Javascript based UI framework, I specialize in React, this
                  site is made using NextJS.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative  sm:items-center md:w-4/5 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-blue-400 rounded-full inline-flex items-center justify-center">
                <FiServer className="h-full w-full p-7 text-red-300" />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium main-font text-white mb-1 text-xl">
                  DevOps
                </h2>
                <p className="leading-relaxed">
                  Familiarity with AWS and other cloud infrastructure providers{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkHistory;
