import React from "react";
import styles from "../styles/styles";
import findbeauty from "../assets/findbeauty.jpg";
import Button from "./Button";
import ButtonReverse from "./ButtonReverse";

const FindBeauty = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="flex justify-start items-center bg-[#2A2A2A] text-white px-4 py-16">
        <div className="sm:visible hidden h-full">
          <img src={findbeauty} alt="" className="w-full h-full" />
        </div>

        <div className="sm:flex justify-around items-center flex-1 space-y-6">
          <div>
            <h1 className={`${styles.headLine2}`}>Find Your Beauty</h1>
            <p className={`${styles.detailText1}`}>
              Cosmecos is committed to cruelty-free product formulation, &
              testing.
            </p>
          </div>
          <div>
           <ButtonReverse>View More</ButtonReverse>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindBeauty;
