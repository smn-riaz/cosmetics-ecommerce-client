import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import DashboardLeft from '../../components/DashboardLeft';
import { serverLink } from '../../constants';
import Loader from "../../components/Loader";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../../App';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const AllOrderPage = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const {user} = useContext(ProductsContext)
  const [status, setStatus] = useState("Pending")

  useEffect(() => {
    axios.get(`${serverLink}/order/allOrder`)
    .then(
      (res) => {
      setOrders(res.data.data);
    
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const handleDeleteOrder = (id) => {
    fetch(`${serverLink}/order/deleteOrder`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.data){
          navigate("/dashboard")
        }
      })
  }


  const handleStatus = (orderId, email) => {
    if(status === "Done" && orderId){
      fetch(`${serverLink}/customer/updateOrder`, {
        method:"POST",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({ orderId , email,  deliveryStatus:status})
      })
      .then(res => res.json())
      .then(data => {
        if(data.data){
          fetch(`${serverLink}/order/updateOrder`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ orderId ,  deliveryStatus:status}),
          })
            .then((res) => res.json())
            .then(data => console.log(data.data))
        }
      })
    }
  }
  

  

  return (
    <main>
 {user.role === 'admin' ?
    <section className="flex justify-start space-x-10">
    <div>
      <DashboardLeft />
    </div>

    {
      orders.length?
      <div className="flex flex-col space-y-14 w-screen overflow-x-scroll sm:w-auto">
        <div>
        <h3 className="text-center font-raleway text-3xl font-medium text-secondary underline underline-offset-8 pb-4">Orders Collection</h3>
      <table className=" ">
        <thead className=''>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Products</th>
            <th>Payment</th>
            <th>Delivery</th>
            <th>Activity</th>
          </tr>
        </thead>
        <tbody className=" ">
          {orders.map((order) => {
            const { orderId, orderDate, email,_id, phone, shippingAddress, orderProducts, deliveryStatus, totalPayment, shippingPhone } = order;
            return (
              <tr className="font-nunito my-2 hover:bg-secondaryLight font-medium duration-500 text-md">
                <td>
                  <div  className="my-3 mx-4"><h3>{orderId}</h3></div>
                </td>
                <td>
                  <div  className="my-3 mx-4"><h3>{orderDate.date} , <span className='text-xs'>{orderDate.time}</span></h3></div>
                </td>
                <td>
                  <div  className="my-3 mx-4"><h3>{email}</h3></div>
                </td>
                <td>
                  <div className="my-3 mx-4"><h3>{shippingPhone}</h3></div>
                </td>
                <td>
                  <div className="my-3 mx-4"><h3>{shippingAddress.houseNum}, {shippingAddress.city}, {shippingAddress.zip}</h3></div>
                </td>
                <td>
                  <div className="my-3 mx-4"><button className="bg-secondary w-[30px] h-[30px] font-semibold text-md rounded-full ">{orderProducts.length}</button></div>
                </td>
                <td>
                  <div className="my-3 mx-4"><h3>${totalPayment}</h3></div>
                </td>
                <td>
                  <div className="my-3 mx-4">
                  <div className="size-container col-6">
            {
              deliveryStatus==="Pending"?
              <select className="bg-gray-300 focus:outline-none"
              name="status"
              id="status"
              onChange={(e) => setStatus(e.target.value)}
             onClick={() => handleStatus(orderId, email)}
            >
                <option value={deliveryStatus}>{deliveryStatus}</option>
                <option value="Done">Done</option>

            </select>
            :
            <select className="bg-gray-300 focus:outline-none"
              name="status"
              id="status"
            >
                <option value={deliveryStatus}>{deliveryStatus}</option>

            </select>
            }
          </div>
                  </div>
                </td>
                <td>
                  <div className="my-3 mx-6 text-xl cursor-pointer"><h3 onClick={() => handleDeleteOrder(_id)}><AiOutlineDelete /></h3></div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    </div>
    :
    <div>
      <Loader />
    </div>
    }
  </section>
  :
  <NotFoundPage />
  }
  </main>
  )
}

export default AllOrderPage