import React from "react";
import PropTypes from "prop-types";

// cardWithRoundImage.propTypes = {};

export default function CardWithRoundImage(props: any) {
  return (
    <div>
      <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
          Design Tools
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200"></p>

        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="text-xl font-medium text-blue-500 dark:text-blue-300"
          >
            John Doe
          </a>
        </div>
      </div>
    </div>
  );
}
