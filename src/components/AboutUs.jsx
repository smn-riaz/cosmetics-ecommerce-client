import React from "react";
import aboutus from "../assets/aboutus2.jpg";
import styles from "../styles/styles";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:p-12 space-x-10">
        <div className="sm:h-full h-[500px] w-full relative md:p-8 my-4 mx-2">
          <div className="w-[95%] h-[95%] absolute top-0 left-0 border-2 border-secondary "></div>
          <div
            className="w-[95%] h-[95%] absolute bottom-0 right-0 flex justify-center items-center"
            style={{
              background: `url(${aboutus})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <button className="px-8 py-6 uppercase bg-white text-black ">
                cosmetics
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-end items-center md:p-8 my-4 mx-2">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className={`${styles.headLine1}`}>About Cosmetics</h3>
              <h1 className={`${styles.headLine2}`}>
                We guaranted <br className="sm:visible invisible" /> Perfect
                quality
              </h1>
              <p className="border-l-2 border-secondary px-3">
                Popularized through customer relationships with some of the
                world’s most recognizable faces, the “brow revolution” she
                ignited has become a landmark contribution to beauty history.
              </p>
              <p className={`${styles.detailText1}`}>
                Merluccid hake redlip blenny discus snake mudhead large-eye
                bream scissor-tail rasbora opaleye char dogfish beachsalmon,
                sand tilefish. Spiny eel skipping goby fierasfer tarwhine Blind
                goby tidewater goby rocket danio armorhead catfish streamer.
              </p>
            </div>

            <div className="xs:flex justify-around items-center">
              <div className="m-2">
                <h1 className="text-6xl text-secondary">550 K</h1>
                <p className="text-lg font-raleway">Cosmetic sold</p>
              </div>
              <div className="m-2">
                <h1 className="text-6xl text-secondary">10 +</h1>
                <p className="text-lg font-raleway">Perfect years</p>
              </div>
            </div>

            <div>
            <Button title="Explore More" goLink="/product"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
