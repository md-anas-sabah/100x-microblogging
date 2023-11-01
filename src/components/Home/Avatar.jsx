import avatar from "../../assets/avatar.png";
const Avatar = () => {
  return (
    <div className="relative">
      <img
        src={avatar}
        alt="user"
        className="w-9 h-9 flex-shrink-0 absolute left-3 top-1"
      />
    </div>
  );
};

export default Avatar;
