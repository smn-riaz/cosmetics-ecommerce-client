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
    const phoneRef = useRef()
    const orderId = Date.now()
    const totalPayment = cartItems.reduce((n, { totalPrice }) => n + totalPrice, 0) + 5

const handlePlaceOrder = (e) => {
  e.preventDefault()
    if(agree) {
      const orderDetailsForOrder = {
        orderId,
        orderDate: new Date().toLocaleDateString(),
        email: "",
        phone: "",
        shippingAddress: {city:cityRef.current.value, houseNum:houseNumRef.current.value, zip:zipRef.current.value},
        orderProducts:[],
        deliveryStatus:"Pending",
        totalPayment
      }
      const orderDetailsForCustomer = [{
        orderId,
        orderDate: new Date().toLocaleDateString(),
        orderProducts:cartItems,
        totalPayment,
        shippingAddress: {city:cityRef.current.value, houseNum:houseNumRef.current.value, zip:zipRef.current.value},
      }]

      console.log(orderDetailsForCustomer)
      
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
                name=""
                value={name[0]}
                id=""
                placeholder="First name*"
                className="border-[1px] border-secondaryLight w-full mr-2 p-2 focus:outline-none"
              />
              <input
                type="text"
                name=""
                value={name[1]}
                id=""
                placeholder="Last name*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                ref={cityRef}
                placeholder="Town/City*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                ref={houseNumRef}
                placeholder="House number*"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="number"
                ref={zipRef}
                placeholder="ZIP Code"
                className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                ref={phoneRef}
                value={phone}
                maxLength={14}
                placeholder="Phone*"
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

              />
            </div>
          </div>
        </div>

        <div className="px-4 space-y-12">
          <div>
            <div>
              <h1 className="uppercase text-xl font-raleway font-medium">
                Your Order
              </h1>
            </div>
            <div>Oders list : {order?.length}</div>
          </div>

          <div className="font-nunito p-0 space-y-4">
            <div>
              <h1 className="uppercase text-xl font-raleway font-medium">
                Cart Summary :
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
