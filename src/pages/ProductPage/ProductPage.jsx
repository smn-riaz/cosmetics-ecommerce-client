import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";
import Loader from "../../components/Loader";
import { serverLink } from "../../constants";

import { cartActions } from "../../store/cart-slice";
import styles from "../../styles/styles";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  
  const locationPath = useLocation().pathname.split("/");
  const productId = locationPath[locationPath.length - 1];
  const [productData, setProductData] = useState({} || location.state)


  useEffect(()=> {
    fetch(`${serverLink}/product/${productId}`)
    .then(res => res.json())
    .then(data => 
      {
        console.log(data.res)
        setProductData(data.res)
      })
  },[productId])



  const {user} = useContext(ProductsContext)
 
  const addToCartHandler = () => {
    const {
      title,
      price,
      id,
      producttype,
      image,
      description,
      instock,
      category,
      tags,
    } = productData;
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,    
        image,
        description,
        instock,
        category,
        tags,
        producttype,  
      })
    );
    navigate("/cart");
  };



  return (
    <section className={`sm:px-10 px-6 py-2 w-full`}>
 {productData.title? 
  <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:p-12 space-x-10">
  <div className="md:p-8 my-4 mx-2">
    <img src={productData.image} alt="" className="w-[400px]"/>
  </div>

  <div className="flex flex-row justify-end items-center md:p-8 my-4 mx-2">
    <div className="space-y-10">
      <div className="space-y-4">
        <h3 className={`${styles.headLine1}`}>Organic Cosmetics</h3>
        <h1 className={`${styles.headLine2}`}>{productData.title}</h1>
        <div className="flex justify-start space-x-3 font-semibold text-gray-500">
          <h4>#{productData.id}</h4> <h4>#{productData.producttype}</h4>
        </div>
        <p className="border-l-2 border-secondary px-3">
          {productData.description[0]}
        </p>
        <p className={`${styles.detailText1}`}>{productData.description[1]}</p>
      </div>

      <div className="">
        <div className="m-2 space-y-3">
          <p className="text-xl font-semibold font-nunito">
            <span className="text-secondary">${productData.price}</span>{" "}
            <sub className="text-gray-600 text-md font-bold">
              <del> ${productData.price + 4}</del>
            </sub>
          </p>
          <p className="text-md font-medium font-raleway">
            CATEGORY: <span className="text-gray-500">{productData.category}</span>
          </p>
          <p className="text-md font-medium font-raleway">
            TAGS:{" "}
            {productData.tags.map((tag) => (
              <button className="text-gray-500 capitalize mx-2 border-black border-[.5px] p-[2px] hover:border-secondary hover:bg-secondary  hover:text-black duration-500">
                {tag}
              </button>
            ))}
          </p>
          <p className="text-md">
            INSTOCK: <span className="font-medium"> {productData.instock}</span>
          </p>
        </div>
      </div>

      <div className="ss:flex items-center justify-between">
        <div className="p-2">
          {
            user.name? <button
            className="px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6"
            onClick={addToCartHandler}
          >
            {" "}
            Add to Cart
          </button> 
          :
          <button
            className="px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6"
          onClick={() => alert("Login, first!")}
          >
            {" "}
            <Link to="/login">Add to Cart</Link>
          </button>
          }
        </div>
      </div>
    </div>
  </div>
</div>
:
<Loader />
}
    </section>
  );
};

export default ProductPage;
