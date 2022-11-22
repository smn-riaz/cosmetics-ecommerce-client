import React from "react";
import { testimonialbg } from "../assets";
import styles from "../styles/styles";

const Testimonials = () => {
  return (
    <section
      style={{
        background: `url(${testimonialbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-14 flex justify-center"
    >
      <div className="bg-white p-10 w-[70%]">
        <div className="p-16 border border-black space-y-3">
          <div className="space-y-2">
            <h3 className={`${styles.headLine1}`}>Testimonials</h3>
            <h1 className={`${styles.headLine2}`}>What Our clients say</h1>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-raleway text-tertiary font-light leading-8 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              nemo velit tempore, dolore cupiditate eius esse dignissimos fugit
              ducimus repellendus placeat recusandae modi.
            </h3>
            <p className="font-raleway text-lg">Samantha Peterson</p>
            <h5 className="font-semibold uppercase text-secondary">Client of sosmecos</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
