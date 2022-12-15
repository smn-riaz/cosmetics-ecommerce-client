import React from "react";
import ourpr1 from "../assets/ourpr1.jpg";
import ourpr2 from "../assets/ourpr2.jpg";
import ourpr3 from "../assets/ourpr3.jpg";
import styles from "../styles/styles";

const OurProducts = () => {
  const ourproducts = [
    {
      h1: "Best",
      h4: "For Body",
      bg: ourpr1,
    },
    {
      h1: "Multi",
      h4: "Cosmetics",
      bg: ourpr2,
    },
    {
      h1: "Colour",
      h4: "Nail Polish",
      bg: ourpr3,
    },
  ];
  return (
    <section className={`${styles.paddingY} grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-stretch ${styles.paddingX}`}>
      {ourproducts.map((ourproduct) => (
        <div className="w-[270px] ss:w-[300px] h-[270px] ss:h-[300px] xl:h-[600px] xl:w-[600px] relative m-6">
          <div className="w-[95%] h-[95%] absolute top-0 left-0 border-[1px] border-secondary z-10"></div>
          <div
            className="w-[95%] h-[95%] absolute bottom-0 z-0 right-0 flex justify-center items-center hover:opacity-80"
            style={{
              background: `url(${ourproduct.bg})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>
              <h1 className="font-greatvibes text-6xl text-white">
                {ourproduct.h1}
              </h1>
              <h4 className="font-raleway text-2xl font-medium text-white">
                {ourproduct.h4}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurProducts;
