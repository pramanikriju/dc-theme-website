import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiServer } from "react-icons/fi";

function Links(props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center text-white">
            <div className="p-4 sm:w-1/4 w-1/2   ">
              <a
                href="https://github.com/pramanikriju/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="title-font  font-medium sm:text-4xl text-3xl 	 mb-2">
                  <FaGithub className="mx-auto" />
                </div>
                <p className="leading-relaxed">Github</p>
              </a>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <a
                href="https://linkedin.com/in/rijup"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="title-font font-medium sm:text-4xl text-3xl mb-2 ">
                  <FaLinkedin className="mx-auto" />
                </h2>
                <p className="leading-relaxed">LinkedIn</p>
              </a>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <a
                href="https://twitter.com/riju_venate"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="title-font font-medium sm:text-4xl text-3xl  mb-2">
                  <FaTwitter className="mx-auto" />
                </h2>
                <p className="leading-relaxed">Twitter</p>
              </a>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <a
                href="https://www.instagram.com/riju.venate/"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="title-font font-medium sm:text-4xl text-3xl  mb-2">
                  <FaInstagram className="mx-auto" />
                </h2>
                <p className="leading-relaxed">Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Links;
