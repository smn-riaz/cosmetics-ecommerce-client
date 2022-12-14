import React from "react";
import styles from "../styles/styles";
import features from '../assets/features.jpg'
import Button from "./Button";

const Features = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <div className={`flex flex-col sm:flex-row justify-center items-center space-x-6 space-y-6`}>
        <div className="flex justify-center items-center basis-1/2 xl:basis-1/3">
          <div className="relative">
            <img src={features} alt="" className="w-full h-full object-contain" />
            <h1
              className={`font-greatvibes text-secondaryLight text-[100px] inset-0 flex justify-center items-center absolute`}
            >
              Splash
            </h1>
          </div>
        </div>

        <div className="flex flex-row justify-end  items-center basis-1/2 xl:basis-1/3">
          <div className="space-y-4">
            <h3 className={`${styles.headLine1}`}>Features</h3>
            <h1 className={`${styles.headLine2}`}>
              Eyeshadow <br className="sm:visible invisible" /> Revolution
            </h1>
            <p className="xl:text-3xl">
              Our eyes are intrinsically trained to spot divine proportion and
              immediately associate it with beauty and harmony.
            </p>
            <p className={`${styles.detailText1}`}>
              Brows should begin directly above the middle of your nostrils. The
              highest point of the arch should connect the tip of the nose with
              the middle of the iris.
            </p>

            <div className="flex justify-start">
            <Button title="Explore More" goLink="/product"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
