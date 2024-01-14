import PropTypes from "prop-types";

function InputFieldset({ getter, setter, name, type, placeholder }) {
  return (
    <fieldset className="custom-fieldset py-3 px-4 md:py-2  items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
      <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px ">
        {name}
      </legend>
      <input
        type={type}
        value={getter}
        onChange={(e) => {
          setter(e.target.value);
        }}
        placeholder={placeholder}
        className="h-full w-full text-white bg-transparent text-xlg md:text-base font-px-regular font-normal outline-none"
      />
    </fieldset>
  );
}

InputFieldset.propTypes = {
  getter: PropTypes.string,
  setter: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputFieldset;
