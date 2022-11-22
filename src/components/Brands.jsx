import React from 'react'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brandbg from '../assets/brandbg.jpg'


const Brands = () => {
  return (
    <section style={{
      background: `url(${brandbg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}  className="p-4">
      <div className='flex justify-around items-center'>
          <img src={brand1} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
          <img src={brand2} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
          <img src={brand3} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
          <img src={brand4} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
          <img src={brand5} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
          <img src={brand6} alt="Trusted Brand" className='opacity-80 hover:opacity-100'/>
      </div>
    </section>
  )
}

export default Brands