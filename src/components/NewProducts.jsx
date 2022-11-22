import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  newpr,
} from "../assets";
import styles from "../styles/styles";
import Button from "./Button";
import { bestSellingProducts } from "./Index";

const NewProducts = () => {
 
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="text-center space-y-4 py-8">
        <h3 className={`${styles.headLine1}`}>New Products</h3>
        <h1 className={`${styles.headLine2}`}>Meet new arrivals</h1>
      </div>

      <div className="sm:flex justify-around xl:justify-center items-center space-x-4 space-y-4">
        <div className="xs:flex justify-evenly items-center basis-2/3">
          <div>
              {bestSellingProducts.slice(4).map((product1)=> (
                 <div className="flex justify-center items-center">
                 <div className="h-[120px] xl:h-[240px] relative overflow-hidden  bg-divBg group m-2">
                   <img
                     src={product1.image}
                     alt=""
                     className="w-full h-full group-hover:scale-110 duration-500"
                   />
                   <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]"></div>
                 </div>
                 <div className="space-y-1">
                   <h1>{product1.p}</h1>
                   <h4>
                     <del className="text-gray-500">$27.00</del> <span className="text-secondary">$15.00</span>
                   </h4>
                   <p className="flex justify-start">
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                   </p>
                 </div>
               </div>
              ))}
          </div>

          <div>
              {bestSellingProducts.slice(4,9).map((product1)=> (
                 <div className="flex justify-center items-center">
                 <div className="h-[120px] xl:h-[240px] relative overflow-hidden  bg-divBg group m-2">
                   <img
                     src={product1.image}
                     alt=""
                     className="w-full h-full group-hover:scale-110 duration-500"
                   />
                   <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]"></div>
                 </div>
                 <div className="space-y-1">
                   <h1>{product1.p}</h1>
                   <h4>
                     <del className="text-gray-500">$27.00</del> <span className="text-secondary">$15.00</span>
                   </h4>
                   <p className="flex justify-start">
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                     <AiFillStar color="#EAAA99" size={12} />
                   </p>
                 </div>
               </div>
              ))}
          </div>

          
        </div>
        <div className={`${styles.flexCenter} basis-1/3`}>
          <img src={newpr} alt="NewProduct" className="h-full xl:w-[80%] w-full object-contain"/>
        </div>
      </div>

      <div className="flex justify-center py-8">
        <Button>Explore More</Button>
      </div>
    </section>
  );
};

export default NewProducts;
