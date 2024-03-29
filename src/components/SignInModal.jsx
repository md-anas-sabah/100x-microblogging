import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import cross from "../assets/cross.png";
import logo from "../assets/logo.png";
import visible from "../assets/visible.svg";
import google from "../assets/google.svg";
import { useAuth } from "../context/AuthContext";

function PostModal({ isOpen, onClose }) {
  const { email, setEmail, password, setPassword, login, error, authToken } =
    useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [credentialError, setCredentialError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      navigate("/homefeed");
    }
  }, [authToken, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login();
      // navigate("/homefeed");
    } catch {
      setCredentialError(true);
      console.error(error);
    }
  };

  function handleVisible() {
    setShowPassword(!showPassword);
  }

  return (
    <div
      className={`${
        isOpen
          ? "fixed inset-0 flex items-center justify-center text-white"
          : "hidden"
      }`}
    >
      <div
        className={`${isOpen ? "fixed inset-0 bg-black opacity-80" : ""}`}
      ></div>

      <div
        className={`${
          isOpen ? "flex flex-col justify-center items-center" : "hidden"
        }`}
      >
        <div className="flex flex-col h-[27rem] w-[20rem] bg-neutral-1000 border border-gray-600 rounded-xl  md:h-[40rem] md:w-[35rem] p-4 relative">
          <div className="flex justify-center">
            <img
              src={cross}
              alt="close"
              className="absolute top-2 left-2 p-1 cursor-pointer hover:bg-gray-800 rounded-full"
              onClick={onClose}
            />
            <div className="-mt-3">
              <Logo />
            </div>
          </div>
          <div className="flex flex-col md:gap-12 gap-8 w-3/4 md:w-3/5 ml-auto mr-auto mt-5">
            <h1 className="font-px-regular font-bold md:text-3xl text-2xl">
              Sign in to 100x
            </h1>
            <div className="flex flex-col md:gap-5 gap-2">
              <button className="flex w-full px-4 py-3 md:py-2 md:px-6 justify-center items-center gap-2 rounded-[65px] bg-neutral-50 shadow-custom backdrop-blur-custom">
                <img
                  src={google}
                  alt="google-icon"
                  className="shrink-0 h-6 w-6"
                />
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
              <form
                onSubmit={(e) => handleLogin(e)}
                className="w-full flex flex-col gap-3 "
              >
                <input
                  type="email"
                  value={email}
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Phone,email or username"
                  className="w-full h-12 px-4 rounded-lg bg-transparent border border-gray-800 text-neutral-50 outline-none font-px-regular text-base font-normal"
                />
                <div className="">
                  <div className="flex justify-between border border-gray-800 rounded-lg">
                    <input
                      type={showPassword ? "text" : "password"}
                      autoComplete="on"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full h-12 px-4 rounded-lg bg-transparent  text-neutral-50 outline-none font-px-regular text-base font-normal"
                    />
                    <img
                      src={visible}
                      alt="success"
                      onClick={handleVisible}
                      className="cursor-pointer mr-2 h-8 w-8 flex mt-2"
                    />
                  </div>
                </div>
                {credentialError && (
                  <h1 className="text-red-900 text-center font-bold font-px-regular">
                    Invalid Credentials
                  </h1>
                )}

                <button className=" flex w-full py-2 md:py-3 px-6 justify-center items-center gap-10px rounded-4xl bg-neutral-50 shadow-custom backdrop-blur-custom hover:bg-neutral-200 disabled:bg-neutral-700">
                  <span className="text-neutral-1000 font-chirp text-center text-base font-bold">
                    Next
                  </span>
                </button>
              </form>
              <button className="mt-4 flex w-full py-2 md:py-3 px-6 justify-center items-center gap-10px rounded-4xl bg-neutral-1000 border border-gray-500 shadow-custom backdrop-blur-custom hover:bg-neutral-800 disabled:bg-neutral-700">
                <span className="text-neutral-50 font-chirp text-center text-base font-bold">
                  Forgot Password?
                </span>
              </button>
              <p className="text-gray-500 mt-1 flex text-sm">
                Don&apos;t have an account?
                <Link
                  to="/signup/account-info"
                  className="text-twitter-blue ml-2 md:ml-1 font-bold"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

function Logo() {
  return (
    <header className="flex justify-center items-center py-3 px-4">
      <img
        src={logo}
        alt="logo"
        className="md:h-[1.8663rem] md:w-[3.96013rem] h-mobile-view-logo w-mobile-view-logo"
      />
    </header>
  );
}
