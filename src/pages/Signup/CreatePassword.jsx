/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Signup/Header";
import visible from "../../assets/visible.png";
import { useNavigate } from "react-router-dom";

function CreatePassword() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen">
      <Header step="4" />
      <section className="flex flex-col gap-10 self-stretch">
        <div className="flex flex-col gap-2 self-stretch">
          <h1 className="font-px-regular font-bold text-2xl text-neutral-50">
            You'll need a password
          </h1>
          <p className="text-neutral-500 font-px-regular text-sm font-normal">
            Make sure it's 8 character or more
          </p>
        </div>
        <div className="flex flex-col gap-3 self-stretch">
          <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
              Password
            </legend>
            <div className="flex justify-between">
              <input
                type="password"
                name
                id
                placeholder="Password"
                className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
              <img src={visible} alt="success" />
            </div>
          </fieldset>
        </div>
      </section>
      <section className="flex h-full px-4 flex-col justify-end self-stretch">
        <button
          onClick={() => navigate("/homefeed")}
          className="py-2 px-6 w-full rounded-4xl bg-neutral-50 shadow-custom backdrop-blur-custom hover:bg-neutral-200 disabled:bg-neutral-700"
        >
          <span className="text-neutral-1000 font-px-regular text-base font-bold text-center">
            Next
          </span>
        </button>
      </section>
    </div>
  );
}

export default CreatePassword;
