import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import profilePic from "../public/assets/img/me.png";
import Image from "next/image";
import Self from "./tabs/self";
import WorkHistory from "./tabs/WorkHistory";
import Links from "./tabs/links";
import { motion, AnimatePresence } from "framer-motion";

const tabsList = ["About", "Tech", "Links"];

function Profile() {
  return (
    <>
      <div
        className="w-64 h-64 rounded-full mx-auto  border-2 border-blue-600 p-3 my-5 "
        data-scroll
      >
        {/* <motion.div
          animate={{
            scale: [1, 1.1, 1, 1.1, 1],
            //rotate: [0, 0, 270, 270, 0],
            //borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ repeat: 1, duration: 10 }}
        > */}
        <Image
          className="rounded-full"
          src={profilePic}
          alt=""
          layout="responsive"
        />
        {/* </motion.div> */}
      </div>
      <div className="max-w-3xl mx-auto w-full py-6 sm:px-0 bg-blue-600/60 rounded-xl shadow-2xl shadow-blue-600/40 ">
        <Tab.Group>
          <Tab.List className="flex px-5 p-1 space-x-1  rounded-xl border-1">
            {tabsList.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "transition-all   uppercase w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow"
                        : "transition-all underline uppercase border-1 border-white w-full py-2.5 text-md leading-5 font-medium text-white rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60  hover:bg-white/[0.12] hover:text-white"
                    }
                  >
                    {item}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <hr className="mx-5 mt-5" />

          <Tab.Panels className="py-2 min-h-full	">
            <motion.div layout>
              <Tab.Panel>
                <motion.div
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                >
                  <Self />
                </motion.div>
              </Tab.Panel>
              <Tab.Panel>
                <WorkHistory />
              </Tab.Panel>
              <Tab.Panel>
                <Links />
              </Tab.Panel>
            </motion.div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default Profile;
