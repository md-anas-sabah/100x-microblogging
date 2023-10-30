/* eslint-disable react/prop-types */
function InputFieldset({ getter, setter, name, type, placeholder }) {
  return (
    <fieldset className="custom-fieldset py-3 px-4 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
      <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
        {name}
      </legend>
      <input
        type={type}
        value={getter}
        onChange={(e) => {
          setter(e.target.value);
        }}
        placeholder={placeholder}
        className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
      />
    </fieldset>
  );
}

export default InputFieldset;
