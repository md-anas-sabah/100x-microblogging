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
    console.log(data);
    setFormData(data);
    navigate("/signup/accepted-info");
  };

  return (
    <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen">
      <Header step="1" />
      <SubHeader text="Create your account" />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default AccountInfo;
