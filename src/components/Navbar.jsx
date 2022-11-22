import React from "react";
import { BsCartCheck, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center flex-row p-8 h-12">
      <div className="flex justify-start items-center flex-1">
        <img
          src="https://g2h4v2c9.stackpathcdn.com/themes/cosmecos-new/wp-content/uploads/2021/03/logo_black.png"
          className="h-[14px]"
          alt="logo"
        />
      </div>

      <div className="flex justify-center items-center ">
        <ul className="flex flex-row justify-between items-center gap-x-6 font-raleway">
          <li className="relative group">
            <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Home
              <BsChevronDown
                className="group-hover:rotate-180 duration-300"
                size={10}
              />
            </div>
            <ul className="absolute bg-gray-800 w-[200px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-400">
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Cosmetic Shop</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Perfume Shop</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Beauty Products</li>
            </ul> 
          </li>


          <li className="relative group">
            <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Pages
              <BsChevronDown
                className="group-hover:rotate-180 duration-300"
                size={10}
              />
            </div>
            <ul className="absolute bg-gray-800 w-[200px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-200">
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">About Us</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Services</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Delivery</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Pricing Plans</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">FAQ</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Team</li>
            </ul> 
          </li>


          <li className="relative group">
            <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Products
              <BsChevronDown
                className="group-hover:rotate-180 duration-300"
                size={10}
              />
            </div>
            <ul className="absolute bg-gray-800 w-[200px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-200">
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Concealer</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Body Care</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Makeup</li>
              <li className="text-white hover:text-secondaryLight duration-300 my-3 hover:ml-3 hover:bg-gray-600 p-2">Soap</li>
            </ul> 
          </li>
          
         
          <li className="flex justify-center items-start gap-1">Contacts</li>
        </ul>
      </div>


      <div className="flex justify-center items-center flex-1">
        <ul className="flex justify-center items-center gap-6">
          <li className="flex justify-center items-center">
            <AiOutlineHeart size={22} />
          </li>
          <li className="flex justify-center items-center">
            <BsCartCheck size={22} />
          </li>
          <li className="flex justify-center items-center">
            <BsSearch size={22} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
