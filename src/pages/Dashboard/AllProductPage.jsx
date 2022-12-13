import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlinePending } from 'react-icons/md';
import DashboardLeft from '../../components/DashboardLeft';
import { serverLink } from '../../constants';

const AllProductPage = () => {
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
  
  return (
    <main>
    <section className="flex justify-start space-x-10">
      <div>
        <DashboardLeft />
      </div>
      <div className="flex flex-col space-y-14">
          <div>
          <h3 className="text-center font-raleway text-3xl font-medium text-secondary underline underline-offset-8 pb-4">Products Collection</h3>
        <table className=" ">
          <thead className=''>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Instock</th>
              <th>Tags</th>
              <th>Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=" ">
            {products.map((product) => {
              const { image, id, price, title, instock, tags, category, _id } = product;
              return (
                <tr className="font-nunito text-lg my-2 hover:bg-secondaryLight duration-500">
                  <td>
                    <div  className="my-3 mx-4"><img src={image} alt={title} className="h-[80px] w-[80px]"/></div>
                  </td>
                  <td>
                    <div  className="my-3 mx-4"><h3>{id}</h3></div>
                  </td>
                  <td>
                    <div  className="my-3 mx-4 capitalize"><h3>{title}</h3></div>
                  </td>
                  <td>
                    <div className="my-3 mx-4"><h3>{price}</h3></div>
                  </td>
                  <td>
                    <div className="my-3 mx-4"><h3>{instock}</h3></div>
                  </td>
                  
                  <td>
                    <div className="my-3 mx-4"><h3>{category}</h3></div>
                  </td>
                  <td>
                    <div className="my-3 mx-4"><button className="bg-secondary w-[30px] h-[30px] font-semibold text-md rounded-full ">{tags.length}</button></div>
                  </td>
                  <td>
                    <div className="my-3 mx-6 text-xl cursor-pointer"><h3><MdOutlinePending /></h3></div>
                  </td>
                  <td>
                    <div className="my-3 mx-6 text-xl cursor-pointer"><h3><AiOutlineDelete /></h3></div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
          </div>
      </div>
    </section>
  </main>
  )
}

export default AllProductPage