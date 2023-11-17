import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import onClickRetweet from "../../assets/onClickRetweet.svg";
import onClickLike from "../../assets/onClickLike.svg";

import { useTweetContext } from "../../context/TweetContext";

function Tweet({
  avatar,
  commentLogo,
  retweetLogo,
  heartLogo,
  reachLogo,
  shareLogo,
  name = "Display name",
  handle = "username",
  text = "Write your tweet here.",
  commentCount = 0,
  reachCount = 0,
  timestamp = "0hrs",
  tweetId,
}) {
  const [retweet, setRetweet] = useState(false);
  const [like, setLike] = useState(false);
  const [localLike, setLocalLike] = useState(false);
  const [localRetweet, setLocalRetweet] = useState(false);
  const { likeTweet, retweetTweet, tweets } = useTweetContext();
  const tweet = tweets.find((t) => t.id === tweetId);

  useEffect(() => {
    setLocalLike(tweet.liked);
    setLocalRetweet(tweet.retweeted);
  }, [tweet]);

  const handleLikeClick = () => {
    likeTweet(tweetId);
    setLocalLike(!localLike);
    setLike(!like);
  };

  const handleRetweetClick = () => {
    retweetTweet(tweetId);
    setLocalRetweet(!localRetweet);
    setRetweet(!retweet);
  };

  return (
    <div className="flex  w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
      <img
        src={avatar}
        alt="user"
        className="w-9 h-9 flex-shrink-0 rounded-full object-contain"
      />
      <section className="w-full">
        <div className="flex flex-col gap-1 self-stretch">
          <div className="flex gap-2 items-center self-stretch">
            <p className="text-neutral-50 text-base font-px-regular font-medium">
              {name}
            </p>
            <span className="text-neutral-500 font-px-regular font-normal text-base">
              @{handle} • {timestamp}
            </span>
          </div>
          <div className="text-neutral-50 self-stretch font-px-regular text-base font-normal">
            {text}
          </div>
        </div>
        <div className="flex py-3 justify-between items-center self-stretch">
          <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
            <img src={commentLogo} alt="comment" />
            {commentCount}
          </span>
          <span
            onClick={handleRetweetClick}
            className={`flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer`}
          >
            <img src={retweet ? onClickRetweet : retweetLogo} alt="retweets" />
            {tweet.retweetCount}
          </span>
          <span
            onClick={handleLikeClick}
            className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer"
          >
            <img src={like ? onClickLike : heartLogo} alt="like" />
            {tweet.likeCount}
          </span>
          <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
            <img src={reachLogo} alt="reach" />
            {reachCount}
          </span>
          <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
            <img src={shareLogo} alt="share" />
          </span>
        </div>
      </section>
    </div>
  );
}

export default Tweet;

Tweet.propTypes = {
  avatar: PropTypes.string.isRequired,
  commentLogo: PropTypes.string.isRequired,
  retweetLogo: PropTypes.string.isRequired,
  heartLogo: PropTypes.string.isRequired,
  reachLogo: PropTypes.string.isRequired,
  shareLogo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  text: PropTypes.string,
  commentCount: PropTypes.number,
  reachCount: PropTypes.number,
  tweetId: PropTypes.number,
};
