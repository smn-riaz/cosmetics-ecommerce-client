import React from 'react'

const CartItems = ({cart}) => {
  return (
    <div className="flex justify-between items-center my-2 w-fit sm:min-w-[300px] w-fit bg-secondaryLight space-x-2 rounded-lg border-[1px] border-secondary">
                <div className="flex justify-start items-center">
                  <div>
                    <img src={cart.image} alt="" className="h-[50px] w-[50px] rounded-l-lg"/>
                  </div>
                  <div className="font-nunito text-md font-semibold p-2">
                    <h3>{cart.title}</h3>
                  </div>
                </div>
               <div className="flex justify-around items-center">
                <div className="font-nunito text-md text-center font-semibold p-2">
                    <h3 className="bg-white h-[25px] w-[25px] rounded-full border-[0.5px] border-secondary">{cart.quantity}</h3>
                  </div>
                  <div className="font-nunito text-md font-semibold p-2">
                  <h3>${cart.totalPrice}</h3>
                  </div>
               </div>
              </div>
  )
}

export default CartItems