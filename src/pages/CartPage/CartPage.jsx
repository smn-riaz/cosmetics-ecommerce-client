import React, { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { cartActions } from "../../store/cart-slice";
import styles from "../../styles/styles";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleDeleteFromCart = (id) => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <Navbar />
      <main>
        <div className="flex justify-between items-start md:p-12 space-x-10">
          <div className="w-full">
            {cartItems.map((cart) => (
              <div className="flex justify-start items-center  bg-secondaryLight duration-500 rounded-xl w-full m-2">
                <div className="flex justify-start items-center p-2">
                  <img
                    src={cart.image}
                    alt=""
                    className="rounded-full h-[200px] w-[200px]"
                  />
                </div>

                <div className="space-y-4 p-4">
                  <h3 className="text-xl font-semibold text-black uppercase">
                    {cart.title}
                  </h3>
                  <div className="space-y-2">
                    <h5 className="text-lg font-nunito">
                      ID: <span className="font-semibold">{cart.id}</span>
                    </h5>
                    <p className="text-lg font-nunito">
                      Price:{" "}
                      <span className="font-semibold">${cart.price}</span>
                    </p>
                    <p className="text-lg font-nunito">
                      Instock:{" "}
                      <span className="font-semibold">{cart.instock}</span>
                    </p>


                    <div className="flex justify-start flex-1 py-4">
                      <div className="flex justify-between space-x-3">
                        <button
                          className="cursor-pointer bg-white fs-4 fw-bold border-[0.3px] border-black w-[40px] h-[40px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                          onClick={() => {
                            if (quantity > 0) {
                              setQuantity(quantity - 1);
                            }
                          }}
                        >
                          <AiOutlineMinus size={18} />
                        </button>
                        <button className="bg-secondary w-[40px] h-[40px] font-semibold text-lg rounded-full">
                          {quantity}
                        </button>
                        <button
                          className="cursor-pointer  bg-white fs-4 fw-bold border-[0.3px] border-black w-[40px] h-[40px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                          onClick={() => {
                            if (quantity < cart.instock) {
                              setQuantity(quantity + 1);
                            }
                          }}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>

                      <div>
                        <p className="text-lg font-semibold font-nunito">
                          {/* <span className="">${totalPrice}</span> */}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg font-nunito">
                      Quantity:{" "}
                      <span className="font-semibold">{quantity}</span>
                    </p>
                    <p className="text-lg font-nunito">
                      Total Price:{" "}
                      <span className="font-semibold">${quantity*cart.price}</span>
                    </p>

                    <div className="flex justify-between">
                      <p className="h-[35px]  w-[35px] rounded-full flex justify-center items-center bg-secondary cursor-pointer hover:bg-slate-400 duration-300">
                        <FaShippingFast size={20} />
                      </p>
                      <p
                        className="h-[35px]  w-[35px] rounded-full flex justify-center items-center bg-secondary cursor-pointer hover:bg-slate-400 duration-300"
                        onClick={() => handleDeleteFromCart(cart.id)}
                      >
                        <AiFillDelete size={20} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full flex justify-end">
            <div>
              <h1 className="uppercase text-xl">Cart Summary</h1>
              <h3>Total Cost: </h3>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default CartPage;
