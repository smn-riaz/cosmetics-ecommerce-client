import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import styles from "../../styles/styles";
import {BsCart4} from 'react-icons/bs'
import { useRef } from "react";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
import CartItems from "../../components/CartItems";

const CheckoutPage = () => {
  const { user } = useContext(ProductsContext);
  const cartItems = useSelector((state) => state.cart.items);
  const userItem = useSelector((state) => state.user.user);

  const [agree, setAgree] = useState(false)
  
  // var retrievedObject = localStorage.getItem("user");
  // const { name, email, phone, city, houseNum, zip, order } =
  //   JSON.parse(retrievedObject) || user;
  const { name, email, phone, order } = user
    const cityRef = useRef()
    const houseNumRef = useRef()
    const zipRef = useRef()
    const shippingPhoneRef = useRef()
    const orderId = Date.now()
    const totalPayment = cartItems.reduce((n, { totalPrice }) => n + totalPrice, 0) + 5

const handlePlaceOrder = (e) => {
  e.preventDefault()
  const houseNum = houseNumRef.current.value
  const zip = zipRef.current.value
  const city = cityRef.current.value
  const shippingPhone = shippingPhoneRef.current.value
  const allValue = agree && houseNum && city && zip && name && email && phone && cartItems.length>0
  
    if(allValue) {
      const orderDetailsForOrder = {
        orderId,
        orderDate: new Date().toLocaleDateString(),
        email,
        phone,
        shippingAddress: {city, houseNum, zip},
        orderProducts:cartItems,
        deliveryStatus:"Pending",
        totalPayment,
        shippingPhone
      }
      const orderDetailsForCustomer = {
        orderId,
        orderDate: new Date().toLocaleDateString(),
        orderProducts:cartItems,
        totalPayment,
        shippingAddress: {city, houseNum, zip},
        shippingPhone
      }

      
   
      
    }

    
}



  return (
    <main>
      <form className="sm:flex justify-between items-start p-8" onSubmit={handlePlaceOrder}>
        <div className="flex-1 px-4">
          <h2 className="font-nunito text-3xl pb-4">Billing Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <input
                type="text"
                value={name[0].toUpperCase()}
                placeholder="First name*"
                className="border-[1px] border-secondaryLight w-full mr-2 p-2 focus:outline-none"
                readOnly
              />
              <input
                type="text"
                value={name[1].toUpperCase()}
                placeholder="Last name*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                readOnly
              />
            </div>
            <div>
              <input
                type="text"
                ref={cityRef}
                placeholder="Town/City*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                ref={houseNumRef}
                placeholder="House number*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="number"
                ref={zipRef}
                placeholder="ZIP Code"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                ref={shippingPhoneRef}
                value={+phone}
                maxLength={14}
                placeholder="Shipping Phone No*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                placeholder="Email address*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
                readOnly
              />
            </div>
          </div>

          <div className="py-10">
            <div>
              <h1 className="uppercase text-xl font-raleway font-medium">
                Your Checkout Products
              </h1>
            </div>
            <div>
            {cartItems.length>0 && 
            <div className="">
              {(cartItems).map(cart => <CartItems cart={cart} />)}
            </div> 
            }
            </div>
          </div>
        </div>

        <div className="px-4 space-y-12">
          <div className="font-nunito p-0 space-y-4">
            <div>
              <h1 className="uppercase text-xl font-raleway font-medium">
                Order Summary :
              </h1>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg">
                Product Cost:{" "}
                <span className="font-semibold">
                  ${totalPayment-5}
                </span>
              </h3>
              <h3 className="text-lg">
                Shipping Cost: <span className="font-semibold">$5</span>
              </h3>
              <h3 className="text-lg">
                Total:{" "}
                <span className="font-semibold">
                  $ {totalPayment}
                </span>
              </h3>
              <div>
                <Link to="/cart">
                  <button className="cursor-pointer p-1 w-fit border-[0.5px] hover:bg-gray-700 font-nunito bg-white hover:text-primary duration-500 border-black xl:text-2xl flex">
                    <BsCart4 /><span className="ml-1">Watch cart items</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="uppercase text-xl font-raleway font-medium">
                Payment Method
              </h1>
            </div>
            <div>Stripe</div>
            <h2>Will be added as soon as possible.</h2>
          </div>

          <div className="flex">
            <input type="checkbox" onClick={()=>setAgree(!agree)} name="" id="" />
            <p className="px-1">
              <span className="font-semibold">I have read and agree</span> to
              the website terms and conditions*
            </p>
          </div>

          <div>
            <button className="cursor-pointer px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6" type={agree?"submit":""}>
          {agree? "Confirm order" : "Agree first" }
        </button>
          </div>

        </div>
      </form>
    </main>
  );
};

export default CheckoutPage;
