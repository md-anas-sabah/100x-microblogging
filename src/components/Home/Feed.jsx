import Tabs from "./Tabs";
import avatar from "../../assets/avatar.png";
import { useTweetContext } from "../../context/TweetContext";
import Tweet from "./Tweet";

import avatar3 from "../../assets/avatar3.png";
import comment from "../../assets/comment.png";
import retweet from "../../assets/retweet.png";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import reach from "../../assets/reach.svg";

function Feed() {
  const { tweets } = useTweetContext();
  console.log(tweets);
  return (
    <div className="text-white flex flex-col flex-1">
      <header className="py-2 px-4 border-b border-gray-500 h-10 w-full font-px-regular">
        Home
      </header>
      <Tabs />
      <section className="py-3 px-4 flex border-b border-gray-500 ">
        <div className="flex gap-3 items-center justify-between w-full">
          <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
          <input
            type="text"
            placeholder="What's Happening?!"
            className={`w-full flex items-center bg-transparent resize-none outline-none font-px-regular text-base font-normal text-neutral-50 `}
          />
          {/* <textarea
            className={`w-full flex items-center bg-white resize-none outline-none font-px-regular text-base font-normal text-neutral-50 `}
            cols={50}
            //   value="Hello"
            //   onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's Happening?!"
          /> */}
        </div>
        <button className="py-[6px]  px-[24px] justify-center align-center flex gap-[10px] rounded-[9999px] bg-twitter-blue">
          <span className="text-center text-base font-bold">Post</span>
        </button>
      </section>
      <section className="flex flex-col h-fit overflow-hidden overflow-y-scroll">
        {tweets.map((tweet) => (
          // Render each tweet using your Tweet component
          <Tweet
            key={tweet.id}
            avatar={avatar3}
            commentLogo={comment}
            retweetLogo={retweet}
            heartLogo={heart}
            reachLogo={reach}
            shareLogo={share}
            name="Monkey D Luffy"
            handle="monkeyDLuffy"
            timestamp="2hrs"
            text={tweet.text}
            tweetId={tweet.id}
          />
        ))}
      </section>
    </div>
  );
}

export default Feed;
