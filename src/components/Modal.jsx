// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose }) {
  return (
    <div
      className={`${isOpen ? "absolute top-[22rem] left-[45rem]" : "hidden"}`}
    >
      <div className="">
        <span className="" onClick={onClose}>
          &times;
        </span>
        <p>Modal Content Goes Here</p>
      </div>
    </div>
  );
}

export default Modal;
