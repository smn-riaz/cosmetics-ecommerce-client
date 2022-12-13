import React from "react";
import { MdOutlineDashboard, MdPeople } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { GrDocumentStore } from "react-icons/gr";
import { AiFillFolderAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const DashboardLeft = () => {
  const location = useLocation().pathname.split("/")
  const path = location[location.length - 1];
  // allCustomer
  return (
    <main className="relative min-w-[180px]">
      <div className="flex flex-col bg-secondaryLight md:h-screen pl-4">
        <Link to="/dashboard">
          <div className={path==='dashboard'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <MdOutlineDashboard />
            <h3>Dashboard</h3>
          </div>
        </Link>
        <Link to="/dashboard/allCustomer">
          <div className={path==='allCustomer'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <MdPeople />
            <h3>All Customer</h3>
          </div>
        </Link>
        <Link to="/dashboard/allOrder">
          <div className={path==='allOrder'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <TbTruckDelivery />
            <h3>All Order</h3>
          </div>
        </Link>
        <Link to="/dashboard/allProduct">
          <div className={path==='allProduct'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <GrDocumentStore />
            <h3>All Product</h3>
          </div>
        </Link>
        <Link to="/dashboard/addProduct">
          <div className={path==='addProduct'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <AiFillFolderAdd />
            <h3>Add Product</h3>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default DashboardLeft;
