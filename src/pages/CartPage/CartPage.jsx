import React, { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { cartActions } from "../../store/cart-slice";
import styles from "../../styles/styles";
import Button from "../../components/Button";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import { useEffect } from "react";
import { serverLink } from "../../constants";
import { FaShippingFast } from "react-icons/fa";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const {user} = useContext(ProductsContext)
  // var retrievedObject = localStorage.getItem("user");
  // const { name, email} = 
  //   JSON.parse(retrievedObject) || user;
  const {name, email} = user
  

  const dispatch = useDispatch();

  const addToCartHandler = (pid) => {
    const product = cartItems.filter((prod) => prod.id === pid)[0];
    const {
      id,
      title,
      price,
      image,
      description,
      instock,
      category,
      tags,
      producttype,
    } = product;
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
  };

  const removeFromCartHandler = (pid) => {
    dispatch(cartActions.removeItemFromCart(pid));
  };

  useEffect(() => {
    fetch(`${serverLink}/customer/addCart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({cartItems, email}),
    })
      .then((res) => res.json())
      .then((data) => {
      })
  
   },[cartItems, email])

  return (
    <main className="">
      <section>
        {cartItems?.length > 0 ? (
          <section className="p-4">
            <div className="flex flex-col md:flex-row md:justify-center md:items-start  ">





              <div className="w-full hidden sm:block">
                <table className="w-full border-collapse">
                  <thead className="text-left">
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Id</th>
                      <th>Instock</th>
                      <th>Price</th>
                      <th className="text-center">Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cart, index) => {
                      const { title, id, price, quantity, instock, image, totalPrice } =
                        cart;
                      return (
                        <tr className="duration-500 h-[140px] m-6 border-b-[1px] border-secondaryLight last:border-0 flex-col sm:flex-row">
                          <td className="">
                            <div className="">
                              <img
                                src={image}
                                alt=""
                                className="rounded-full h-[100px] w-[100px]"
                              />
                            </div>
                          </td>
                          <td className="">
                            <div className="">
                              <h3 className="text-md text-black uppercase hover:text-secondary duration-500">
                                {title}
                              </h3>
                            </div>
                          </td>
                          <td>
                            <div className="">
                              {id.length > 11 ? (
                                <h5
                                  className="text-md font-nunito cursor-pointer"
                                  title={id}
                                >
                                  {id.slice(0, 10)}..
                                </h5>
                              ) : (
                                <h5 className="text-md font-nunito">{id}</h5>
                              )}
                            </div>
                          </td>
                          <td>
                            <p className="text-md font-nunito">{instock}</p>
                          </td>
                          <td>
                            <div>
                              <p className="text-md font-nunito">
                                <span className="">${price}</span>
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center flex-1 py-4">
                              <div className="flex justify-around items-center space-x-3">
                                <button
                                  className="cursor-pointer bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                                  onClick={() => {
                                    if (quantity) {
                                      removeFromCartHandler(id);
                                    }
                                  }}
                                >
                                  <AiOutlineMinus size={18} />
                                </button>
                                <button className="bg-secondary w-[40px] h-[40px] font-semibold  text-md rounded-full ">
                                  {quantity}
                                </button>
                                <button
                                  className="cursor-pointer  bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                                  onClick={() => {
                                    if (quantity < instock) {
                                      addToCartHandler(id);
                                    }
                                  }}
                                >
                                  <AiOutlinePlus />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p className="text-md font-nunito">
                                <span className="">${totalPrice}</span>
                              </p>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex justify-center my-1"><Button title="Continue Shopping" goLink="/product"/></div>
              </div>




<div className="w-[80%] flex-col justify-center items-center md:hidden">
{cartItems.map((cart) => (
              <div className="flex-col flex xs:flex-row space-x-3 justify-around items-center  bg-secondaryLight duration-500 rounded-xl w-full sm:hidden p-3">
                <div className="flex justify-start items-center">
                  <img
                    src={cart.image}
                    alt=""
                    className="rounded-full h-[100px] w-[100px]"
                  />
                </div>

                <div className="space-y-2 py-2">
                  <h3 className="text-xl font-semibold text-black uppercase">
                    {cart.title}
                  </h3>
                  <div className="space-y-2">
                    <h5 className="text-lg font-nunito">
                      ID: <span className="font-semibold"> {cart.id}</span>
                    </h5>
                    <p className="text-lg font-nunito">
                      Instock: 
                      <span className="font-semibold"> {cart.instock}</span>
                    </p>
                    <p className="text-lg font-nunito">
                      Price: {" "}
                      <span className="font-semibold"> ${cart.price}</span>
                    </p>
                    <div className="flex justify-start flex-1 py-4">
                              <div className="flex justify-around items-center space-x-3">
                                <button
                                  className="cursor-pointer bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                                  onClick={() => {
                                    if (cart.quantity) {
                                      removeFromCartHandler(cart.id);
                                    }
                                  }}
                                >
                                  <AiOutlineMinus size={18} />
                                </button>
                                <button className="bg-secondary w-[40px] h-[40px] font-semibold  text-md rounded-full ">
                                  {cart.quantity}
                                </button>
                                <button
                                  className="cursor-pointer  bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                                  onClick={() => {
                                    if (cart.quantity < cart.instock) {
                                      addToCartHandler(cart.id);
                                    }
                                  }}
                                >
                                  <AiOutlinePlus />
                                </button>
                              </div>
                            </div>
                            <div>
                              <p className="text-lg font-nunito">Total: 
                                <span className="font-semibold"> ${cart.totalPrice}</span>
                              </p>
                            </div>
                  </div>
                </div>
              </div>
            ))}
</div>





              <div className="flex justify-start min-w-fit py-8">
                <div className="font-nunito p-0 space-y-8">
                  <div>
                    <h1 className="uppercase text-xl font-raleway font-medium">
                      Cart Summary
                    </h1>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg">Product Cost: <span className="font-semibold">${cartItems.reduce((n, {totalPrice}) => n + totalPrice, 0)}</span></h3>
                    <h3 className="text-lg">Shipping Cost: <span className="font-semibold">$5</span></h3>
                    <h3 className="text-lg">
                      Total: <span className="font-semibold">${cartItems.reduce((n, {totalPrice}) => n + totalPrice, 0)+5}</span>
                    </h3>
                  </div>
                  <div>
                    <Button title="Proceed to checkout" goLink="/checkout" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex justify-center items-center py-8">
            <div className="text-center space-y-6">
            <h2 className="font-nunito text-gray-500 text-4xl">There are no items in this cart</h2>
            <div>
              <Button title="continue shopping" goLink="/product" />
            </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default CartPage;





{/* <div className="pb-6 my-2">
                
<div>
  {cartItems.map((cart, index) => {
    const { title, id, price, quantity, instock, image, totalPrice } =
      cart;
    return (
      <div className="duration-500 h-[140px] m-6 border-b-[1px] border-secondaryLight last:border-0 flex flex-col justify-between">
        <div className="">
          <div className="">
            <img
              src={image}
              alt=""
              className="rounded-full h-[100px] w-[100px]"
            />
          </div>
        </div>
        <div>
        <div className="">
          <div className="">
            <h3 className="text-md text-black uppercase hover:text-secondary duration-500">
              {title}
            </h3>
          </div>
        </div>
        <div>
          <div className="">
              <h5
                className="text-md font-nunito cursor-pointer"
                title={id}
              >
                {id}
                </h5>
          </div>
        </div>
        <div>
          <p className="text-md font-nunito">Instock: {instock}</p>
        </div>
        <div>
          <div>
            <p className="text-md font-nunito">
              Price: <span className="">${price}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between flex-1 py-4">
            <div className="flex justify-around items-center space-x-3">
              <button
                className="cursor-pointer bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                onClick={() => {
                  if (quantity) {
                    removeFromCartHandler(id);
                  }
                }}
              >
                <AiOutlineMinus size={18} />
              </button>
              <button className="bg-secondary w-[40px] h-[40px] font-semibold  text-md rounded-full ">
                {quantity}
              </button>
              <button
                className="cursor-pointer  bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                onClick={() => {
                  if (quantity < instock) {
                    addToCartHandler(id);
                  }
                }}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="text-md font-nunito">
              <span className="">${totalPrice}</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  })}
</div>
</div> */}
