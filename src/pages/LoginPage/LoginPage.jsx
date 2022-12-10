import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";
import Button from "../../components/Button";
import { cartActions } from "../../store/cart-slice";
import { userActions } from "../../store/user-slice";
import styles from "../../styles/styles";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || '/profile'

  const [isUserAvailableMessage, setIsUserAvailableMessage] = useState(false);
  const dispatch = useDispatch()
  const {setUser} = useContext(ProductsContext)



  const handleShowPassword = () => {
    if (showPassword) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    fetch("http://localhost:5000/customer/isEmailAvailable", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result > 0) {
          fetch("http://localhost:5000/customer/signin", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          })
            .then((res) => res.json())
            .then((data) => {
              setUser(data.result)
              dispatch(userActions.loginUser(data.result))
              dispatch(cartActions.setupCart(data.result.cart))
              // localStorage.setItem('user', JSON.stringify(data.result));
              navigate(from, {replace: true})
            });


        } else {

          setIsUserAvailableMessage(true);
          setTimeout(() => {
            setIsUserAvailableMessage(false);
            navigate("/register", { replace: true });
          }, 10000);

        }
      });
  };

  return (
    <main
      className={`flex justify-center items-center ${styles.paddingX} ${styles.paddingY}`}
    >
      <section className="p-8 border-secondaryLight border-2">
        {isUserAvailableMessage && (
          <p className="text-red-700 text-center font-nunito font-semibold">
            This Email is not found.
            <br /> Please, Register !
          </p>
        )}
        <h2 className="text-center text-3xl py-2 font-raleway">Sign in</h2>
        <div className="w-[300px] space-y-4">
          <form onSubmit={handleSubmit} autoComplete="true">
            <p className="pb-4">
              <label htmlFor="email">
                <span className="text-md font-semibold font-nunito">
                  E-mail address :
                </span>
                <input
                  ref={emailRef}
                  type="text"
                  name=""
                  id="email"
                  className="w-full p-2 border-[1px] border-secondaryLight focus:outline-none"
                />{" "}
              </label>
            </p>
            <p>
              <label htmlFor="password">
                <span className="text-md font-semibold font-nunito">
                  Password :
                </span>
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
              <button
                type="submit"
                className="cursor-pointer px-6 w-full py-2 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-4"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="text-lg">
            New to <span className="font-semibold">Cosmetics.ecoomerce?</span>{" "}
            <Link to="/register" className="underline-offset-4 underline">
              Register Now
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
