import React from 'react'
import loader from '../assets/loader.gif'

const Loader = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <img src={loader} alt="" className='h-[300px]'/>
    </div>
  )
}

export default Loader