import React, { useState } from "react";
import { BsCartCheck, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsCross } from "react-icons/tb";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex justify-between xl:justify-around items-center flex-row p-8 h-12 w-full xl:text-3xl">
      <div className="flex justify-start xl:justify-center items-center flex-1">
        {/* <img
          src="https://g2h4v2c9.stackpathcdn.com/themes/cosmecos-new/wp-content/uploads/2021/03/logo_black.png"
          className="h-[14px]"
          alt="logo"
        /> */}
        <h3 className="text-4xl xl:text-6xl font-semibold font-greatvibes text-secondary">Cosmetics</h3>
      </div>

      <div className="sm:flex justify-center items-center hidden">
        <ul className="flex flex-row justify-between items-center gap-x-6 font-raleway xl:text-3xl cursor-pointer">
          <li className="relative group">
            <div className="flex uppercase  xl:text-3xl text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Home
              <BsChevronDown
                className="group-hover:rotate-180 duration-500"
                size={10}
              />
            </div>
            <ul className="absolute bg-gray-800 w-[170px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-400">
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Cosmetic Shop
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Perfume Shop
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Beauty Products
              </li>
            </ul>
          </li>

          <li className="relative group">
            <div className="flex uppercase  xl:text-3xl text-sm flex-row justify-center font-medium items-center gap-1 top-0">
              Pages
              <BsChevronDown
                className="group-hover:rotate-180 duration-500"
                size={10}
              />
            </div>
            <ul className="absolute bg-gray-800 w-[170px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                About Us
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Services
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Delivery
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Pricing Plans
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                FAQ
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
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
            <ul className="absolute bg-gray-800 w-[170px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Concealer
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Body Care
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Makeup
              </li>
              <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-3 hover:bg-gray-600 p-2">
                Soap
              </li>
            </ul>
          </li>

          <li className="flex justify-center uppercase font-medium items-start gap-1 xl:text-3xl">
            Contacts
          </li>
        </ul>
      </div>

      <div className="sm:flex justify-center items-center flex-1 hidden">
        <ul className="flex justify-center items-center gap-6 cursor-pointer">
          <li className="flex justify-center items-center">
            <AiOutlineHeart size={22}/>
          </li>
          <li className="flex justify-center items-center">
            <BsCartCheck size={22}/>
          </li>
          <li className="flex justify-center items-center">
            <BsSearch size={22}/>
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
          <div className="fixed top-0 right-0 w-[80%] h-full bg-secondaryLight flex-col flex justify-start items-center transition duration-700 py-10">
            <TbArrowsCross
              fontSize={27}
              className="m-2 "
              onClick={() => setToggleMenu(false)}
            />
            <ul className="text-left">
              <li className="relative group my-8">
                <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                  Home
                  <BsChevronDown
                    className="group-hover:rotate-180 duration-500"
                    size={10}
                  />
                </div>
                <ul className="absolute z-10 bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-400">
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Cosmetic Shop
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Perfume Shop
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Beauty Products
                  </li>
                </ul>
              </li>

              <li className="relative group my-8">
                <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                  Pages
                  <BsChevronDown
                    className="group-hover:rotate-180 duration-500"
                    size={10}
                  />
                </div>
                <ul className="absolute z-10 bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
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

              <li className="relative group my-8">
                <div className="flex uppercase text-sm flex-row justify-center font-medium items-center gap-1 top-0">
                  Products
                  <BsChevronDown
                    className="group-hover:rotate-180 duration-500"
                    size={10}
                  />
                </div>
                <ul className="absolute z-10 bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Concealer
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Body Care
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Makeup
                  </li>
                  <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                    Soap
                  </li>
                </ul>
              </li>

              <li className="flex justify-center items-start gap-1 p-2">
                Contacts
              </li>

              <li className="flex justify-center items-center gap-1 p-2">
                <AiOutlineHeart size={22} />
              </li>
              <li className="flex justify-center items-center gap-1 p-2">
                <BsCartCheck size={22} />
              </li>
              <li className="flex justify-center items-center gap-1 p-2">
                <BsSearch size={22} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
