import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { prototype } from 'react-modal';
import DashboardLeft from '../../components/DashboardLeft';
import Loader from '../../components/Loader';

const AddProductPage = () => {
  const productTypes = ["prefectconcealer","bodycare","mackupequipment","awesomesoap"]
  const [productType, setProductType] = useState("prefectconcealer")
  const [productCategory, setProductCategory] = useState("prefectconcealer")
  const titleRef = useRef()
  const idRef = useRef()
  const priceRef = useRef()
  const instockRef = useRef()
  const tagsRef = useRef()
  const descriptionRef = useRef() 
 

useEffect(()=> {
  if(productType === "prefectconcealer") {
    setProductCategory("Perfect Concealer")
  } 
  else if (productType ==="bodycare") {
    setProductCategory("Body Care")
  }
  else if (productType ==="mackupequipment") {
    setProductCategory("Mackup Equipment")
  }
  else if (productType ==="awesomesoap") {
    setProductCategory("Body Care")
  }
},[productType])


const handleSubmit = () => {
  const productData = {

  }
}

  return (
    <main>
    <section className="flex justify-start space-x-10">
      <div>
        <DashboardLeft />
      </div>

      
      <div className='flex justify-center w-full'>
      <div className="w-[550px] bg-gray-100 p-6">
          <form onSubmit={handleSubmit} >
            <div className="pb-4 flex justify-between space-x-3">
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Product ID :</span>
                <input
                  type="text"
                  ref={idRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Title :</span>
                <input
                  type="text"
                  ref={titleRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>


            <div className="pb-4 flex justify-between space-x-3 w-full">
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Price :</span>
                <input
                  type="text"
                  ref={priceRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Instock :</span>
                <input
                  type="text"
                  ref={instockRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>

            <div className="pb-4 space-x-1 w-full">
              
              <label
                htmlFor="name"
              >
                <span className="text-md font-semibold font-nunito">Image <small>(1000px * 1000px) recommended</small>: </span>
                <input
                  type="file"
                  // ref={firstNameRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>


            <div className="pb-4 flex justify-between space-x-3 w-full">
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Product Type :</span>
                  <div className="size-container col-6">
                <select className="capitalize min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                  name="status"
                  id="status"
                  onChange={(e) => setProductType(e.target.value)}
                >
                  {productTypes.map((p) => (
                    <option value={p}>{p}</option>
                  ))}
                </select>
                  </div>
              </label>
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Category :</span>
                <input
                  type="text"
                  value={productCategory}
                  readOnly
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none bg-gray-300"
               
                />{" "}
              </label>
             
            </div>



            <div className="pb-4 flex justify-between space-x-3">
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Tags(3) use space :</span>
                <input
                  type="text"
                  ref={tagsRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
              <label
                htmlFor="name"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Description(2) use space :</span>
                <textarea
                  type="text"
                  ref={descriptionRef}
                  name=""
                  id="name"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>
            
      
            
            <div className="py-4">
            <button type="submit" className=" px-6 w-fit py-2 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-4">
              Add Product
            </button>
          </div>
          </form>
          
        </div>
      </div>
     
    </section>
  </main>
  )
}

export default AddProductPage