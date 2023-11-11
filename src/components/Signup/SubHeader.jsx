import PropTypes from "prop-types";

function SubHeader({ text }) {
  return (
    <section className="flex flex-col gap-5 self-stretch">
      <h1 className="font-px-regular font-bold text-2xl md:text-xl text-neutral-50 ">
        {text}
      </h1>
    </section>
  );
}

SubHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubHeader;
