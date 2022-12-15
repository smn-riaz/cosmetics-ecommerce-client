import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { prototype } from 'react-modal';
import { Navigate, useNavigate } from 'react-router-dom';
import DashboardLeft from '../../components/DashboardLeft';
import Loader from '../../components/Loader';
import { serverLink } from '../../constants';

const AddProductPage = () => {
  const navigate = useNavigate()
  const productTypes = ["prefectconcealer","bodycare","mackupequipment","awesomesoap"]
  const [productType, setProductType] = useState("prefectconcealer")
  const [productCategory, setProductCategory] = useState("prefectconcealer")
  const [image, setImage] = useState("")
  const titleRef = useRef()
  const idRef = useRef()
  const priceRef = useRef()
  const instockRef = useRef()
  const tagsRef = useRef()
  const descriptionRef = useRef() 
  const imageRef = useRef()
 

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

const imageStorageKey = "df5c0bc096803d7c7e54f1a1e3895f22"


const handleSubmit = (e) => {
e.preventDefault()

  const img = imageRef.current.files[0]
  const formData = new FormData()
  formData.append('image',img)
  const url =  `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
  fetch(url, {
    method:'POST',
    body: formData
  })
  .then(res => res.json())
  .then(result => {
    setImage(result.data.url)
  })

  const tags = tagsRef.current.value.split(" ")
  const description = descriptionRef.current.value.split("/")


  if(image){
    const productData = {
      id:idRef.current.value,
      title: titleRef.current.value,
      image,
      price:parseInt(priceRef.current.value),
      instock:parseInt(instockRef.current.value),
      tags,
      producttype:productType,
      description,
      category: productCategory
    }

    fetch(`${serverLink}/product/addProduct`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.message){
          alert("Product added successfully")
          navigate('/dashboard')
        }
      })
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
                htmlFor="id"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Product ID :</span>
                <input
                  type="text"
                  ref={idRef}
                  name=""
                  id="id"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                required
                />{" "}
              </label>
              <label
                htmlFor="title"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Title :</span>
                <input
                  type="text"
                  ref={titleRef}
                  name=""
                  id="title"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                required
                />{" "}
              </label>
             
            </div>


            <div className="pb-4 flex justify-between space-x-3 w-full">
              <label
                htmlFor="price"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Price :</span>
                <input
                  type="number"
                  ref={priceRef}
                  min={10}
                  name=""
                  id="price"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                 required
                />{" "}
              </label>
              <label
                htmlFor="instock"
                className='w-full'
              >
                <span className="text-md font-semibold font-nunito">Instock :</span>
                <input
                  type="number"
                  min={1}
                  ref={instockRef}
                  name=""
                  id="instock"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>

            <div className="pb-4 space-x-1 w-full">
              
              <label
                htmlFor="image"
              >
                <span className="text-md font-semibold font-nunito">Image <small>(1000px * 1000px) recommended</small>: </span>
                <input
                  type="file"
                  ref={imageRef}
                  name=""
                  id="image"
                  className="min-w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
               
                />{" "}
              </label>
             
            </div>


            <div className="pb-4 flex justify-between space-x-3 w-full">
              <label
                htmlFor=""
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
                <span className="text-md font-semibold font-nunito">Description(2) use / :</span>
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