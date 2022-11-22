import React from "react";
import ourpr1 from "../assets/ourpr1.jpg";
import ourpr2 from "../assets/ourpr2.jpg";
import ourpr3 from "../assets/ourpr3.jpg";

const OurProducts = () => {
  return (
    <section className="md:flex-row flex-col flex justify-center items-center gap-20">
      <div className="w-[300px] h-[300px] sm:basis-1/2 md:basis-1/3 relative">
        <div className="w-[90%] h-[90%] absolute top-0 left-0 border-[1px] border-black z-10"></div>
        <div
          className="w-[90%] h-[90%] absolute bottom-0 z-0 right-0 flex justify-center items-center hover:opacity-80"
          style={{
            background: `url(${ourpr1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="font-greatvibes text-6xl text-white">Best</h1>
            <h4 className="font-raleway text-2xl font-medium text-white">
              For Body
            </h4>
          </div>
        </div>
      </div>

      <div className="min-w-[300px] min-h-[300px] sm:basis-1/2 md:basis-1/3 relative">
        <div className="w-[90%] h-[90%] absolute top-0 left-0 border-2 border-secondary"></div>
        <div
          className="w-[90%] h-[90%] absolute bottom-0 right-0 flex justify-center items-center hover:opacity-80"
          style={{
            background: `url(${ourpr2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="font-greatvibes text-6xl text-secondary">Multi</h1>
            <h4 className="font-raleway text-2xl font-medium text-black">
              Cosmetics
            </h4>
          </div>
        </div>
      </div>

      <div className="min-w-[300px] min-h-[300px] sm:basis-1/2 md:basis-1/3 relative">
        <div className="w-[90%] h-[90%] absolute top-0 left-0 border-2 border-secondary"></div>
        <div
          className="w-[90%] h-[90%] absolute bottom-0 right-0 flex justify-center items-center hover:opacity-80"
          style={{
            background: `url(${ourpr3})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <h1 className="font-greatvibes text-6xl text-secondary">Colour</h1>
            <h4 className="font-raleway text-2xl font-medium text-black">
              Nail Polish
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
