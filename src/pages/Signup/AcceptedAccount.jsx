import { useNavigate } from "react-router-dom";
import tickCircle from "../../assets/tickCircle.png";
import Header from "../../components/Signup/Header";
import SubHeader from "../../components/Signup/SubHeader";
import { useFormContext } from "../../context/FormContext";

function AcceptedAccount() {
  const navigate = useNavigate();
  const {
    nameInput,
    emailInput,
    selectedDay,
    selectedMonth,
    selectedYear,
    sendVerificationMail,
  } = useFormContext();
  const dateOfBirth = `${selectedDay} ${
    selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)
  } ${selectedYear}`;

  const nextPage = () => {
    sendVerificationMail(emailInput);
    navigate("/signup/verify-account");
  };

  return (
    <div className="flex flex-col justify-center md:h-screen bg-neutral-1000 w-screen">
      <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen md:h-fit md:gap-1 md:w-390 md:border md:rounded-md  md:border-gray-700 md:ml-auto md:mr-auto">
        <Header step="2" />
        <SubHeader text="Create your account" />
        <section className="flex flex-col gap-5  self-stretch">
          <div className="flex flex-col items-center gap-8 md:gap-4 self-stretch">
            <fieldset className="custom-fieldset py-4 px-3 md:py-2  items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
              <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
                Name
              </legend>
              <div className="flex justify-between">
                <input
                  readOnly
                  type="text"
                  placeholder="Name"
                  value={nameInput}
                  className="h-full w-full text-white md:text-base bg-transparent text-xlg font-px-regular font-normal outline-none"
                />
                <img src={tickCircle} alt="success" />
              </div>
            </fieldset>
            <fieldset className="custom-fieldset py-4 px-3 md:py-2 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
              <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
                Email
              </legend>
              <div className="flex justify-between">
                <input
                  readOnly
                  type="email"
                  placeholder="Email"
                  value={emailInput}
                  className="h-full w-full md:text-base text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
                />
                <img src={tickCircle} alt="visible" />
              </div>
            </fieldset>
            <fieldset className="custom-fieldset py-4 px-3 md:py-2 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
              <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
                Date of birth
              </legend>
              <div className="flex justify-between">
                <input
                  readOnly
                  type="text"
                  value={dateOfBirth}
                  placeholder="Date of birth"
                  className="h-full w-full md:text-base text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
                />
                <img src={tickCircle} alt="success" />
              </div>
            </fieldset>
          </div>
        </section>
        <section className="flex h-full px-4 flex-col justify-end self-stretch">
          <button
            className="p-5 w-full md:mt-10 md:p-2 rounded-full bg-twitter-blue shadow-custom backdrop-blur-custom"
            onClick={nextPage}
          >
            <span className="text-neutral-50 font-px-regular text-base font-bold text-center">
              Sign up
            </span>
          </button>
        </section>
      </div>
    </div>
  );
}

export default AcceptedAccount;
