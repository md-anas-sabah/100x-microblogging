import LinkIcon from "../../assets/LinkIcon.svg";
import CalenderIcon from "../../assets/CalenderIcon.svg";
import { Link } from "react-router-dom";

function UserBio() {
  return (
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
          Aspiring to be a full stack developer || @100xengineers &apos;23
        </div>
        <div className="flex gap-4">
          <Link to="/userprofile" className="flex items-center gap-1">
            <img src={LinkIcon} alt="link" className />
            <span className="text-twitter-blue">pixsellz.io</span>
          </Link>
          <span className="flex gap-1">
            <img src={CalenderIcon} alt="calender" />
            <p className="font-px-regular font-base text-neutral-500 font-normal">
              Joined May 2019
            </p>
          </span>
        </div>
        <div className="flex gap-4">
          <p className="font-px-regular font-base font-medium text-neutral-500">
            <span className="font-medium text-base text-neutral-50 mr-1">
              217
            </span>
            Following
          </p>
          <p className="font-px-regular font-base font-medium text-neutral-500">
            <span className="font-medium text-base text-neutral-50 mr-1">
              118
            </span>
            Followers
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserBio;
