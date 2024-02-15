const SearchBar = ({ searchPuppyHandler }) => {
  return (
    <div className="container">
      <input
        onChange={searchPuppyHandler}
        type="text"
        placeholder="Search a dog..."
      />
    </div>
  );
};

export default SearchBar;
