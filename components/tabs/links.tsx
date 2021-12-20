import React from "react";
import PropTypes from "prop-types";
import CardWithRoundImage from "../cardWithRoundImage";

Links.propTypes = {};

function Links(props) {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center text-white">
            <div className="p-4 sm:w-1/4 w-1/2 ">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                2.7K
              </h2>
              <p className="leading-relaxed">Github</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                1.8K
              </h2>
              <p className="leading-relaxed">Twitter</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                35
              </h2>
              <p className="leading-relaxed">Instagram</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                4
              </h2>
              <p className="leading-relaxed">Blog</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Links;
