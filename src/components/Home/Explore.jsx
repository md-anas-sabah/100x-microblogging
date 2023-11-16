import Trending from "./Trending";

/* eslint-disable react/no-unescaped-entities */
function Explore() {
  return (
    <div className="inline-flex flex-col items-start flex-shrink-0 pt-[10px] px-[20px] pb-[14px] bg-neutral-800 rounded-md w-full ">
      <header className="text-xl font-px-regular font-bold ">
        What's happening
      </header>
      <div className="w-full">
        <Trending trending={"Apple"} numberOfPosts={"302k"} />
        <Trending trending={"iMessage"} numberOfPosts={"10.1k"} />
        <Trending trending={"Sanji"} numberOfPosts={"11.4k"} />
      </div>
      <button className="text-[15px] font-px-regular font-normal text-twitter-blue">
        Show more
      </button>
    </div>
  );
}

export default Explore;
