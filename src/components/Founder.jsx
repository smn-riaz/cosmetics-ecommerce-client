import React from "react";
import styles from "../styles/styles";
import founder1 from '../assets/founder1.jpg'
import founder2 from '../assets/founder2.png'
import foundersign from '../assets/foundersign.png'
import founder from '../assets/founder.jpg'

const Founder = () => {
  return (
    <section>
      <div className="flex justify-center items-center">

        <div className="flex flex-row justify-end  items-center py-10 px-14 basis-1/2" 
        // style={{
        //       background: `url(${founder2})`,
        //       backgroundPosition: "center",
        //       backgroundSize: "cover",
        //       backgroundRepeat: "no-repeat",
        //     }}
            >
          <div className="space-y-4">
            <h3 className={`${styles.headLine1}`}>Features</h3>
            <h1 className={`${styles.headLine2}`}>
              Eyeshadow <br className="sm:visible invisible" /> Revolution
            </h1>
            <p className="">
              Our eyes are intrinsically trained to spot divine proportion and
              immediately associate it with beauty and harmony.
            </p>
            <p className={`${styles.detailText1}`}>
              Brows should begin directly above the middle of your nostrils. The
              highest point of the arch should connect the tip of the nose with
              the middle of the iris.
            </p>

            <div className="flex justify-around">
              <div>
               <img src={founder} alt="" className="rounded-full"/>
              </div>
              <div>
                <h2 className="text-3xl">Ann Gray</h2>
                <h3 className={`text-2xl font-light uppercase`}>Founder</h3>
              </div>
              <div>
              <img src={foundersign} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-center items-center basis-1/2">
            <div className="relative" 
            >
              <img src={founder1} alt="" className="w-full object-contain"/>
              <h1 className={`${styles.headLine1} text-[200px] inset-0 flex justify-center items-center absolute`}>Color</h1>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
