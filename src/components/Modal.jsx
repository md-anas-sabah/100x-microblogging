import PropTypes from "prop-types";
function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 flex items-center justify-center" : "hidden"
      }`}
    >
      <div
        className={`${isOpen ? "fixed inset-0 bg-black opacity-80" : ""}`}
      ></div>

      <div
        className={`${isOpen ? "absolute top-[10rem] left-[34rem]" : "hidden"}`}
      >
        <div className="bg-neutral-1000 border-white h-96 w-96 p-4 relative">
          <span
            className="absolute top-2 right-2 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <p>Modal Content Goes Here</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
