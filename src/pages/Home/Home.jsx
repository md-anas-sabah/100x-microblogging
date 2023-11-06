import avatar3 from "../../assets/avatar3.png";
import comment from "../../assets/comment.png";
import retweet from "../../assets/retweet.png";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import reach from "../../assets/reach.svg";

import Tweet from "../../components/Home/Tweet";
import AddPost from "../../components/Home/AddPost";
import Toast from "../../components/Home/Toast";
import Menu from "../../components/Home/Menu";
import Avatar from "../../components/Home/Avatar";
import Logo from "../../components/Home/Logo";
import { useTweetContext } from "../../context/TweetContext";

const copyContent = false;

const Home = () => {
  const { tweets } = useTweetContext();
  console.log(tweets);
  return (
    <div className="relative flex flex-col bg-neutral-1000 h-screen w-screen">
      <Avatar />
      <Logo />
      <div className="flex flex-col pt-5 px-20 gap-160 justify-center items-center border-b border-neutral-700">
        <div className="flex justify-center items-center gap-160 flex-shrink-0">
          <div className="flex flex-col justify-between group">
            <span className="text-neutral-50 font-chirp text-base pb-[16px]">
              For You
            </span>
            <div className="rounded-5.5xl bg-twitter-blue w-14 h-[3px]" />
          </div>
          <div className="flex flex-col justify-between">
            <span className="text-neutral-400 font-chirp text-base pb-[16px]">
              Following
            </span>
            <div className="rounded-5.5xl bg-twitter-blue w-14 h-[3px] invisible" />
          </div>
        </div>
      </div>
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
      <AddPost />
      <div className="flex justify-center">{copyContent && <Toast />}</div>
      <Menu />
    </div>
  );
};

export default Home;
