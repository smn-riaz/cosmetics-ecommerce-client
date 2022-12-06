import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../App";
import profile from '../../assets/profile.png'
import styles from "../../styles/styles";

const ProfilePage = () => {
  const {user} = useContext(ProductsContext)
  const {name, email, cart, order, role, city, houseNum, zip, phone} = user
  return (
    <main className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <section className="flex justify-around">
        <div className="border-2 p-4 space-y-4">
          <div className="flex justify-center">
            <img src={profile} alt="" className="h-[100px]"/>
          </div>
          <h3 className="text-center font-nunito font-semibold text-2xl"><span className="capitalize">{name[0][0]}</span>. <span className="capitalize">{name[1]}</span></h3>
          <div className="font-nunito font-medium text-lg space-y-3">
            <p>Email : <span className="font-semibold">{email}</span></p>
            {phone && <p>Phone : <span className="font-semibold">{phone}</span></p>}
            <p>Role : <span className="font-semibold">{role}</span></p>
            {city && <p>City : <span className="font-semibold">{city}</span></p>}
            {houseNum &&  <p>House No : <span className="font-semibold">{houseNum}</span></p>}
            {zip && <p>ZIP : <span className="font-semibold">{zip}</span></p>}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-center font-nunito font-semibold text-2xl">Cart Summary</h3>
          
            {cart.length>0? 
            <div></div> 
            : 
            <div>
              <h5 className="text-center font-nunito text-xl">No items in Cart</h5>  
            </div>}
       
        </div>

        <div className="space-y-4">
          <h3 className="text-center font-nunito font-semibold text-2xl">Order History</h3>
          
            {order.length>0? 
            <div></div> 
            : 
            <div>
              <h5 className="text-center font-nunito text-xl">Any order hasn't been placed yet</h5>  
            </div>}
       
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
