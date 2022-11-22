import React from "react";
import prtype1 from "../assets/prtype1.jpg";
import prtype2 from "../assets/prtype2.jpg";
import prtype3 from "../assets/prtype3.jpg";
import prtype4 from "../assets/prtype4.jpg";

const ProductTypes = () => {
  return (
    <section className="p-8">
      <div className="flex justify-center items-center">
        <div className="h-[500px] relative overflow-hidden  bg-divBg group m-2">
          <img
            src={prtype1}
            alt=""
            className="w-full h-full group-hover:scale-110 duration-500"
          />
          <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]">
            <button className="px-8 py-6 uppercase bg-white text-black">
              Perfect Concealer
            </button>
          </div>
        </div>


        <div className="h-[500px] relative overflow-hidden  bg-divBg group m-2">
          <img
            src={prtype2}
            alt=""
            className="w-full h-full group-hover:scale-110 duration-500"
          />
          <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]">
            <button className="px-8 py-6 uppercase bg-white text-black ">
              Body Care
            </button>
          </div>
        </div>


        <div className="h-[500px] relative overflow-hidden  bg-divBg group m-2">
          <img
            src={prtype3}
            alt=""
            className="w-full h-full group-hover:scale-110 duration-500"
          />
          <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]">
            <button className="px-8 py-6 uppercase bg-white text-black ">
              Makeup Equipment
            </button>
          </div>
        </div>

        <div className="h-[500px] relative overflow-hidden  bg-divBg group m-2">
          <img
            src={prtype4}
            alt=""
            className="w-full h-full group-hover:scale-110 duration-500"
          />
          <div className=" border-gray-800 border-[.5px] w-[90%] h-[90%] duration-700 absolute flex items-center justify-center top-[5%] left-[5%]">
            <button className="px-8 py-6 uppercase bg-white text-black ">
              Awesome Soap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductTypes;
