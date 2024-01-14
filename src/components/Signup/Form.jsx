import PropTypes from "prop-types";

import ChevronDown from "../../assets/ChevronDown.png";
import Button from "../../components/Button";
import InputFieldset from "./InputFieldset";
import { useFormContext } from "../../context/FormContext";
import { dates, months, years } from "../../utils/utils";

// const BASE_URL = "http://localhost:4000";

function Form({ onSubmit }) {
  const {
    nameInput,
    setNameInput,
    emailInput,
    setEmailInput,
    selectedDay,
    setSelectedDay,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
  } = useFormContext();
  const dateOfBirth = `${selectedDay} ${selectedMonth} ${selectedYear} `;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameInput,
      email: emailInput,
      // day: selectedDay,
      // month: selectedMonth,
      // year: selectedYear,
      dateOfBirth: dateOfBirth,
    };

    // try {
    //   const response = await fetch(`${BASE_URL}/signup`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   console.log(response);
    // } catch (err) {
    //   console.log();
    // }

    onSubmit(formData);
  };

  return (
    <form
      className="flex flex-col h-full justify-between"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-8 md:gap-2 self-stretch">
        <InputFieldset
          name="Name"
          type="text"
          placeholder="Name"
          getter={nameInput}
          setter={setNameInput}
        />
        <InputFieldset
          name="Email"
          type="email"
          placeholder="Email"
          getter={emailInput}
          setter={setEmailInput}
        />
        <div className="flex flex-col gap-2 self-stretch">
          <h3 className="text-neutral-50 font-px-regular text-15px md:text-sm font-bold">
            Date of birth
          </h3>
          <p className="font-px-regular text-14px md:text-xs font-normal text-secondary-text">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
        </div>
        <div className="flex items-center gap-3 self-stretch">
          <fieldset className="w-2/3 group flex py-4 px-3  justify-between items-center md:h-14 self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="group-focus-within:text-twitter-blue font-px-regular text-xs font-medium text-neutral-500 px-1">
              Month
            </legend>
            <select
              required
              name="months"
              id="months"
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
              }}
              className="w-full md:text-sm appearance-none bg-neutral-1000 text-neutral-50 focus:outline-none"
            >
              <option value="Month" hidden className="text-neutral-500">
                Month
              </option>

              {months.map((month) => (
                <option value={month.toLowerCase()} key={month.toLowerCase()}>
                  {month}
                </option>
              ))}
            </select>
            <img src={ChevronDown} alt="ChevronDown" className="h-6 w-6" />
          </fieldset>
          <fieldset className="flex md:h-14 w-1/3 py-4 px-3 justify-between items-center self-stretch rounded-4px border border-neutral-500">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-1">
              Day
            </legend>
            <select
              required
              name="days"
              id="days"
              value={selectedDay}
              onChange={(e) => {
                setSelectedDay(e.target.value);
              }}
              className="w-full md:text-sm appearance-none  bg-neutral-1000 text-neutral-50 focus:outline-none"
            >
              <option value="Day" hidden className="text-neutral-500">
                Day
              </option>
              {dates.map((date) => (
                <option value={date} key={date}>
                  {date}
                </option>
              ))}
            </select>
            <img src={ChevronDown} alt="ChevronDown" className="h-6 w-6" />
          </fieldset>
          <fieldset className="flex md:h-14 w-1/3 py-4 px-3 justify-between items-center self-stretch rounded-4px border border-neutral-500">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-1">
              Year
            </legend>
            <select
              required
              name="years"
              id="years"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
              }}
              className="w-full md:text-sm  appearance-none bg-neutral-1000 text-neutral-50 focus:outline-none"
            >
              <option value="Year" hidden className="text-neutral-500">
                Year
              </option>
              {years.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
            <img src={ChevronDown} alt="ChevronDown" className="h-6 w-6" />
          </fieldset>
        </div>
      </div>
      <div className="flex h-full px-4 flex-col justify-end md:justify-start md:mt-10 self-stretch">
        <Button
          variant="default"
          text="Create account"
          disabled={
            nameInput === "" ||
            emailInput === "" ||
            selectedDay === "" ||
            selectedMonth === " " ||
            selectedYear === ""
          }
        />
      </div>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

export default Form;
