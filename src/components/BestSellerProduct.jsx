import React from "react";
import styles from "../styles/styles";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import { bestSellingProducts } from "./Index";


const BestSellerProduct = () => {

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="text-center space-y-4 py-8">
        <h3 className={`${styles.headLine1}`}>Best products</h3>
        <h1 className={`${styles.headLine2}`}>Best selling products</h1>
        <h4 className={`${styles.detailText1} text-lg`}>
          The stylish and organized cosmetic products
        </h4>
      </div>

      <div
        className={`grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center ${styles.paddingX}`}
      >
        {bestSellingProducts.map((product) => (
          <div className="mx-8 my-12">
            <div className="relative overflow-hidden  bg-divBg group">
              <img
                src={product.image}
                alt=""
                className="w-full h-full group-hover:scale-110 duration-500"
              />
              <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]"></div>
            </div>
            <div className="w-full space-y-2">
              <div className="flex flex-row justify-center py-1">
                <AiFillStar color="#ECBBA0" />
                <AiFillStar color="#ECBBA0" />
                <AiFillStar color="#ECBBA0" />
                <AiFillStar color="#ECBBA0" />
                <AiFillStar color="#ECBBA0" />
              </div>
              <div>
                <p className="text-center hover:text-secondary text-lg font-medium">
                  {product.p}
                </p>
              </div>
              <div className="flex w-full">
                <button className="w-full px-6 py-3 border-[0.5px] hover:bg-gray-800 hover:text-primary duration-500 border-black uppercase font-medium">
                  Add to cart
                </button>
                <button className=" px-4 py-3 border-[0.5px] border-l-0 border-black uppercase text-secondary">
                  $99
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-2">
        <Button>Explore More</Button>
      </div>
    </section>
  );
};

export default BestSellerProduct;
