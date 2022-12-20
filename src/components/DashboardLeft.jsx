import React from "react";
import { MdOutlineDashboard, MdPeople } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import {ImHome} from 'react-icons/im'
import { GrDocumentStore } from "react-icons/gr";
import { AiFillFolderAdd } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const DashboardLeft = () => {
  const location = useLocation().pathname.split("/")
  const path = location[location.length - 1];
  // allCustomer
  return (
    <main className="relative md:min-w-[180px]">
      <div className="flex flex-col bg-secondaryLight md:pl-4">
        <Link to="/">
          <div className={path===''?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <ImHome title="Home"/>
            <h3 className="hidden md:inline">Home</h3>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className={path==='dashboard'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <MdOutlineDashboard title="Dashboard"/>
            <h3 className="hidden md:inline">Dashboard</h3>
          </div>
        </Link>
        <Link to="/dashboard/allCustomer">
          <div className={path==='allCustomer'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <MdPeople title="All Customer"/>
            <h3 className="hidden md:inline">All Customer</h3>
          </div>
        </Link>
        <Link to="/dashboard/allOrder">
          <div className={path==='allOrder'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <TbTruckDelivery title="All Order"/>
            <h3 className="hidden md:inline">All Order</h3>
          </div>
        </Link>
        <Link to="/dashboard/allProduct">
          <div className={path==='allProduct'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <GrDocumentStore title="All Product"/>
            <h3 className="hidden md:inline">All Product</h3>
          </div>
        </Link>
        <Link to="/dashboard/addProduct">
          <div className={path==='addProduct'?"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer rounded-l-3xl bg-white px-4 py-2 duration-500":"flex justify-start items-center space-x-1 font-nunito font-medium text-lg my-4 cursor-pointer hover:rounded-l-3xl hover:bg-white px-4 py-2 duration-500"}>
            <AiFillFolderAdd title="Add Product"/>
            <h3 className="hidden md:inline">Add Product</h3>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default DashboardLeft;
