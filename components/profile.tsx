import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import profilePic from "../public/assets/img/me.png";
import Image from "next/image";

const tabsList = ["Work", "About", "Links"];

function Profile() {
  return (
    <>
      <div className="w-64 h-64 rounded-full mx-auto max-w-64 border-2 border-blue-600 p-1">
        <Image
          className="rounded-full"
          src={profilePic}
          alt=""
          layout="responsive"
        />
      </div>
      <div className="max-w-3xl mx-auto w-full  py-8 sm:px-0 ">
        <Tab.Group>
          <Tab.List className="flex px-5 p-1 space-x-1 bg-blue-600/40 rounded-xl border-1">
            {tabsList.map((item, i) => (
              <Tab as={Fragment} key={i}>
                {({ selected }) => (
                  <button
                    className={
                      "main-font" + selected
                        ? "transition-all  w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow"
                        : "transition-all w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60  hover:bg-white/[0.12] hover:text-white"
                    }
                  >
                    {item}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="py-2 ">
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default Profile;
