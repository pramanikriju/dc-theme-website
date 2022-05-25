import React from "react";
import Image from "next/image";

function Client(props) {
  let client = props.client;
  let flip = props.flip;
  return (
    <div
      //className={"flex" + props.flip ? "" : null} //min-h-screen place-items-center
      className="flex"
      data-scroll-section
      data-scroll
      id="myarea"
    >
      <div
        data-scroll
        className={`flex-1  ${!flip ? "order-last" : `order-none`}`}
      >
        <Image src="https://source.unsplash.com/featured?space" alt="" />
      </div>
      <div
        className="flex-1"
        data-scroll
        // data-scroll-sticky
        // data-scroll-target="#myarea"
      >
        <div className="flex justify-center flex-col h-full text-center">
          <div
            className=""
            data-scroll
            //data-scroll-delay="0.08"
            data-scroll-speed="1"
          >
            <p> {client.name} 👋</p>
          </div>
          <div
            className=""
            data-scroll
            //data-scroll-delay="0.9"
            data-scroll-speed="1"
            //data-scroll-offset="100%"
          >
            <p>{client.location}</p>
            <p>{props.flip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
