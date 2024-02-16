import SearchBar from "../SearchBar/SearchBar";
const Nav = ({ searchPuppyHandler }) => {
  return (
    <div className="flex justify-between bg-amber-100 sticky top-0 font-riot">
      <h2 className="text-2xl">Puppybowl</h2>
      <div className="flex items-center">
        <SearchBar searchPuppyHandler={searchPuppyHandler}></SearchBar>
        <h2 className="ml-10 mr-5">Add Player</h2>
      </div>
    </div>
  );
};

export default Nav;
