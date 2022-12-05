import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/styles";

const LoginPage = () => {
  return (
    <main
      className={`flex justify-center items-center ${styles.paddingX} ${styles.paddingY}`}
    >
      <section className="p-8 border-secondaryLight border-2">
        <h2 className="text-center text-3xl py-2 font-raleway">Sign in</h2>
        <div className="w-[250px] space-y-4">
          <p>
            <label
              htmlFor="email"
              className="text-md font-semibold font-nunito"
            >
              E-mail address:
              <input
                type="text"
                name=""
                id="email"
                className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
              />{" "}
            </label>
          </p>
          <p>
            <label
              htmlFor="password"
              className="text-md font-semibold font-nunito"
            >
              Password:
              <input
                type="text"
                name=""
                id="password"
                className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
              />{" "}
            </label>
            <p className="py-1">
              <input type="checkbox" name="" id="" /> Show password
            </p>
          </p>
          <div className="py-4 w-full">
         
          <button className="cursor-pointer px-6 w-full py-2 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-4">Sign in</button>
        </div>
        <p className="text-lg">New to Cosmetics.ecoomerce? <Link to="/register" className="underline-offset-4 underline">Register Now</Link></p>
        </div>
        
      </section>
    </main>
  );
};

export default LoginPage;
