import React from "react";

const Button = ({children}) => {
  return (
    <section>
      <button className="px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6">
        {children}
      </button>
    </section>
  );
};

export default Button;
