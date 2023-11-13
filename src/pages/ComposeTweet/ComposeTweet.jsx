import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import cross from "../../assets/cross.png";
import { useState } from "react";
import { useTweetContext } from "../../context/TweetContext";

const tweetLimit = 280;

function ComposeTweet() {
  const navigate = useNavigate();
  const { addTweet } = useTweetContext();
  const [tweetText, setTweetText] = useState("");

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
    }
  };

  return (
    <form onSubmit={handleTweetSubmit}>
      <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
        <header className="flex items-center justify-between py-3 px-4">
          <Link to="/homefeed">
            <img
              src={cross}
              alt="cancel"
              className="cursor-pointer w-6 h-6 flex-shrink-0"
            />
          </Link>
          <button
            disabled={tweetText === "" || tweetText.length > tweetLimit}
            className="flex py-2 px-6 rounded-5.5xl shadow-custom backdrop-blur-custom bg-twitter-blue hover:bg-twitter-blue-hover disabled:bg-twitter-blue-disabled"
          >
            <span className="text-neutral-50 text-center font-px-regular text-14px font-bold disabled:text-neutral-twitter-blue-disabled">
              Post
            </span>
          </button>
        </header>
        <section className="py-3 px-4 flex gap-3">
          <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
          <textarea
            className={`w-full bg-transparent resize-none outline-none font-px-regular text-base font-normal text-neutral-50 `}
            cols={30}
            rows={10}
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's Happening?!"
          />
        </section>
        <section className="flex items-end h-[604px]">
          <span
            className={`py-3 px-4 border-t w-full border-neutral-800 text-neutral-500 font-px-regular font-normal ${
              isTweetExceedingLimit ? "text-red-900" : "text-neutral-500"
            }`}
          >
            {isTweetExceedingLimit
              ? tweetLimit - tweetText.length
              : tweetText.length}
            /{tweetLimit}
          </span>
        </section>
      </div>
    </form>
  );
}

export default ComposeTweet;
