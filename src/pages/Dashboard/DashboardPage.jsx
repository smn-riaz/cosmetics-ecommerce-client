import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../App';
import DashboardLeft from '../../components/DashboardLeft'
import { serverLink } from '../../constants';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const DashboardPage = () => {
  const [customers, setCustomers] = useState([]);
  const {user} = useContext(ProductsContext)
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    axios.get(`${serverLink}/customer/allCustomer`)
    .then(
      (res) => {
        setCustomers(res.data.data.filter((cus) => cus.role === "customer"));
        setAdmins(res.data.data.filter((cus) => cus.role === "admin"));
      },
      (error) => {
        
      }
    );
  }, []);
  
  
  const [orders, setOrders] = useState([])
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

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${serverLink}/product/allProduct`)
    .then(
      (res) => {
      setProducts(res.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const money = orders.reduce((n, {totalPayment}) => n + totalPayment, 0)
  const pendingDelivery = orders.filter(order => order.deliveryStatus === "Pending").length
  const doneDelivery = orders.filter(order => order.deliveryStatus === "Done").length
 
  

  
  return (
    <main className='h-screen'>
   {
    user.role?
    <section className="flex md:justify-start justify-between md:space-x-10">
    <div>
      <DashboardLeft />
    </div>

    
    <div className='w-full space-y-6'>
      <div className='flex-col flex md:flex-row p-4'>
        <div className='bg-gray-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-full'>
          <h1 className='text-2xl font-raleway'>Total Customer</h1>
          <h3 className='font-nunito text-3xl font-medium'>{customers.length}</h3>
        </div>
        <div className='bg-pink-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-full'>
          <h1 className='text-2xl font-raleway'>Total Products</h1>
          <h3 className='font-nunito text-3xl font-medium'>{products.length}</h3>
        </div>
        <div className='bg-sky-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-full'>
          <h1 className='text-2xl font-raleway'>Total Admins</h1>
          <h3 className='font-nunito text-3xl font-medium'>{admins.length}</h3>
        </div>
        <div className='bg-green-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-full'>
          <h1 className='text-2xl font-raleway'>Total Orders</h1>
          <h3 className='font-nunito text-3xl font-medium'>{orders.length}</h3>
        </div>
        <div className='bg-lime-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-full'>
          <h1 className='text-2xl font-raleway'>Total Money</h1>
          <h3 className='font-nunito text-3xl font-medium'>${money}</h3>
        </div>
      </div>

      <div className='flex-col flex md:flex-row p-4'>
        <div className='bg-orange-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-1/3 space-y-4'>
            <h1 className='text-2xl font-raleway'>Best Selling</h1>
            <h3 className='font-nunito text-3xl font-medium'>{orders.length}</h3>
            <button className='bg-white px-4 py-1 font-nunito text-lg'><Link to="/dashboard/allOrder">Details</Link></button>
          </div>
        <div className='bg-amber-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-1/3 space-y-4'>
            <h1 className='text-2xl font-raleway'>Pending Delivery</h1>
            <h3 className='font-nunito text-3xl font-medium'>{pendingDelivery}</h3>
            <button className='bg-white px-4 py-1 font-nunito text-lg'><Link to="/dashboard/allOrder">Details</Link></button>
          </div>
        <div className='bg-indigo-200 text-center p-4 rounded-lg m-1 w-[80%] md:w-1/3 space-y-4'>
            <h1 className='text-2xl font-raleway'>Delivery Done</h1>
            <h3 className='font-nunito text-3xl font-medium'>{doneDelivery}</h3>
            <button className='bg-white px-4 py-1 font-nunito text-lg'><Link to="/dashboard/allOrder">Details</Link></button>
          </div>
      </div>
    </div>
   
  </section>
  :
  <NotFoundPage />
   }
  </main>
  )
}

export default DashboardPage