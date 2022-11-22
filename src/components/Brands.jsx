import React from "react";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brandbg from "../assets/brandbg.jpg";
import styles from "../styles/styles";

const Brands = () => {
  const brands = [
    {
      image: brand1,
    },
    {
      image: brand2,
    },
    {
      image: brand3,
    },
    {
      image: brand4,
    },
    {
      image: brand5,
    },
  ];
  return (
    <section
      style={{
        background: `url(${brandbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-4"
    >
      <div className="flex flex-col sm:flex-row justify-around items-center">
        {brands.map((brand) => (
          <div>
            <img
              src={brand.image}
              alt="Trusted Brand"
              className={`${styles.brandDiv}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
