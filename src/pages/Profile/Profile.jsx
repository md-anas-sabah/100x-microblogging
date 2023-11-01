import ProfileHeader from "../../components/Profile/ProfileHeader";

function Profile() {
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
      <div className="flex flex-col h-fit overflow-hidden overflow-y-scroll">
        <ProfileHeader />
        <section className="px-4 py-2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="font-px-regular text-xl font-bold text-neutral-50">
              Md Anas Sabah
            </h1>
            <p className="font-px-regular text-neutral-500 text-15px font-normal">
              @mdanassabah
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-neutral-50 font-px-regular text-base font-normal">
              Aspiring to be a full stack developer || @100xengineers '23
            </div>
            <div className="flex gap-4">
              <a href className="flex items-center gap-1">
                <img
                  src="../../public/images/link-icon.svg"
                  alt="link"
                  className
                />
                <span className="text-twitter-blue">pixsellz.io</span>
              </a>
              <span className="flex gap-1">
                <img src="../../public/images/calendar-sv.svg" alt="calender" />
                <p className="font-px-regular font-base text-neutral-500 font-normal">
                  Joined May 2019
                </p>
              </span>
            </div>
            <div className="flex gap-4">
              <p className="font-px-regular font-base font-medium text-neutral-500">
                <span className="font-medium text-base text-neutral-50">
                  217
                </span>
                Following
              </p>
              <p className="font-px-regular font-base font-medium text-neutral-500">
                <span className="font-medium text-base text-neutral-50">
                  118
                </span>
                Followers
              </p>
            </div>
          </div>
        </section>
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src="../../public/images/copy-link-user-avatar-2.png"
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
                Don't wish for it, work for it.
              </div>
            </div>
            <div className="flex py-3 justify-between items-center self-stretch">
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/comment-sv.svg" alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/retweet-sv.svg" alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/heart-sv.svg" alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/reach-sv.svg" alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/share-sv.svg" alt="share" />
              </span>
            </div>
          </section>
        </div>
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src="../../public/images/copy-link-user-avatar-3.png"
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
                i've seen people absolutely despise auto layout in figma but i
                think it's a lifesaver-
                <br />
                1. tidies everything nice and compact 2. makes responsive design
                effortless
                <br />
                3. no manual adjustments post any tweaks
                <br />
                4. saves a tonnn of time
                <br />
                <br />
                sorry, but will stay an auto layout maxi all life.
              </div>
            </div>
            <div className="flex py-3 justify-between items-center self-stretch">
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/comment-sv.svg" alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/retweet-sv.svg" alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/heart-sv.svg" alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/reach-sv.svg" alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/share-sv.svg" alt="share" />
              </span>
            </div>
          </section>
        </div>
        <div className="flex w-full bg-neutral-1000 self-stretch py-2 px-4 gap-4 border-b border-neutral-700">
          <img
            src="../../public/images/copy-link-user-avatar-2.png"
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
                <img src="../../public/images/comment-sv.svg" alt="comment" />
                11
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/retweet-sv.svg" alt="retweets" />
                270
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/heart-sv.svg" alt="like" />
                1,869
              </span>
              <span className="flex justify-center items-center gap-2 font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/reach-sv.svg" alt="reach" />
                99.6k
              </span>
              <span className="flex justify-center items-center font-px-regular text-sm text-neutral-500 font-normal cursor-pointer">
                <img src="../../public/images/share-sv.svg" alt="share" />
              </span>
            </div>
          </section>
        </div>
      </div>
      <a href="../compose-tweet/index.html">
        <div className="inline-flex w-16 h-16 p-4 bg-twitter-blue rounded-full absolute right-4 bottom-20">
          <img src="../../public/images/add.svg" alt="post" />
        </div>
      </a>
    </div>
  );
}

export default Profile;
