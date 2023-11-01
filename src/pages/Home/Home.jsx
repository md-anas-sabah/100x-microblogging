import avatar from "../../assets/avatar.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import logo from "../../assets/logo.png";
import comment from "../../assets/comment.png";
import retweet from "../../assets/retweet.png";
import heart from "../../assets/heart.png";
import share from "../../assets/share.png";
import reach from "../../assets/reach.svg";
import add from "../../assets/add.svg";
import home from "../../assets/home.svg";
import group from "../../assets/group.svg";

const Home = () => {
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
      <div className="relative">
        <img
          src={avatar}
          alt="user"
          className="w-9 h-9 flex-shrink-0 absolute left-3 top-1"
        />
      </div>
      <header className="flex justify-center gap-128 py-3 px-4 border-b border-neutral-700">
        <div className="flex gap-2px justify-center">
          <img
            src={logo}
            alt="logo"
            className="h-mobile-view-logo w-mobile-view-logo"
          />
        </div>
      </header>
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
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src={avatar1}
            alt="user"
            className="w-9 h-9 flex-shrink-0 rounded-full object-contain"
          />
          <section className="w-full">
            <div className="flex flex-col gap-1 self-stretch">
              <div className="flex gap-2 items-center self-stretch">
                <p className="text-neutral-50 text-base font-px-regular font-medium">
                  Name
                </p>
                <span className="text-neutral-500 font-px-regular font-normal text-base">
                  @handle • 32m
                </span>
              </div>
              <div className="text-neutral-50 self-stretch font-px-regular text-base font-normal">
                Do not wish for it, work for it.
              </div>
            </div>
            <div className="flex py-3 justify-between items-center self-stretch">
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={comment} alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={retweet} alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={heart} alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={reach} alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={share} alt="share" />
              </span>
            </div>
          </section>
        </div>
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src={avatar3}
            alt="user"
            className="w-9 h-9 flex-shrink-0 rounded-full object-contain"
          />
          <section className="w-full">
            <div className="flex flex-col gap-1 self-stretch">
              <div className="flex gap-2 items-center self-stretch">
                <p className="text-neutral-50 text-base font-px-regular font-medium">
                  Name
                </p>
                <span className="text-neutral-500 font-px-regular font-normal text-base">
                  @handle • 10h
                </span>
              </div>
              <div className="text-neutral-50 self-stretch font-px-regular text-base font-normal">
                i've seen people absolutely despise auto layout in figma but I
                think it's a lifesaver-
                <br />
                1. tidies everything nice and compact
                <br />
                2. makes responsive design effortless
                <br />
                3. no manual adjustments post any tweaks
                <br />
                4. saves a ton of time
                <br />
                <br />
                Sorry, but I will stay an auto layout maxi all my life.
              </div>
            </div>
            <div className="flex py-3 justify-between items-center self-stretch">
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={comment} alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={retweet} alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={heart} alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={reach} alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={share} alt="share" />
              </span>
            </div>
          </section>
        </div>
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src={avatar2}
            alt="user"
            className="w-9 h-9 flex-shrink-0 rounded-full object-contain"
          />
          <section className="w-full">
            <div className="flex flex-col gap-1 self-stretch">
              <div className="flex gap-2 items-center self-stretch">
                <p className="text-neutral-50 text-base font-px-regular font-medium">
                  Name
                </p>
                <span className="text-neutral-500 font-px-regular font-normal text-base">
                  @handle • 32m
                </span>
              </div>
              <div className="text-neutral-50 self-stretch font-px-regular text-base font-normal">
                Writing gets easier after the first sentence. <br />
                <br />
                Lifting gets easier after the first set. <br />
                <br />
                People think and think and think until they finally decide to
                act. Their attention shifts from internal to external, and the
                difficulty they created in their mind vanishes.
              </div>
            </div>
            <div className="flex py-3 justify-between items-center self-stretch">
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={comment} alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={retweet} alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={heart} alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={reach} alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src={share} alt="share" />
              </span>
            </div>
          </section>
        </div>
      </section>
      <a href="../compose-tweet/index.html">
        <div className="inline-flex w-16 h-16 p-4 bg-twitter-blue rounded-full absolute right-2 bottom-20">
          <img src={add} alt="post" />
        </div>
      </a>
      <div className="flex py-18 px-6 justify-center bottom-0 fixed w-full items-center gap-10 bg-neutral-1000 border-t border-neutral-800">
        {/* <div className="flex justify-center bg-searchbar-fill py-3 px-8 text-center absolute bottom-20 rounded-100">
          <p className="font-px-regular text-15px text-neutral-50 font-normal">
            Copied to clipboard
          </p>
        </div> */}

        <a href="#">
          <img src={home} alt="home" />
        </a>
        <a href="../user-profile/index.html">
          <img src={group} alt="profile" />
        </a>
      </div>
    </div>
  );
};

export default Home;
