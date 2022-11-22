import React from "react";

const Button = ({children}) => {
  return (
    <section>
      <button className="px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase">
        {children}
      </button>
    </section>
  );
};

export default Button;
