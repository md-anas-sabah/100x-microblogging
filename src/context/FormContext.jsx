/* eslint-disable react-refresh/only-export-components */
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
  const [password, setPassword] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState("");
  const [verificationData, setVerificationData] = useState("");

  const sendVerificationMail = async (emailInput) => {
    const response = await fetch("http://localhost:4000/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    });

    const data = await response.json();
    setVerificationData(data.otp);
    console.log(data);
  };

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
    password,
    setPassword,
    oneTimePassword,
    setOneTimePassword,
    sendVerificationMail,
    verificationData,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
}

FormContextProvider.propTypes = {
  children: PropTypes.node,
};

export default FormContextProvider;
