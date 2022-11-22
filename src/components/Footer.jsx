import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <section>
      <div className="bg-[#1E1E1E] p-10">
        <div className="border border-tertiary p-16 flex flex-col items-center relative">

          <div className="p-4 bg-white w-fit flex justify-center invisible md:visible items-center absolute -top-20">
            <div className="border border-gray-500 flex justify-center items-center p-4">
              <div className="text-center">
                <h1 className="text-2xl font-medium">@Cosmetics</h1>
                <p className="uppercase font-nunito font-semibold text-tertiary">Instagram</p>
              </div>
            </div>
          </div>

          <div className=" flex justify-around items-center">
            <div className="space-y-4 text-white basis-1/3">
              <h1 className="text-xl">Contact</h1>
              <div className="space-y-2">
                <p className="flex justify-start items-center space-x-1">
                  <CiLocationOn /> <p> USA</p>
                </p>
                <p className="flex justify-start items-center space-x-1">
                  <AiOutlineMail /> <p> cosmetics@gmail.com</p>
                </p>
                <p className="flex justify-start items-center space-x-1">
                  <BsTelephone /> <p> +0000000777</p>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-white basis-1/3">
              <div className="space-y-2 text-center">
                <h5 className="uppercase font-raleway text-xl">Cosmetic</h5>
                <p className="">
                  Popularized through customer relationships with some of the 
                  world’s most recognizable faces, the “brow revolution”.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <p className="rounded-full border-[0.5px] p-[6px] m-1 cursor-pointer hover:bg-tertiary duration-300 border-gray-50">
                  <BsTwitter />
                </p>
                <p className="rounded-full border-[0.5px] p-[6px] m-1 cursor-pointer hover:bg-tertiary duration-300 border-gray-50">
                  <BsFacebook />
                </p>
                <p className="rounded-full border-[0.5px] p-[6px] m-1 cursor-pointer hover:bg-tertiary duration-300 border-gray-50">
                  <BsInstagram />
                </p>
                <p className="rounded-full border-[0.5px] p-[6px] m-1 cursor-pointer hover:bg-tertiary duration-300 border-gray-50">
                  <BsLinkedin />
                </p>
              </div>
            </div>

            <div className="space-y-4 text-right text-white basis-1/3">
              <h1 className="text-xl">Useful Links</h1>
              <div className="space-y-2 text-right">
                <p>Eyeshadow Collection</p>
                <p>How Clean Make Up Brushes</p>
                <p>The Right Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
