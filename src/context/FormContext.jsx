import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}



function FormContextProvider({ children }) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const contextValue = {
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
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

FormContextProvider.propTypes = {
  children: PropTypes.node,
};

export default FormContextProvider;
