import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const TweetContext = createContext();

export function useTweetContext() {
  return useContext(TweetContext);
}

export function TweetProvider({ children }) {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  const contextValue = {
    tweets,
    addTweet,
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
