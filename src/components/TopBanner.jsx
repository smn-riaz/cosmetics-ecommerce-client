import React from "react";
import topbanner from "../assets/topbanner.png";
import Button from "./Button";
import topbg from '../assets/topbg.jpg'


const TopBanner = () => {

  return (
    <section className="md:flex-row-reverse md:flex xl:px-40" style={{
      background: `url(${topbg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
        <div className=" md:basis-1/2">
          <img src={topbanner} alt="cosmetics" className="w-full"/>
        </div>

        <div className="flex justify-center p-8 md:p-14 items-center md:basis-1/2">
          <div className="gap-y-8 flex-col flex">
            <h1 className="font-raleway text-6xl md:text-8xl xl:text-[150px]">
              Perfect <br className="sm:visible hidden" /> Cosmetic
            </h1>
            <p className="font-nunito lg:text-md text-xl text-tertiary xl:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              exercitationem inventore adipisci vitae quia assumenda ad.
              Voluptates at corrupti vel modi labore iusto. Culpa, dicta!
            </p>
            <Button title="Discover" goLink="/product"/>
          </div>
        </div>
    </section>
  );
};

export default TopBanner;
