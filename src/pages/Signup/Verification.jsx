/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import Header from "../../components/Signup/Header";

function Verification() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center md:h-screen bg-neutral-1000 w-screen">
      <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen md:h-fit md:gap-1 md:w-390 md:border md:rounded-md  md:border-gray-700 md:ml-auto md:mr-auto">
        <Header step="3" />
        <section className="flex flex-col gap-10 md:gap-3 self-stretch">
          <div className="flex flex-col gap-2 self-stretch">
            <h1 className="font-px-regular font-bold text-2xl text-neutral-50">
              We sent you a code
            </h1>
            <p className="text-neutral-500 font-px-regular text-sm font-normal">
              Enter it below to verify mdanassabah@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-3 self-stretch">
            <fieldset className="custom-fieldset py-4 px-3 md:py-2 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
              <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
                Verification code
              </legend>
              <input
                type="text"
                placeholder="Verification code"
                className="h-full w-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
            </fieldset>
            <p className="cursor-pointer self-end text-twitter-blue text-sm font-px-regular font-normal">
              Didn't receive a code?
            </p>
          </div>
        </section>
        <section className="flex h-full pt-20 px-4 flex-col justify-end self-stretch">
          <button
            onClick={() => navigate("/signup/create-password")}
            className="py-2 px-6 w-full rounded-4xl bg-neutral-50 shadow-custom backdrop-blur-custom hover:bg-neutral-200 disabled:bg-neutral-700"
          >
            <span className="text-neutral-1000 font-px-regular text-base font-bold text-center">
              Next
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default Verification;
