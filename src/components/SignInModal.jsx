/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import cross from "../assets/cross.png";
import logo from "../assets/logo.png";
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
        isOpen ? "fixed inset-0 flex items-center justify-center" : "hidden"
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
        <div className="flex flex-col bg-neutral-1000 border border-gray-600 rounded-xl  h-[40rem] w-[30rem] p-4 relative">
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
        className="h-mobile-view-logo w-mobile-view-logo"
      />
    </header>
  );
}
