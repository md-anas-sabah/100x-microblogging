/* eslint-disable react/prop-types */
function Button({ size = "md", text="Create your button", variant, disabled }) {
  const baseStyle = `flex w-full py-2 px-6 justify-center items-center rounded-4xl`;

  const sizeStyle = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };

  const disabledStyle = disabled ? "cursor-not-allowed opacity-50" : "";
  const variantStyles = {
    default:
      "bg-neutral-50 text-neutral-1000 font-px-regular text-base font-bold text-center shadow-custom backdrop-blur-custom hover:bg-neutral-200",
    outline:
      "border-1 border-blue-20 shadow-custom backdrop-blur-custom font-chirp text-base font-bold text-twitter-blue",
  };

  const classes = `${baseStyle} ${sizeStyle[size]} ${variantStyles[variant]} ${disabledStyle}
  }`;
  return (
    <button className={classes} disabled={disabled}>
      {text}
    </button>
  );
}

// Button.propTypes = {
//   size:
// }

export default Button;
