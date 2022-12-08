import React, { useRef, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";
import styles from "../../styles/styles";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {GoPrimitiveDot} from 'react-icons/go'
import { useEffect } from "react";


const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {setUser} = useContext(ProductsContext)
  const navigate = useNavigate()
  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const [phoneNo, setPhoneNo] = useState(0)
  const [phoneAlert, setPhoneAlert] = useState(false)

  useEffect(() => {
    if(phoneNo.length===13){
      setPhoneAlert(true)
    } else {
      setPhoneAlert(false)
    }
  },[phoneNo])
 
  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const name = [firstName, lastName]
    const email = emailRef.current.value
    const password = passwordRef.current.value

  if(phoneNo.length===13){
    fetch("http://localhost:5000/customer/isEmailAvailable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result>0) {
          setIsUserAvailableMessage(true)
          setTimeout(() => {
            setIsUserAvailableMessage(false)
            navigate("/login", { replace: true })
          }, 7000);
        }  else {
          fetch("http://localhost:5000/customer/addCustomer", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({name, email, password,cart:[], order:[], role:"customer",phone:phoneNo}),
          })
            .then((res) => res.json())
            .then((data) => {
              if(data.message){
                setUser({name, email,cart:[], order:[], role:"customer",phone:phoneNo})
                navigate("/profile", { replace: true })

              }
            });
        }
      })
  }

    

   
       
  }
  return (
    <main
      className={`flex justify-center items-center ${styles.paddingX} ${styles.paddingY}`}
    >
      <section className="p-8 border-secondaryLight border-2">
        {isUserAvailableMessage && <p className="text-red-700 text-center font-nunito font-semibold">Email is already registered. <br /> Please, Login !</p>}
        <h2 className="text-center text-3xl py-2 font-raleway">Register</h2>
        <div className="w-[300px] ">
          <form onSubmit={handleSubmit}>
            <p className="pb-4 flex space-x-1">
              <label
                htmlFor="name"
              >
                <span className="text-md font-semibold font-nunito">First Name :</span>
                <input
                  type="text"
                  ref={firstNameRef}
                  name=""
                  id="name"
                  className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                  maxLength={8}
                />{" "}
              </label>
              <label
                htmlFor="name"
              >
                <span className="text-md font-semibold font-nunito">Last Name :</span>
                <input
                  type="text"
                  ref={lastNameRef}
                  name=""
                  id="name"
                  className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                  maxLength={8}
                />{" "}
              </label>
            </p>

            <p className="pb-4">
              <label
                htmlFor="email"
                
              >
                <span className="text-md font-semibold font-nunito">E-mail address :</span>
                <input
                ref={emailRef}
                  type="text"
                  name=""
                  id="email"
                  className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                />{" "}
              </label>
            </p>

         
            <p className="pb-4">
<label
                htmlFor="phone"
                
              >
                <span className="text-md font-semibold font-nunito flex items-center">Phone : {phoneAlert?<span className="text-green-600"><GoPrimitiveDot /></span>:<span className="text-yellow-600"><GoPrimitiveDot /></span>}</span>
<p className="border-[1px] border-secondary p-1"><PhoneInput
  country={'bd'}
  enableAreaCodes={true}
  countryCodeEditable={false}
  onChange={phone => setPhoneNo( phone )}
  inputStyle={{border:0, width:'max-content'}}
  buttonStyle={{border:0}}
/></p>
</label>
</p>
            <p>
              <label
                htmlFor="password"
              >
               <span className="text-md font-semibold font-nunito">Password :</span>
                <input
                ref={passwordRef}
                  type={showPassword ? "text" : "password"}
                  name=""
                  id="password"
                  className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                  minLength={4}
                  maxLength={20}
                  required
                />{" "}
              </label>
              <p className="py-1">
                <label for="showPassword">
                  <input type="checkbox" onClick={handleShowPassword} />{" "}
                  {showPassword ? "hide" : "show"}
                </label>
              </p>
            </p>
            <div className="py-4 w-full">
            <button type="submit" className="cursor-pointer px-6 w-full py-2 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-4">
              Register Now
            </button>
          </div>
          </form>
          
          <p className="text-lg">
            Already registered?{" "}
            <Link to="/login" className="underline-offset-4 underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
