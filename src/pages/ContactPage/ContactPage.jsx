import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import Footer from "../../components/Footer";
import styles from "../../styles/styles";

const ContactPage = () => {
  return (
    <main className="flex flex-col justify-end">
      <section className="flex justify-center items-center p-6">
        <div className="w-[350px] bg-secondaryLight p-4">
          <p className="pb-4">
            <label htmlFor="name">
              <span className="text-md font-semibold font-nunito">Name :</span>
              <input
                type="text"
                name=""
                id="name"
                className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
              />{" "}
            </label>
          </p>
          <p className="pb-4">
            <label htmlFor="email">
              <span className="text-md font-semibold font-nunito">
                E-mail :
              </span>
              <input
                type="text"
                name=""
                id="email"
                className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
              />{" "}
            </label>
          </p>

          <p className="pb-4">
            <label htmlFor="email">
              <span className="text-md font-semibold font-nunito">
                Message :
              </span>
              <textarea
                type="text"
                name=""
                id="email"
                className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
              />{" "}
            </label>
          </p>
          <button className="cursor-pointer px-6 w-full py-2 border-[0.5px] font-raleway bg-whiteduration-500  font-medium xl:text-4xl xl:px-8 xl:py-4 bg-white">
            Submit
          </button>

          <div className="flex justify-start md:justify-center items-center py-4">
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
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default ContactPage;
