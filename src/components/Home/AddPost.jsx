import { Link } from "react-router-dom";
import add from "../../assets/add.svg";

function AddPost() {
  return (
    <Link to="/compose-tweet">
      <div className="inline-flex w-16 h-16 p-4 bg-twitter-blue rounded-full absolute right-4 bottom-20">
        <img src={add} alt="post" />
      </div>
    </Link>
  );
}

export default AddPost;
