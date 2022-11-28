import React from "react";
import { Link, useLocation } from "react-router-dom";
import prtype1 from "../assets/prtype1.jpg";
import prtype2 from "../assets/prtype2.jpg";
import prtype3 from "../assets/prtype3.jpg";
import prtype4 from "../assets/prtype4.jpg";
import styles from "../styles/styles";
import Button from "./Button";

const ProductTypes = () => {
  const productTypes = [
    {
      image: prtype1,
      title: "Perfect Concealer",
      id:"prefectconcealer"
    },
    {
      image: prtype2,
      title: "Body Care",
      id:"bodycare"
    },
    {
      image: prtype3,
      title: "Makeup Equipment",
      id:"mackupequipment"
    },
    {
      image: prtype4,
      title: "Awesome Soap",
      id:"awesomesoap"
    },
  ];

  const pathname = useLocation().pathname
  

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="grid grid-cols-1 ss:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center">
        {productTypes.map((product) => (
          <div className={pathname === '/'? 'h-[500px] relative overflow-hidden bg-divBg group m-2':'h-[500px] relative overflow-hidden bg-divBg group m-2 z-auto'}>
            <img
              src={product.image}
              alt=""
              className="w-full h-full group-hover:scale-110 duration-500"
            />
            <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]">
            <Button title={product.title} goLink={`/product/${product.id}`}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductTypes;
