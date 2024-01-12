import PropTypes from "prop-types";

import ChevronDown from "../../assets/ChevronDown.png";
import Button from "../../components/Button";
import InputFieldset from "./InputFieldset";
import { useFormContext } from "../../context/FormContext";

const BASE_URL = "http://localhost:4000";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: nameInput,
      email: emailInput,
      day: selectedDay,
      month: selectedMonth,
      year: selectedYear,
    };

    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
    } catch (err) {
      console.log();
    }

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
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
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
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
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
              <option value={1999}>1999</option>
              <option value={2000}>2000</option>
              <option value={2001}>2001</option>
              <option value={2002}>2002</option>
              <option value={2003}>2003</option>
              <option value={2004}>2004</option>
              <option value={2005}>2005</option>
              <option value={2006}>2006</option>
              <option value={2007}>2007</option>
              <option value={2008}>2008</option>
              <option value={2009}>2009</option>
              <option value={2010}>2010</option>
              <option value={2011}>2011</option>
              <option value={2012}>2012</option>
              <option value={2013}>2013</option>
              <option value={2014}>2014</option>
              <option value={2015}>2015</option>
              <option value={2016}>2016</option>
              <option value={2017}>2017</option>
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
              <option value={2021}>2021</option>
              <option value={2022}>2022</option>
              <option value={2023}>2023</option>
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
