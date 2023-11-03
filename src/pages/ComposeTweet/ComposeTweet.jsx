import avatar from "../../assets/avatar.png";
import ComposeTweetHeader from "../../components/ComposeTweet/ComposeTweetHeader";

function ComposeTweet() {
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen">
      <ComposeTweetHeader />
      <section className="py-3 px-4 flex gap-3">
        <img src={avatar} alt="user" className="w-9 h-9 flex-shrink-0" />
        <textarea
          className="w-full bg-transparent resize-none outline-none font-px-regular text-base font-normal text-neutral-50"
          cols={30}
          rows={10}
          placeholder="What's Happening?!"
        />
      </section>
      <section className="flex items-end h-[604px]">
        <span className="py-3 px-4 border-t w-full border-neutral-800 text-neutral-500 font-px-regular font-normal">
          0/280
        </span>
      </section>
    </div>
  );
}

export default ComposeTweet;
