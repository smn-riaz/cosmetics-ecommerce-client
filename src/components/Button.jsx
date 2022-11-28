import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({title, goLink}) => {
  let navigate = useNavigate()
  const handleNaivate = () => {
      navigate(`${goLink}`, { replace: true })
  }
  return (
    <section>
      <button onClick={handleNaivate} className="cursor-pointer px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6">
        {title}
      </button>
    </section>
  );
};

export default Button;
