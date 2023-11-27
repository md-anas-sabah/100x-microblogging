import Tweet from "../../components/Home/Tweet";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import UserBio from "../../components/Profile/UserBio";

import avatar3 from "../../assets/avatar3.png";
import comment from "../../assets/comment.png";
import retweet from "../../assets/retweet.png";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import reach from "../../assets/reach.svg";
import { useTweetContext } from "../../context/TweetContext";

const Feed = () => {
  const { tweets } = useTweetContext();
  return (
    <div className="feed flex flex-col bg-neutral-1000 h-screen w-screen overflow-y-scroll">
      <div className="flex flex-col h-fit ">
        <ProfileHeader />
        <UserBio />
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            avatar={avatar3}
            commentLogo={comment}
            retweetLogo={retweet}
            heartLogo={heart}
            reachLogo={reach}
            shareLogo={share}
            name="Md Anas Sabah"
            handle="AnasSabah"
            timestamp="1min"
            text={tweet.text}
            tweetId={tweet.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
