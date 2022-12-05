import React from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import styles from "../../styles/styles";

const CheckoutPage = () => {
  return (
    <main>
      <section className="flex justify-between items-start p-8">
        <div className="flex-1 px-4">
          <h2 className="font-nunito text-3xl pb-4">Billing Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <input type="text" name="" id="" placeholder="First name*" className="border-[1px] border-secondaryLight w-full mr-2 p-2 focus:outline-none"/>
              <input type="text" name="" id="" placeholder="Last name*" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none"/>
            </div>
            <div>
              <input type="text" placeholder="Company name" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
            <div>
              <input type="text" placeholder="Town/City" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
            <div>
              <input type="text" placeholder="House number" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
            <div>
              <input type="number" placeholder="ZIP Code" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
            <div>
              <input type="number" placeholder="Phone*" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
            <div>
              <input type="email" placeholder="Email address*" className="border-[1px] border-secondaryLight w-full  p-2 focus:outline-none" />
            </div>
          </div>
        </div>

        <div className=" px-4 space-y-12">
          <div>
                <div>
                    <h1 className="uppercase text-xl font-raleway font-medium">
                        Your Order
                    </h1>
                </div>
            <div>Oders list</div>
          </div>

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
          </div>

          <div>
            <div>
                <h1 className="uppercase text-xl font-raleway font-medium">
                    Payment Method
                </h1>
            </div>
            <div>Stripe</div>
          </div>


        <div className="flex">
            <input type="checkbox" name="" id="" /> <p className="px-1"><span className="font-semibold">I have read and agree</span> to the website terms and conditions*</p>
        </div>

        <div>
            <Button title="Place order" goLink="/profile" />
        </div>


        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;
