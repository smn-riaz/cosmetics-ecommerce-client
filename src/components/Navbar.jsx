import React, { useState } from "react";
import { BsCartCheck, BsChevronDown, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsCross } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalQuantity);
  return (
    <nav className="flex justify-between xl:justify-around items-center flex-row p-8 h-12 w-full xl:text-3xl">
      <div className="flex justify-start xl:justify-center items-center flex-1">
        <Link to="/">
          {" "}
          <h3 className="text-4xl xl:text-6xl font-semibold font-greatvibes text-secondary">
            Cosmetics
          </h3>
        </Link>
      </div>

      <div className="sm:flex justify-center items-center hidden">
        <ul className="flex flex-row justify-between items-center gap-x-6 font-raleway xl:text-3xl cursor-pointer">
          <li className="relative group">
            <div className="flex uppercase  xl:text-3xl text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              <Link to="/">Home</Link>
            </div>
          </li>

          <li className="relative group">
            <div className="flex uppercase  xl:text-3xl text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Pages
              <BsChevronDown
                className="group-hover:rotate-180 duration-500"
                size={10}
              />
            </div>
            <ul className="absolute group-hover:z-30 bg-gray-800 w-[170px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                About Us
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                Services
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                Delivery
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                Pricing Plans
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                FAQ
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                Team
              </li>
            </ul>
          </li>

          <li className="relative group">
            <div className="flex  xl:text-3xl uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Products
              <BsChevronDown
                className="group-hover:rotate-180 duration-500"
                size={10}
              />
            </div>
            <ul className="absolute flex flex-col bg-gray-800 w-[170px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:z-30 duration-500">
              <Link
                to="/product/prefectconcealer"
                className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2"
              >
                Concealer
              </Link>
              <Link
                to="/product/bodycare"
                className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2"
              >
                Body Care
              </Link>
              <Link
                to="/product/mackupequipment"
                className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2"
              >
                Makeup
              </Link>
              <Link
                to="/product/awesomesoap"
                className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2"
              >
                Soap
              </Link>
            </ul>
          </li>

          <li className="flex justify-center uppercase font-medium items-start gap-1 xl:text-3xl">
            Contacts
          </li>
        </ul>
      </div>

      <div className="sm:flex justify-end items-center flex-1 hidden">
        <ul className="flex justify-center items-center space-x-8 cursor-pointer">
          <li>
            <Link to="/cart" className="flex justify-center items-center">
              <BsCartCheck size={25} />
              {totalItems > 0 && (
                <sup className="text-lg font-bold font-raleway text-secondary">
                  {totalItems}
                </sup>
              )}
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <BsSearch size={25} />
          </li>
          <li className="flex justify-center items-center">
            <Link to="/login">
              <CgProfile size={25} />
            </Link>
          </li>
        </ul>
      </div>

      <div className="sm:hidden relative">
        {!toggleMenu && (
          <GiHamburgerMenu
            color=""
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="fixed top-0 right-0 overflow-y-hidden w-[100%] h-[100%] bg-secondaryLight flex-col flex justify-start items-center transition duration-700 z-[100] py-10">
            <TbArrowsCross
              fontSize={35}
              className="m-2 font-bold"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="text-left">
              <li className="relative group my-12">
                <Link to="/">
                  <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                    Home
                  </div>
                </Link>
              </li>

              <li className="relative group my-12">
                <div className="flex uppercase cursor-pointer text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                  Pages
                  <BsChevronDown
                    className="group-hover:rotate-180 duration-500"
                    size={10}
                  />
                </div>
                <ul className="absolute z-50 cursor-pointer bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    About Us
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Services
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Delivery
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Pricing Plans
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    FAQ
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Team
                  </li>
                </ul>
              </li>

              <li className="relative group my-12">
                <div className="flex cursor-pointer uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                  Products
                  <BsChevronDown
                    className="group-hover:rotate-180 duration-500"
                    size={10}
                  />
                </div>
                <ul className="absolute z-50 bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
                  <Link to="/product/prefectconcealer">
                    <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                      Concealer
                    </li>
                  </Link>
                  <Link to="/product/bodycare">
                    <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                      Body Care
                    </li>
                  </Link>
                  <Link to="/product/mackupequipment">
                    <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                      Makeup
                    </li>
                  </Link>
                  <Link to="/product/awesomesoap">
                    <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                      Soap
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="flex justify-center items-start font-medium gap-1 p-2">
                Contacts
              </li>

              <li className="flex-col space-y-4 justify-between items-center">
              <Link to="/cart">
                <li className="flex justify-center items-center px-2 my-6">
                  <BsCartCheck size={25} />
                  {totalItems > 0 && (
                    <sup className="text-lg font-bold font-raleway">
                      {totalItems}
                    </sup>
                  )}
                </li>
              </Link>

              <Link to="/">
                <li className="flex justify-center items-center px-2 my-6">
                  <BsSearch size={25} />
                </li>
              </Link>
              <Link to="/profile">
                <li className="flex justify-center items-center px-2 my-6">
                  <CgProfile size={25} />
                </li>
              </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
