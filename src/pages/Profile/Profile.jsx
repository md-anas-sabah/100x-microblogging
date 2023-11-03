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

const Profile = () => {
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
      <div className="flex flex-col h-fit overflow-hidden overflow-y-scroll">
        <ProfileHeader />
        <UserBio />
        <Tweet
          avatar={avatar3}
          commentLogo={comment}
          retweetLogo={retweet}
          heartLogo={heart}
          reachLogo={reach}
          shareLogo={share}
          name="Monkey D Luffy"
          handle="monkeyDLuffy"
          timestamp="2hrs"
        />
        <Tweet
          avatar={avatar3}
          commentLogo={comment}
          retweetLogo={retweet}
          heartLogo={heart}
          reachLogo={reach}
          shareLogo={share}
          name="Monkey D Luffy"
          handle="monkeyDLuffy"
          timestamp="2hrs"
        />
        <Tweet
          avatar={avatar3}
          commentLogo={comment}
          retweetLogo={retweet}
          heartLogo={heart}
          reachLogo={reach}
          shareLogo={share}
          name="Monkey D Luffy"
          handle="monkeyDLuffy"
          timestamp="2hrs"
        />
      </div>
      <AddPost />
    </div>
  );
};

export default Profile;
