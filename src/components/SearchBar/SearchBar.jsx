const SearchBar = ({ searchPuppyHandler }) => {
  return (
    <div>
      <input onChange={searchPuppyHandler}type="text" placeholder="Search a dog..." />
    </div>
  );
};

export default SearchBar;
