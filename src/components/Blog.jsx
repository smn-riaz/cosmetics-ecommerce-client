import React from "react";
import { blog1, blog2, blog3 } from "../assets";
import styles from "../styles/styles";
import Button from "./Button";

const Blog = () => {
  return (
    <section className="p-8">
      <div className="flex justify-center items-center">
        <d
          m-2iv
          className="p-4 border-gray-200 hover:border-black duration-300 w-[350px] border-[1.5px] space-y-4 m-2"
        >
          <div className="relative overflow-hidden">
            <img src={blog1} alt="" className="hover:scale-110 duration-300" />
          </div>
          <div>
            <h4 className={`${styles.detailText1} text-md uppercase`}>
              November 24, 2020 <span>-</span> By John
            </h4>
            <h2 className={`text-black text-[28px] font-nunito`}>
              Color Correcy with Loose <br /> Setting Powder
            </h2>

            <p className="uppercase text-secondary font-raleway my-4 border-b-secondary border-b-2 w-fit hover:border-b-primary duration-200 text-sm">
              Read more
            </p>
          </div>
        </d>

        <div className="p-4 border-gray-200 hover:border-black duration-300 w-[350px] border-[1.5px] space-y-4 m-2">
          <div className="relative overflow-hidden">
            <img src={blog2} alt="" className="hover:scale-110 duration-300" />
          </div>
          <div>
            <h4 className={`${styles.detailText1} text-md uppercase`}>
              November 24, 2020 <span>-</span> By John
            </h4>
            <h2 className={`text-black text-[28px] font-nunito`}>
              Color Correcy with Loose <br /> Setting Powder
            </h2>

            <p className="uppercase text-secondary font-raleway my-4 border-b-secondary border-b-2 w-fit hover:border-b-primary duration-200 text-sm">
              Read more
            </p>
          </div>
        </div>

        <div className="p-4 border-gray-200 hover:border-black duration-300 w-[350px] border-[1.5px] space-y-4 m-2">
          <div className="relative overflow-hidden">
            <img src={blog3} alt="" className="hover:scale-110 duration-300" />
          </div>
          <div>
            <h4 className={`${styles.detailText1} text-md uppercase`}>
              November 24, 2020 <span>-</span> By John
            </h4>
            <h2 className={`text-black text-[28px] font-nunito`}>
              Color Correcy with Loose <br /> Setting Powder
            </h2>

            <p className="uppercase text-secondary font-raleway my-4 border-b-secondary border-b-2 w-fit hover:border-b-primary duration-200 text-sm">
              Read more
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center p-8">
        <Button />
      </div>
    </section>
  );
};

export default Blog;
