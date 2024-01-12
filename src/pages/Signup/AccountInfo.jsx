/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../../components/Signup/Form";
import Header from "../../components/Signup/Header";
import SubHeader from "../../components/Signup/SubHeader";

function AccountInfo() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    setFormData(data);
    navigate("/signup/accepted-info");
  };

  return (
    <div className=" flex flex-col justify-center md:h-screen bg-neutral-1000  w-screen">
      <div className="flex flex-col h-screen md:h-fit gap-3 md:gap-1 pt-0 pb-5 px-15px md:w-390 md:border md:rounded-md  md:border-gray-700 md:ml-auto md:mr-auto  ">
        <Header step="1" />
        <SubHeader text="Create your account" />
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AccountInfo;
