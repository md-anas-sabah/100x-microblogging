/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Signup/Header";
import visible from "../../assets/visible.svg";
import { useFormContext } from "../../context/FormContext";

const BASE_URL = "http://localhost:4000";

function CreatePassword() {
  const {
    nameInput,
    emailInput,
    selectedDay,
    selectedMonth,
    selectedYear,
    password,
    setPassword,
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleVisible() {
    setShowPassword(!showPassword);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const dateOfBirth = `${selectedDay} ${selectedMonth} ${selectedYear} `;
    const formData = {
      displayName: nameInput,
      email: emailInput,
      dateOfBirth,
      password,
    };
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast("Account created successfully");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (err) {
      toast("Error in creating account");
      console.log();
    }
  }

  return (
    <div className="flex flex-col justify-center md:h-screen bg-neutral-1000 w-screen">
      <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen md:h-fit md:gap-1 md:w-390 md:border md:rounded-md  md:border-gray-700 md:ml-auto md:mr-auto">
        <Header step="4" />
        <section className="flex flex-col gap-10 md:gap-3 self-stretch">
          <div className="flex flex-col gap-2 self-stretch">
            <h1 className="font-px-regular font-bold text-2xl text-neutral-50">
              You'll need a password
            </h1>
            <p className="text-neutral-500 font-px-regular text-sm font-normal">
              Make sure it's 8 character or more
            </p>
          </div>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-3  self-stretch"
          >
            <fieldset className="custom-fieldset py-4 px-3 md:py-2 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
              <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
                Password
              </legend>
              <div className="flex justify-between items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="h-full w-full text-white md:text-sm bg-transparent text-xlg font-px-regular font-normal outline-none"
                />

                <img
                  src={visible}
                  alt="success"
                  onClick={handleVisible}
                  className="cursor-pointer"
                />
              </div>
            </fieldset>
            <section className="flex h-full w-full md:mt-12 px-4 flex-col justify-end self-stretch">
              <button className="py-2 px-6 w-full rounded-4xl bg-neutral-50 shadow-custom backdrop-blur-custom hover:bg-neutral-200 disabled:bg-neutral-700">
                <span className="text-neutral-1000 font-px-regular text-base font-bold text-center">
                  Next
                </span>
              </button>
            </section>
          </form>
        </section>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
}

export default CreatePassword;
