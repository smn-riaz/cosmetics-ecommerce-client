import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductsContext } from "../App";
import newpr from "../assets/newpr.jpg";
import styles from "../styles/styles";
import Button from "./Button";

const NewProducts = () => {
  const { products } = useContext(ProductsContext);
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="text-center space-y-4 py-8">
        <h3 className={`${styles.headLine1}`}>New Products</h3>
        <h1 className={`${styles.headLine2}`}>Meet new arrivals</h1>
      </div>

      <div className="sm:flex justify-around xl:justify-center items-center space-x-4 space-y-4">
        <div className="xs:flex justify-evenly items-center basis-2/3">
          <div>
            {products?.slice(0,4).map((product) => (
              <Link to={`/product/${product.producttype}/${product.id}`} state={product}>
                <div className="flex justify-start space-x-2 items-center">
                  <div className="relative overflow-hidden  bg-divBg group m-2">
                    <img
                      src={product.image}
                      alt=""
                      className="h-[140px] w-[130px] group-hover:scale-110 duration-500"
                    />
                    <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]"></div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-raleway font-medium">{product.title}</h1>
                    <h4>
                    <del className="text-gray-500 text-sm">${product.price+3}</del>{" "}
                      <span className="text-secondary font-semibold">${product.price}</span>
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
              </Link>
            ))}
          </div>

          <div>
            {products?.slice(5,9).map((product) => (
              <Link to={`/product/${product.producttype}/${product.id}`}>
                <div className="flex justify-start space-x-2 items-center">
                  <div className="relative overflow-hidden  bg-divBg group m-2">
                    <img
                      src={product.image}
                      alt=""
                      className="h-[140px] w-[130px] group-hover:scale-110 duration-500"
                    />
                    <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]"></div>
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-raleway font-medium">{product.title}</h1>
                    <h4>
                    <del className="text-gray-500 text-sm">${product.price+3}</del>{" "}
                      <span className="text-secondary font-semibold">${product.price}</span>
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
              </Link>
            ))}
          </div>

          
        </div>
        <div className={`${styles.flexCenter} basis-1/3`}>
          <img
            src={newpr}
            alt="NewProduct"
            className="h-full xl:w-[80%] w-full object-contain"
          />
        </div>
      </div>

      <div className="flex justify-center py-8">
        <Button title="Explore More" goLink="/product" />
      </div>
    </section>
  );
};

export default NewProducts;
