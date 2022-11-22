import React from "react";
import styles from "../styles/styles";
import findbeauty from "../assets/findbeauty.jpg";
import Button from "./Button";

const FindBeauty = () => {
  return (
    <section className="p-8">
      <div
        className="flex justify-start items-center bg-[#2A2A2A] text-white"
        // style={{
        //         background: `url(${findbeauty})`,
        //         backgroundPosition: "left",
        //         backgroundSize: "contain",
        //         backgroundRepeat: "no-repeat",
        //       }}
      >
        <div className="sm:visible invisible">
          <img src={findbeauty} alt="" className="w-full h-full" />
        </div>

        <div className="flex justify-around items-center flex-1">
          <div>
            <h1 className={`${styles.headLine2}`}>Find Your Beauty</h1>
            <p className={`${styles.detailText1}`}>
              Cosmecos is committed to cruelty-free product formulation, &
              testing.
            </p>
          </div>
          <div>
            <button className="px-8 py-4 uppercase bg-white text-black ">
              see more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindBeauty;
