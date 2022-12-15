import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlinePending } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DashboardLeft from "../../components/DashboardLeft";
import Loader from "../../components/Loader";
import { serverLink } from "../../constants";

const AllCustomerPage = () => {
  const navigate = useNavigate()
  const [customers, setCustomers] = useState([]);
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

  const handleDeleteCustomer = (id) => {
    fetch(`${serverLink}/customer/deleteCustomer`, {
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

  return (
    <main>
      <section className="flex justify-start space-x-10">
        <div>
          <DashboardLeft />
        </div>
        {
          (customers.length || admins.length) ?
          <div className="flex flex-col space-y-14">
            {
              admins.length && <div>
              <h3 className="text-center font-raleway text-3xl font-medium text-secondary underline underline-offset-8 pb-4">Admins</h3>
          <table className=" ">
              <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Role</th>
              </tr>
              </thead>
              <tbody className=" ">
              {admins.map((admin) => {
                  const { name, email, _id, phone,role, } = admin;
                  return (
                  <tr className="font-nunito text-lg my-5 hover:bg-secondaryLight duration-500">
                      <td>
                      <div  className="my-3 mx-4 capitalize"><h3>{name[0]} {name[1]}</h3></div>
                      </td>
                      <td>
                      <div className="my-3 mx-4"><h3>{email}</h3></div>
                      </td>
                      <td>
                      <div className="my-3 mx-4"><h3>{phone}</h3></div>
                      </td>
                      <td>
                      <div className="my-3 mx-6 text-xl cursor-pointer"><h3><MdOutlinePending /></h3></div>
                      </td>
                      <td>
                      <div className="my-3 mx-6 text-xl cursor-pointer"><h3><AiOutlineDelete /></h3></div>
                      </td>
                      <td>
                      <div className="my-3 mx-6 text-lg cursor-pointer"><h3 className="rounded-xl bg-secondary px-1 font-semibold">{role}</h3></div>
                      </td>
                  </tr>
                  );
              })}
              </tbody>
          </table>
      </div>
            }

            {customers.length && 
            <div>
            <h3 className="text-center font-raleway text-3xl font-medium text-secondary underline underline-offset-8 pb-4">Customers</h3>
          <table className=" ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Cart</th>
                <th>Order</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className=" ">
              {customers.map((customer) => {
                const { name, email, cart, order, _id, phone } = customer;
                return (
                  <tr className="font-nunito text-lg my-5 hover:bg-secondaryLight duration-500">
                    <td>
                      <div  className="my-3 mx-4 capitalize"><h3>{name[0]} {name[1]}</h3></div>
                    </td>
                    <td>
                      <div className="my-3 mx-4"><h3>{email}</h3></div>
                    </td>
                    <td>
                      <div className="my-3 mx-4"><h3>{phone}</h3></div>
                    </td>
                    <td>
                      <div className="my-3 mx-4"><button className="bg-secondary w-[30px] h-[30px] font-semibold text-md rounded-full ">{cart.length}</button></div>
                    </td>
                    <td>
                      <div className="my-3 mx-4"><button className="bg-secondary w-[30px] h-[30px] font-semibold  text-md rounded-full ">{order.length}</button></div>
                    </td>
                    <td>
                      <div className="my-3 mx-6 text-xl cursor-pointer"><h3><MdOutlinePending /></h3></div>
                    </td>
                    <td>
                      <div className="my-3 mx-6 text-xl cursor-pointer"><button onClick={() => handleDeleteCustomer(_id)}><AiOutlineDelete/></button></div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
            </div>}
        </div>
        :
        <div>
          <Loader />
        </div>
        }
      </section>
    </main>
  );
};

export default AllCustomerPage;
