import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const TweetContext = createContext();

export function useTweetContext() {
  return useContext(TweetContext);
}

export function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    newTweet = { ...newTweet, likeCount: 0, retweetCount: 0 };
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const likeTweet = (tweetId) => {
    setTweets((prevTweets) => {
      return prevTweets.map((tweet) => {
        if (tweet.id === tweetId) {
          const liked = !tweet.liked;
          const likeCount = liked ? tweet.likeCount + 1 : tweet.likeCount - 1;
          return { ...tweet, liked, likeCount };
        }
        return tweet;
      });
    });
  };

  const retweetTweet = (tweetId) => {
    setTweets((prevTweets) => {
      return prevTweets.map((tweet) => {
        if (tweet.id === tweetId) {
          const retweeted = !tweet.retweeted;
          const retweetCount = retweeted
            ? tweet.retweetCount + 1
            : tweet.retweetCount - 1;
          return { ...tweet, retweeted, retweetCount };
        }
        return tweet;
      });
    });
  };

  const contextValue = {
    tweets,
    addTweet,
    likeTweet,
    retweetTweet,
  };

  return (
    <TweetContext.Provider value={contextValue}>
      {children}
    </TweetContext.Provider>
  );
}

TweetProvider.propTypes = {
  children: PropTypes.node,
};
