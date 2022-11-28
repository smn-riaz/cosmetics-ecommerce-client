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
import styles from "../styles/styles";

const Footer = () => {
 
  return (
    <section className="mt-8">
      <div className="bg-[#1E1E1E] p-10">
        <div className="border border-tertiary p-6 md:p-10 flex flex-col items-center relative">

          <div className="p-4 bg-white w-fit md:flex justify-center hidden md:visible items-center absolute -top-20">
            <div className="border border-gray-500 flex justify-center items-center p-4">
              <div className="text-center">
                <h1 className="text-2xl font-medium">@Cosmetics</h1>
                <p className="uppercase font-nunito font-semibold text-tertiary">Instagram</p>
              </div>
            </div>
          </div>

          <div className="md:flex-row md:justify-between flex flex-col justify-start items-start md:items-center">

            <div className="space-y-4 text-white basis-1/3 my-4">
              <h1 className="text-xl">Contact</h1>
              <div className="space-y-2 text-lg">
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

            <div className="space-y-4 text-white basis-1/3 my-4">
              <div className="space-y-2 md:text-center text-lg">
                <h5 className="uppercase font-raleway text-xl">Cosmetic</h5>
                <p className="">
                  Popularized through customer relationships with some of  <br /> the 
                  world’s most recognizable faces, the “brow revolution”.
                </p>
              </div>
              <div className="flex justify-start md:justify-center items-center">
                <p className={`${styles.socialIcon}`}>
                  <BsTwitter />
                </p>
                <p className={`${styles.socialIcon}`}>
                  <BsFacebook />
                </p>
                <p className={`${styles.socialIcon}`}>
                  <BsInstagram />
                </p>
                <p className={`${styles.socialIcon}`}>
                  <BsLinkedin />
                </p>
              </div>
            </div>

            <div className="space-y-4 md:text-right text-left text-white basis-1/3 my-4">
              <h1 className="text-xl">Useful Links</h1>
              <div className="space-y-2 text-lg">
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
