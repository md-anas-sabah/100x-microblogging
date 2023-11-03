import NavigateBack from "../../assets/NavigateBack.svg";
import Camera from "../../assets/Camera.svg";
import Cross from "../../assets/Cross.png";
import coverImage from "../../assets/coverImage.png";
import avatar from "../../assets/avatar.png";

function EditProfile() {
  return (
    <div className="flex flex-col gap-3 h-screen w-screen bg-neutral-1000 px-4 py-0">
      <header className="flex justify-between py-3 self-stretch">
        <a href="./index.html" className="flex items-center gap-4">
          <img src={NavigateBack} alt="back" />
          <span className="text-neutral-50 font-px-regular text-base font-bold">
            Edit Profile
          </span>
        </a>
        <button className="flex py-2 px-5 items-center justify-center gap-10 rounded-30px bg-neutral-50 backdrop-blur-custom shadow-custom">
          <span className="font-px-regular text-sm font-bold">Save</span>
        </button>
      </header>
      <section>
        <img
          src={coverImage}
          alt="cover image"
          className="flex-shrink-0 w-screen"
        />
        <div className="flex justify-center gap-2 -mt-20">
          <img
            src={Camera}
            alt="change"
            className="flex p-1 justify-center items-center rounded-full bg-opac-edit"
          />
          <img
            src={Cross}
            alt="remove"
            className="flex p-1 justify-center items-center rounded-full bg-opac-edit"
          />
        </div>
      </section>
      <section className="relative">
        <img
          src={avatar}
          alt="profile-img"
          className="w-20 h-20 rounded-full border-4 border-neutral-1000 flex-shrink-0 object-fill -mt-6 ml-2 z-50"
        />
        <img
          src={Camera}
          alt="change"
          className="flex p-1 justify-center items-center rounded-full bg-opac-edit absolute top-0 left-8"
        />
      </section>
      <section className="flex flex-col items-center gap-5 self-stretch">
        <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
          <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
            Name
          </legend>
          <input
            type="text"
            placeholder="Name"
            className="h-full w-full text-white bg-transparent text-15px font-px-regular font-normal outline-none"
          />
        </fieldset>
        <fieldset className="custom-fieldset h-102px py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
          <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
            Bio
          </legend>
          <textarea
            name
            id
            cols={30}
            rows={3}
            placeholder="Enter bio"
            className="text-15px w-full bg-transparent resize-none focus:outline-none text-neutral-50 placeholder:text-neutral-500"
          />
        </fieldset>
        <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
          <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
            Location
          </legend>
          <input
            type="text"
            placeholder="Location"
            className="h-full w-full text-white bg-transparent text-15px font-px-regular font-normal outline-none"
          />
        </fieldset>
        <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
          <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
            Website
          </legend>
          <input
            type="text"
            placeholder="Website"
            className="h-full w-full text-white bg-transparent text-15px font-px-regular font-normal outline-none"
          />
        </fieldset>
      </section>
    </div>
  );
}

export default EditProfile;
