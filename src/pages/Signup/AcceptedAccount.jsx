import tickCircle from "../../assets/tickCircle.png";
import Header from "../../components/Signup/Header";
import SubHeader from "../../components/Signup/SubHeader";

function AcceptedAccount() {
  return (
    <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen">
      <Header step="2" />
      <SubHeader text="Create your account" />
      <section className="flex flex-col gap-5 self-stretch">
        <div className="flex flex-col items-center gap-8 self-stretch">
          <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
              Name
            </legend>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Name"
                className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
              <img src={tickCircle} alt="success" />
            </div>
          </fieldset>
          <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
              Email
            </legend>
            <div className="flex justify-between">
              <input
                type="email"
                placeholder="Email"
                className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
              <img src={tickCircle} alt="visible" />
            </div>
          </fieldset>
          <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
              Date of birth
            </legend>
            <div className="flex justify-between">
              <input
                type="text"
                name
                id
                placeholder="Date of birth"
                className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
              <img src={tickCircle} alt="success" />
            </div>
          </fieldset>
        </div>
      </section>
      <section className="flex h-full px-4 flex-col justify-end self-stretch">
        <a href="./create-account-step-3.html">
          <button className="p-5 w-full rounded-full bg-twitter-blue shadow-custom backdrop-blur-custom">
            <span className="text-neutral-50 font-px-regular text-base font-bold text-center">
              Sign up
            </span>
          </button>
        </a>
      </section>
    </div>
  );
}

export default AcceptedAccount;
