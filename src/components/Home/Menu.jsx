import { Link } from "react-router-dom";

import home from "../../assets/home.svg";
import group from "../../assets/group.svg";

function Menu() {
  return (
    <div className="flex py-18 px-6 justify-center bottom-0 fixed w-full items-center gap-10 bg-neutral-1000 border-t border-neutral-800 ">
      <Link to="/homefeed">
        <img src={home} alt="home" />
      </Link>
      <Link to="/userprofile">
        <img src={group} alt="profile" />
      </Link>
    </div>
  );
}

export default Menu;
