/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import cross from "../assets/cross.png";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTweetContext } from "../context/TweetContext";

const tweetLimit = 280;

function PostModal({ isOpen, onClose }) {
  const [tweetText, setTweetText] = useState("");
  const [close, setClose] = useState(false);
  const navigate = useNavigate();

  const { addTweet } = useTweetContext();

  const isTweetExceedingLimit = tweetText.length > tweetLimit;

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    if (tweetText.trim() !== "") {
      const newTweet = {
        text: tweetText,
      };
      addTweet(newTweet);
      setTweetText("");
      navigate("/homefeed");
      setClose(() => onClose());
    }
  };
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
          isOpen ? "absolute top-[10rem] left-[34rem]  " : "hidden"
        }`}
      >
        <form
          onSubmit={handleTweetSubmit}
          className="flex flex-col bg-neutral-1000 border border-gray-600 rounded-xl  h-[19rem] w-[27rem] p-4 relative"
        >
          <img
            src={cross}
            alt="close"
            className="absolute top-2 left-2 p-1 cursor-pointer"
            onClick={onClose}
          />
          <section className=" mt-9 flex flex-col">
            <div className="flex gap-3">
              <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
              <textarea
                className={`w-full bg-transparent resize-none outline-none font-px-regular text-base font-normal text-neutral-50 `}
                cols={30}
                rows={8}
                value={tweetText}
                onChange={(e) => setTweetText(e.target.value)}
                placeholder="What's Happening?!"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <span
                className={`px-1 text-neutral-500 font-px-regular font-normal  ${
                  isTweetExceedingLimit ? "text-red-900" : "text-neutral-500"
                }`}
              >
                {isTweetExceedingLimit
                  ? tweetLimit - tweetText.length
                  : tweetText.length}
                /{tweetLimit}
              </span>
              <button
                disabled={tweetText === "" || tweetText.length > tweetLimit}
                className="flex py-2 px-6 rounded-5.5xl shadow-custom backdrop-blur-custom bg-twitter-blue hover:bg-twitter-blue-hover disabled:bg-twitter-blue-disabled disabled:cursor-not-allowed"
              >
                <span className="text-neutral-50 text-center font-px-regular text-14px font-bold disabled:text-neutral-twitter-blue-disabled">
                  Post
                </span>
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default PostModal;

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
