import Tweet from "../../components/Home/Tweet";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import UserBio from "../../components/Profile/UserBio";

import avatar3 from "../../assets/avatar3.png";
import comment from "../../assets/comment.png";
import retweet from "../../assets/retweet.png";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import reach from "../../assets/reach.svg";
import AddPost from "../../components/Home/AddPost";
import { useTweetContext } from "../../context/TweetContext";

const Profile = () => {
  const { tweets } = useTweetContext();
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
      <div className="flex flex-col h-fit overflow-hidden overflow-y-scroll">
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
      <AddPost />
    </div>
  );
};

export default Profile;
