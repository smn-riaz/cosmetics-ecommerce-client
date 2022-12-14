import React, { useContext, useEffect, useState } from "react";
import { BsCartCheck, BsChevronDown, BsSearch } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbArrowsCross } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProductsContext } from "../App";
import { cartActions } from "../store/cart-slice";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartQuantity = items.reduce((n, { quantity }) => n + quantity, 0);

  const { user, setUser } = useContext(ProductsContext);
  const { email } = user;

  const handleSignout = () => {
    setUser({});
    dispatch(cartActions.setupCart([]));
    navigate("/login", { replace: true });
  };

  const links = [
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Delivery",
      link: "/delivery",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];
  const productTypeLink = [
    {
      name: "Concealer",
      link: "/product/prefectconcealer",
    },
    {
      name: "Bodycare",
      link: "/product/bodycare",
    },
    {
      name: "Makeup",
      link: "/product/mackupequipment",
    },
    {
      name: "Soap",
      link: "/product/awesomesoap",
    },
  ];

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
              {links.map((link) => (
                <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2">
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
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
              {productTypeLink.map((link) => (
                <Link
                  to={link.link}
                  className="text-white hover:text-secondaryLight duration-500 my-3 hover:ml-1 hover:bg-gray-600 p-2"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </li>

          <Link
            to="/contact"
            className="flex justify-center uppercase font-medium items-start gap-1 xl:text-3xl"
          >
            Contacts
          </Link>
        </ul>
      </div>

      <div className="sm:flex justify-end items-center flex-1 hidden">
        <ul className="flex justify-center items-center space-x-8 cursor-pointer">
          <li>
            {user.role === "admin" ? (
              <Link
                to="/dashboard"
                className="font-nunito font-semibold border-[1px] border-secondary py-1 px-2 rounded-md"
              >
                Dashboard
              </Link>
            ) : (
              <Link to="/cart" className="flex justify-center items-center">
                <BsCartCheck size={25} />
                {cartQuantity > 0 && (
                  <sup className="text-lg font-bold font-raleway text-secondary">
                    {cartQuantity}
                  </sup>
                )}
              </Link>
            )}
          </li>
          {user.email ? (
            <Link to="/profile">
              <button
                className="flex justify-center items-center uppercase font-semibold bg-secondaryLight p-1 rounded-xl ring-2 ring-secondary shadow-lg shadow-secondary hover:bg-white duration-300"
                title="Profile"
              >
                {user.name[0].length < user.name[1].length
                  ? user.name[0]
                  : user.name[1]}
              </button>
            </Link>
          ) : (
            <li className="flex justify-center items-center">
              <BsSearch size={25} />
            </li>
          )}
          {user.email ? (
            <button
              className="flex justify-center items-center rounded-2xl p-1 space-x-1"
              onClick={handleSignout}
            >
              <CgProfile size={25} />{" "}
              <span className="font-nunito font-semibold">Logout</span>
            </button>
          ) : (
            <li className="flex justify-center items-center">
              <Link to="/login">
                <CgProfile size={25} />
              </Link>
            </li>
          )}
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
          <div className="fixed top-0 right-0 overflow-y-hidden w-[100%] h-[100vh] bg-secondaryLight flex-col flex justify-start items-center transition duration-700 z-[100] py-10">
            <TbArrowsCross
              fontSize={35}
              className="m-2 font-bold"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="text-left">
              <li className="relative group my-12">
                <Link to="/" onClick={() => setToggleMenu(false)}>
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
                <ul className="absolute z-50 bg-gray-800 w-[140px] min-w-max p-6 text-md invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500">
                  {links.map((link) => (
                    <Link to={link.link} onClick={() => setToggleMenu(false)}>
                      <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                        {link.name}
                      </li>
                    </Link>
                  ))}
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
                  {productTypeLink.map((link) => (
                    <Link to={link.link} onClick={() => setToggleMenu(false)}>
                      <li className="text-white hover:text-secondaryLight duration-500 my-3 hover:bg-gray-600 p-2">
                        {link.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>

              <Link className="flex justify-center items-start font-medium gap-1 p-2">
                Contacts
              </Link>

              <div className="flex-col space-y-4 justify-between items-center">
                {user.role === "admin" ? (
                  <Link to="/dashboard" className="">
                    <li className="flex justify-center items-center px-2 my-6 font-nunito font-semibold border-[1px] border-secondary py-1 rounded-md">
                      Dashboard
                    </li>
                  </Link>
                ) : (
                  <Link to="/cart" onClick={() => setToggleMenu(false)}>
                    <li className="flex justify-center items-center px-2 my-6">
                      <BsCartCheck size={25} />
                      {items.reduce((n, { quantity }) => n + quantity, 0) >
                        0 && (
                        <sup className="text-lg font-bold font-raleway">
                          {items.reduce((n, { quantity }) => n + quantity, 0)}
                        </sup>
                      )}
                    </li>
                  </Link>
                )}

                {user.email ? (
                  <Link
                    to="/profile"
                    className="flex justify-center items-center"
                    onClick={() => setToggleMenu(false)}
                  >
                    <button
                      className=" uppercase font-semibold bg-secondaryLight p-1 rounded-lg ring-2 ring-secondary shadow-lg shadow-secondary hover:bg-white duration-300"
                      title="Profile"
                    >
                      {user.name[0].length < user.name[1].length
                        ? user.name[0]
                        : user.name[1]}
                    </button>
                  </Link>
                ) : (
                  <Link to="/" onClick={() => setToggleMenu(false)}>
                    <li className="flex justify-center items-center px-2 my-6">
                      <BsSearch size={25} />
                    </li>
                  </Link>
                )}
                {user.email ? (
                  <button
                    className="flex justify-center items-center rounded-2xl p-1 space-x-1"
                    onClick={handleSignout}
                  >
                    <Link to="/" onClick={() => setToggleMenu(false)} className="flex justify-center items-center"><CgProfile size={25} />{" "}
                    <span className="font-nunito font-semibold">Logout</span></Link>
                  </button>
                ) : (
                  <Link to="/profile" onClick={() => setToggleMenu(false)}>
                    <li className="flex justify-center items-center px-2 my-6">
                      <CgProfile size={25} />
                    </li>
                  </Link>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
