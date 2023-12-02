/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import cross from "../assets/cross.png";
import logo from "../assets/logo.png";
import google from "../assets/google.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../context/TweetContext";

const tweetLimit = 280;

function PostModal({ isOpen, onClose }) {
  const [tweetText, setTweetText] = useState("");
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  // const { addTweet } = useTweetContext();

  // const isTweetExceedingLimit = tweetText.length > tweetLimit;

  // const handleTweetSubmit = (e) => {
  //   e.preventDefault();
  //   if (tweetText.trim() !== "") {
  //     const newTweet = {
  //       text: tweetText,
  //     };
  //     addTweet(newTweet);
  //     setTweetText("");
  //     navigate("/homefeed");
  //     setClose(() => onClose());
  //   }
  // };
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
        <div className="flex flex-col bg-neutral-1000 border border-gray-600 rounded-xl  h-[40rem] w-[35rem] p-4 relative">
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
          <div className="flex flex-col gap-12 w-3/5 ml-auto mr-auto mt-5">
            <h1 className="font-px-regular font-bold text-3xl">
              Sign in to 100x
            </h1>
            <div className="flex flex-col gap-5">
              <button className="flex w-full py-2 px-6 justify-center items-center gap-2 rounded-[65px] bg-neutral-50 shadow-custom backdrop-blur-custom">
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
      <img src={logo} alt="logo" className="h-[1.8663rem] w-[3.96013rem]" />
    </header>
  );
}
