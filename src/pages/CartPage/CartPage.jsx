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
    fetch("http://localhost:5000/customer/addCart", {
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
          <section className="relative z-20">
            <div className="flex justify-between items-start md:p-8 space-x-10 relative ">
              <div className="w-full">
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
                        <tr className="duration-500 h-[140px] m-6 border-b-[1px] border-secondaryLight last:border-0">
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
                <div className="flex justify-center"><Button title="Continue Shopping" goLink="/product"/></div>
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
          <div className="flex justify-center items-center py-8 h-[40vh]">
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
