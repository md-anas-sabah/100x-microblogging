import option from "../../assets/option.svg";
import PropTypes from "prop-types";

function Trending({ trending, numberOfPosts }) {
  return (
    <div className="flex  justify-between  items-center w-full py-[10px] gap-[15px]">
      <div>
        <p className="text-sm font-normal text-neutral-500">Trending</p>
        <h3 className="text-[15px] font-bold ">#{trending}</h3>
        <p className="text-sm font-normal text-neutral-500 ">
          {numberOfPosts} posts
        </p>
      </div>

      <img src={option} alt="option" />
    </div>
  );
}

Trending.propTypes = {
  trending: PropTypes.string.isRequired,
  numberOfPosts: PropTypes.string.isRequired,
};

export default Trending;
