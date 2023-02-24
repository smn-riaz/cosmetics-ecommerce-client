import React, { useState } from "react";
import styles from "../styles/styles";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../App";
import { useEffect } from "react";
import { serverLink } from "../constants";
import Loader from "./Loader";
import { data } from "../data";

const BestSellerProduct = () => {
  const [products, setProducts] = useState([]) 

  const [projectData, setProjectData] = useState([]);
  const [moreProjects, setMoreProjects] = useState(false);
  const handleMoreProjects = () => {
    if (moreProjects === false) {

      setProjectData(products);
      setMoreProjects(true);
  
     
    }
  };

  const handleLessProjects = () => {

      setProjectData(products.slice(0, 12));
      setMoreProjects(false);
  
   
  };


  useEffect(() => {
    fetch(`${serverLink}/product/allProduct`)
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data.data.slice(0, 12))
        setProducts(data.data);
      });
  }, []);

  

  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <div className="text-center space-y-4 py-8">
        <h3 className={`${styles.headLine1}`}>Best products</h3>
        <h1 className={`${styles.headLine2}`}>Best selling products</h1>
        <h4 className={`${styles.detailText1} text-lg`}>
          The stylish and organized cosmetic products
        </h4>
      </div>

    
    {
      products.length>0 ?<div>
          <div
        className={`grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center ${styles.paddingX}`}
      >
        {projectData.map((product) => (
          <Link to={`/product/${product.producttype}/${product.id}`} state={product}>
            <div className="mx-8 my-12">
              <div className="relative   bg-divBg group">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full max-h-[230px] duration-500"
                />
                <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] hover:w-[100%] hover:h-[100%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%] hover:inset-0"></div>
              </div>
              <div className="w-full space-y-2 pt-3">
                <div className="flex flex-row justify-center py-1">
                  <AiFillStar color="#ECBBA0" />
                  <AiFillStar color="#ECBBA0" />
                  <AiFillStar color="#ECBBA0" />
                  <AiFillStar color="#ECBBA0" />
                  <AiFillStar color="#ECBBA0" />
                </div>
                <div>
                  <p className="text-center hover:text-secondary text-lg font-medium">
                    {product.title}
                  </p>
                </div>
                <div className="flex w-full">
                  <button className="w-full px-6 py-3 border-[0.5px] hover:bg-gray-800 hover:text-primary duration-500 border-black uppercase font-medium">
                    Add to cart
                  </button>
                  <button className=" px-4 py-3 border-[0.5px] border-l-0 border-black uppercase text-secondary">
                    ${product.price}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end items-center">
        {!moreProjects ? (
          <button
            onClick={handleMoreProjects}
            className="cursor-pointer  w-fit p-2 hover:bg-gray-900 font-raleway bg-gray-700 text-white hover:text-primary duration-500 border-black xl:text-4xl xl:px-8 xl:py-6"
          >
            More Products
          </button>
        ) : (
          <button
            onClick={handleLessProjects}
            className="cursor-pointer  w-fit p-2 hover:bg-gray-900 font-raleway bg-gray-700 text-white hover:text-primary duration-500 border-black xl:text-4xl xl:px-8 xl:py-6"
          >
            Less Products
          </button>
        )}
      </div>

      <div className="flex justify-center items-center py-4">
        <Button title="Explore Category" goLink="/product" />
      </div>
      </div>
      :
      <div>
        <Loader />
      </div>
    }

    </section>
  );
};

export default BestSellerProduct;
