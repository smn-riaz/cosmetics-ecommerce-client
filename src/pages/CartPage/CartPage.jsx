import React, { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { cartActions } from "../../store/cart-slice";
import styles from "../../styles/styles";
import Button from "../../components/Button";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <main className="">
      {
        cartItems.length>0?
        <section className="relative z-20">
        <div className="flex justify-between items-start md:p-8 space-x-10 relative ">
          <div className="w-full">
            <table className="w-full border-collapse">
              <thead className="text-left">
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Id</th>
                  <th>Instock</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => {
                  const {
                    image,
                    title,
                    id,
                    price,
                    instock,
                    totalPrice,
                    quantity,
                  } = cart;
                  return (
                    <tr className="duration-500 h-[140px] m-6 border-b-[1px] border-secondaryLight last:border-0">
                      <td>
                        <div>
                          <p
                            className="h-[25px]  w-[25px] rounded-full flex justify-center items-center  cursor-pointer hover:bg-gray-500 duration-300"
                            onClick={() => handleDeleteFromCart(cart.id)}
                          >
                            <MdDeleteForever size={20} />
                          </p>
                        </div>
                      </td>
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
                        <div className="flex justify-start flex-1 py-4">
                          <div className="flex justify-around items-center space-x-3">
                            <button
                              className="cursor-pointer bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                              onClick={() => {
                                if (quantity > 0) {
                                }
                              }}
                            >
                              <AiOutlineMinus size={18} />
                            </button>
                            <button className="bg-secondary w-[40px] h-[40px]  text-md rounded-full">
                              {quantity}
                            </button>
                            <button
                              className="cursor-pointer  bg-white fs-4 fw-bold border-[0.3px] border-black w-[30px] h-[30px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                              onClick={() => {
                                if (quantity < cart.instock) {
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
                            <span className="">${quantity * cart.price}</span>
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-start min-w-fit py-8">
            <div className="font-nunito p-0 space-y-4">
              <div>
                <h1 className="uppercase text-xl font-raleway font-medium">
                  Cart Summary
                </h1>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg">Total Cost: </h3>
                <h3 className="text-lg">Shipping Cost: $30</h3>
                <h3 className="text-lg">
                  Total: <span className="font-semibold">$30</span>
                </h3>
              </div>
              <div>
                <Button title="Proceed to checkout" goLink="/checkout" />
              </div>
            </div>
          </div>
        </div>
      </section>
      :
      <div className="flex justify-center items-center py-8">
        <h2 className="font-nunito text-4xl">No Item is Carted</h2>
      </div>
      }
    </main>
  );
};

export default CartPage;
