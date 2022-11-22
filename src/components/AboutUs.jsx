import React from "react";
import aboutus from "../assets/aboutus2.jpg";
import styles from "../styles/styles";
import Button from "../components/Button";

const AboutUs = () => {
  return (
    <section className="p-8">
      <div className="flex justify-between px-14 py-10">
        <div className="min-w-[500px] min-h-[600px] relative">
          <div className="w-[95%] h-[95%] absolute top-0 left-0 border-2 border-secondary"></div>
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

        <div className="flex flex-row justify-end  items-center py-10 px-14">
          <div className="space-y-4">
            <h3 className={`${styles.headLine1}`}>About Cosmetics</h3>
            <h1 className={`${styles.headLine2}`}>
              We guaranted <br className="sm:visible invisible" /> Perfect
              quality
            </h1>
            <p className="border-l-2 border-secondary px-3">
              Popularized through customer relationships with some of the
              world’s most recognizable faces, the “brow revolution” she ignited
              has become a landmark contribution to beauty history.
            </p>
            <p className={`${styles.detailText1}`}>
              Merluccid hake redlip blenny discus snake mudhead large-eye bream
              scissor-tail rasbora opaleye char dogfish beachsalmon, sand
              tilefish. Spiny eel skipping goby fierasfer tarwhine Blind goby
              tidewater goby rocket danio armorhead catfish streamer.
            </p>

            <div className="flex justify-around">
              <div>
                <h1 className="text-6xl text-secondary">550 K</h1>
                <p className="text-lg font-raleway">Cosmetic sold</p>
              </div>
              <div>
                <h1 className="text-6xl text-secondary">10 +</h1>
                <p className="text-lg font-raleway">Perfect years</p>
              </div>
            </div>

            <div className="my-4">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
