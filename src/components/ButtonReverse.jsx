import React from 'react'

const ButtonReverse = ({children}) => {
  return (
    <section>
      <button className="px-6 w-fit py-3 border-[0.5px] border-white bg-[#00000000] text-white hover:text-black hover:bg-white duration-500 uppercase font-raleway">
        {children}
      </button>
    </section>
  )
}

export default ButtonReverse