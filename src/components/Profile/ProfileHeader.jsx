import coverImage from "../../assets/coverImage.png";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

function ProfileHeader() {
  return (
    <header className="overflow-hidden">
      <img src={coverImage} alt="cover image" className="w-full" />
      <section className="px-4 flex justify-between relative">
        <img
          src={avatar}
          alt="profile-img"
          className="w-68  h-68 rounded-full border-4 border-neutral-1000 flex-shrink-0 object-fill -mt-8"
        />
        <Link to="/edit-userprofile">
          <button className="absolute right-4 top-2 inline-flex py-2 px-5 justify-center items-center rounded-5.5xl border-1 border-blue-20 shadow-custom backdrop-blur-custom">
            <span className="font-px-regular text-base font-medium text-neutral-50">
              Edit Profile
            </span>
          </button>
        </Link>
      </section>
    </header>
  );
}

export default ProfileHeader;
