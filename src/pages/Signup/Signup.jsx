import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import Button from "../../components/Button";

import google from "../../assets/google.svg";
import SignInModal from "../../components/SignInModal";

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen  md:justify-center md:flex-row  md:gap-100">
      <Logo />
      <section className="flex flex-col px-7 gap-10  mt-auto mb-auto">
        <div className="flex flex-col gap-3 self-stretch text-neutral-50">
          <div className="font-px-regular font-extrabold text-31px md:font-bold md:text-6xl">
            Happening Now
          </div>
          <div className="font-px-regular font-medium md:font-bold md:text-2.5 text-base md:mt-5">
            Join today.
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:w-[280px]">
          <button className="flex w-full py-2 px-6 justify-center items-center gap-2 rounded-[65px] bg-neutral-50 shadow-custom backdrop-blur-custom">
            <img src={google} alt="google-icon" className="shrink-0 h-6 w-6" />
            <span className="text-neutral-1000 text-base font-bold text-center">
              Sign in with Google
            </span>
          </button>
          <div className="flex items-center gap-2 w-full">
            <div className="w-full h-px bg-neutral-700" />
            <span className="font-chirp text-center text-base font-normal text-neutral-50">
              or
            </span>
            <div className="w-full h-px bg-neutral-700" />
          </div>
          <div onClick={() => navigate("/signup/account-info")}>
            <Button variant="default" text="Create account" />
          </div>
          <div className="flex flex-col gap-5 self-stretch">
            <p className="mt-10 font-px-regular text-xl font-medium text-neutral-50">
              Already have an account?
            </p>
            <div onClick={openModal}>
              <Button variant="outline" text="Sign in" />
            </div>
          </div>
          <SignInModal
            isOpen={isModalOpen}
            onClose={closeModal}
            showError={showError}
            setShowError={setShowError}
          />
        </div>
      </section>
    </div>
  );
}

function Logo() {
  return (
    <header className="flex justify-center items-center py-3 px-4">
      <img
        src={logo}
        alt="logo"
        className="h-mobile-view-logo w-mobile-view-logo md:h-desktop-view-logo md:w-desktop-view-logo"
      />
    </header>
  );
}

export default Signup;
