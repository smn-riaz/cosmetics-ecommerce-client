import React from 'react'
import prq1 from '../assets/prq1.png'
import prq2 from '../assets/prq2.png'
import prq3 from '../assets/prq3.png'
import prq4 from '../assets/prq4.png'
import brandbg from '../assets/brandbg.jpg'


const ProductQuality = () => {
  return (
    <section style={{
      background: `url(${brandbg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}  className="p-14">
      <div className='flex justify-around items-center'>
          <img src={prq1} alt="Trusted Brand" className='opacity-80 hover:opacity-100 h-[150px]'/>
          <img src={prq2} alt="Trusted Brand" className='opacity-80 hover:opacity-100 h-[150px]'/>
          <img src={prq3} alt="Trusted Brand" className='opacity-80 hover:opacity-100 h-[150px]'/>
          <img src={prq4} alt="Trusted Brand" className='opacity-80 hover:opacity-100 h-[150px]'/>
      </div>
    </section>
  )
}

export default ProductQuality