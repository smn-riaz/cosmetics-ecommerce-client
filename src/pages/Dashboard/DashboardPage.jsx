import React from 'react'
import DashboardLeft from '../../components/DashboardLeft'

const DashboardPage = () => {
  return (
    <main>
    <section className="flex justify-start space-x-10">
      <div>
        <DashboardLeft />
      </div>

      
      <div className='w-full space-y-6'>
        <div className='flex p-4'>
          <div className='bg-gray-200 text-center p-4 rounded-lg m-1 w-full'>
            <h1 className='text-2xl font-raleway'>Total Customer</h1>
            <h3 className='font-nunito text-3xl font-medium'>50</h3>
          </div>
          <div className='bg-pink-200 text-center p-4 rounded-lg m-1 w-full'>
            <h1 className='text-2xl font-raleway'>Total Products</h1>
            <h3 className='font-nunito text-3xl font-medium'>50</h3>
          </div>
          <div className='bg-sky-200 text-center p-4 rounded-lg m-1 w-full'>
            <h1 className='text-2xl font-raleway'>Total Admins</h1>
            <h3 className='font-nunito text-3xl font-medium'>50</h3>
          </div>
          <div className='bg-green-200 text-center p-4 rounded-lg m-1 w-full'>
            <h1 className='text-2xl font-raleway'>Total Orders</h1>
            <h3 className='font-nunito text-3xl font-medium'>50</h3>
          </div>
          <div className='bg-lime-200 text-center p-4 rounded-lg m-1 w-full'>
            <h1 className='text-2xl font-raleway'>Total Money</h1>
            <h3 className='font-nunito text-3xl font-medium'>$50</h3>
          </div>
        </div>

        <div className='flex p-4'>
          <div className='bg-orange-200 text-center p-4 rounded-lg m-1 w-1/3 space-y-4'>
              <h1 className='text-2xl font-raleway'>Best Selling</h1>
              <h3 className='font-nunito text-3xl font-medium'>50</h3>
              <button className='bg-white px-4 py-1 font-nunito text-lg'>Details</button>
            </div>
          <div className='bg-amber-200 text-center p-4 rounded-lg m-1 w-1/3 space-y-4'>
              <h1 className='text-2xl font-raleway'>Pending Delivery</h1>
              <h3 className='font-nunito text-3xl font-medium'>50</h3>
              <button className='bg-white px-4 py-1 font-nunito text-lg'>Details</button>
            </div>
          <div className='bg-indigo-200 text-center p-4 rounded-lg m-1 w-1/3 space-y-4'>
              <h1 className='text-2xl font-raleway'>Delivery Done</h1>
              <h3 className='font-nunito text-3xl font-medium'>50</h3>
              <button className='bg-white px-4 py-1 font-nunito text-lg'>Details</button>
            </div>
        </div>
      </div>
     
    </section>
  </main>
  )
}

export default DashboardPage