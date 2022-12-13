import React from 'react'
import Footer from '../../components/Footer'

const DeliveryPage = () => {
  return (
    <main className='h-fit md:min-h-screen relative'>
        <section className='text-center'>
            <h2 className='text-4xl font-nunito p-6'>Super Fast Devlivery</h2>
            <p className='font-raleway text-xl text-secondary'>This feature will be added as soon as possible.</p>
        </section>
        <section className='flex flex-col justify-between md:absolute md:bottom-0 w-full'>
            <Footer />
        </section>
    </main>
  )
}

export default DeliveryPage