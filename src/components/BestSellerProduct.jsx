import React from "react";
import styles from "../styles/styles";
import best1 from "../assets/best1.jpg";
import best2 from "../assets/best2.jpg";
import best3 from "../assets/best3.jpg";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

const BestSellerProduct = () => {
  return (
    <section className=" p-8">
      <div className="text-center space-y-4 py-10">
        <h3 className={`${styles.headLine1}`}>Best products</h3>
        <h1 className={`${styles.headLine2}`}>Best selling products</h1>
        <h4 className={`${styles.detailText1} text-lg`}>
          The stylish and organized cosmetic products
        </h4>
      </div>

      <div className="flex justify-center items-center">

        <div className="m-10">
          <div
            className="w-[280px] h-[350px]  flex justify-center items-center bg-divBg"
            style={{
              background: `url(${best1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] hover:w-full hover:h-full duration-700 "></div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-center py-3">
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
            </div>
            <div>
              <p className="text-center hover:text-secondary text-lg font-medium">
                Body Oil & Lotion
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


        <div className="m-10">
          <div
            className="w-[280px] h-[350px]  flex justify-center items-center bg-divBg"
            style={{
              background: `url(${best3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] hover:w-full hover:h-full duration-700 "></div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-center py-3">
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
            </div>
            <div>
              <p className="text-center hover:text-secondary text-lg font-medium">
                Body Oil & Lotion
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


        <div className="m-10">
          <div
            className="w-[280px] h-[350px]  flex justify-center items-center bg-divBg"
            style={{
              background: `url(${best2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] hover:w-full hover:h-full duration-700 "></div>
          </div>
          <div className="w-full">
            <div className="flex flex-row justify-center py-3">
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
              <AiFillStar color="#ECBBA0"/>
            </div>
            <div>
              <p className="text-center hover:text-secondary text-lg font-medium">
                Body Oil & Lotion
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



      </div>

      <div className="flex justify-center items-center">
        <Button />
      </div>
    </section>
  );
};

export default BestSellerProduct;
