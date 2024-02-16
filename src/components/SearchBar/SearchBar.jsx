import { CiSearch } from "react-icons/ci";
const SearchBar = ({ searchPuppyHandler }) => {
  return (
    <div className="flex items-center ">
      <input
        onChange={searchPuppyHandler}
        type="text"
        placeholder="Search a dog..."
      />
      <div className="mr-1 bg-white h-6 pt-1">
        <CiSearch></CiSearch>
      </div>
    </div>
  );
};

export default SearchBar;
