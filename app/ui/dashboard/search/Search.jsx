import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center w-max  bg-[#2e374a] rounded-full px-4">
      <MdSearch size={20} />
      <input
        type="text"
        className="bg-transparent border-none outline-none focus:ring-transparent"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Search;
