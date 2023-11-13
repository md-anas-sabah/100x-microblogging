import search from "../../assets/search.svg";

function RightSidebar() {
  return (
    <div className="text-white flex flex-0 w-56 border-l border-gray-700 py-2 px-4 ">
      <div className="flex w-full bg-searchbar-fill h-8.5 gap-searchbar flex-shrink-0 py-searchbar-top/bottom pr-searchbar-right pl-searchbar-left rounded-search-bar border border-transparent focus-within:border-twitter-blue">
        <img
          src={search}
          alt="searchbox"
          className="w-search-icon h-search-icon "
        />
        <img
          src={search}
          alt="searchbox"
          className="w-search-icon h-search-icon "
        />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-neutral-50 font-chirp font-normal"
        />
      </div>
    </div>
  );
}

export default RightSidebar;
