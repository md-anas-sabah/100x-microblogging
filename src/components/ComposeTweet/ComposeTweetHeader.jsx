import cross from "../../assets/cross.png";
import { Link } from "react-router-dom";

function ComposeTweetHeader() {
  return (
    <header className="flex items-center justify-between py-3 px-4">
      <Link to="/homefeed">
        <img
          src={cross}
          alt="cancel"
          className="cursor-pointer w-6 h-6 flex-shrink-0"
        />
      </Link>
      <button className="flex py-2 px-6 rounded-5.5xl shadow-custom backdrop-blur-custom bg-twitter-blue hover:bg-twitter-blue-hover disabled:bg-twitter-blue-disabled">
        <span className="text-neutral-50 text-center font-px-regular text-14px font-bold disabled:text-neutral-twitter-blue-disabled">
          Post
        </span>
      </button>
    </header>
  );
}

export default ComposeTweetHeader;
