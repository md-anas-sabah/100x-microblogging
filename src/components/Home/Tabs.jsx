function Tabs() {
  return (
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
  );
}

export default Tabs;
