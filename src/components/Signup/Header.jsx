/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import cross from "../../assets/cross.png";

function Header({ step }) {
  const navigate = useNavigate();
  return (
    <header className="bg-neutral-1000 flex flex-col py-3">
      <div className="flex gap-5 self-stretch">
        <img
          src={cross}
          alt="cancel"
          className="cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        />
        <h1 className="font-px-regular text-15px font-bold text-neutral-50">
          Step {step} of 4
        </h1>
      </div>
    </header>
  );
}

export default Header;
