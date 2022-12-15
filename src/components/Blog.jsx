import React from "react";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import styles from "../styles/styles";
import Button from "./Button";

const Blog = () => {
  const blogs = [
    {
      image: blog1,
      h21: "Color Correcy with Loose",
      h22: "Setting Powder",
      h4Date: "November 24, 2020",
      h4Author: "By John",
    },
    {
      image: blog2,
      h21: "Color Correcy with Loose",
      h22: "Setting Powder",
      h4Date: "November 24, 2020",
      h4Author: "By John",
    },
    {
      image: blog3,
      h21: "Color Correcy with Loose",
      h22: "Setting Powder",
      h4Date: "November 24, 2020",
      h4Author: "By John",
    },
  ];
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} w-full`}>

      <div className="grid sm:grid-cols-3 ss:grid-cols-2 grid-cols-1 justify-items-center  md:px-8">
        {blogs.map((blog) => (
          <div className="p-4 border-gray-200 hover:border-black duration-300 border-[1.5px] space-y-4 m-2">
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt=""
                className="hover:scale-110 duration-300"
              />
            </div>
            <div>
              <h4 className={`${styles.detailText1} text-md uppercase`}>
                {blog.h4Date} <span>-</span> {blog.h4Author}
              </h4>
              <h2 className={`text-black text-[28px] font-nunito`}>
                {blog.h21} <br /> {blog.h22}
              </h2>
              <p className="uppercase text-secondary font-raleway my-4 border-b-secondary border-b-2 w-fit hover:border-b-primary duration-200 text-sm">
                Read more
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center p-8">
      <Button title="Explore More" goLink="/product"/>
      </div>
    </section>
  );
};

export default Blog;
