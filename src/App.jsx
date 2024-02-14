import { useEffect, useState } from "react";
import axios from "axios";
import PuppyList from "./components/CardList/PuppyList";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import NewPlayerForm from "./components/NewPlayerForm/NewPlayerForm";

function App() {
  //States
  const [puppies, setPuppies] = useState([]);
  const [searchPuppy, setSearchPuppy] = useState("");

  //Search Handler
  const searchPuppyHandler = (e) => {
    setSearchPuppy(e.target.value);
  };
  const getPuppyData = async () => {
    try {
      const response = await axios.get(
        "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players"
      );
      const { players } = response.data.data;
      setPuppies(players);
    } catch (err) {
      console.error(err);
    }
  };

  //Retrieve puppy data from API
  useEffect(() => {
    getPuppyData();
  }, []);

  // Filter puppies when searchPuppy changes
  const filteredPuppies = puppies.filter((puppy) =>
    puppy.name.toLowerCase().includes(searchPuppy.toLowerCase())
  );

  return (
    <>
      <SearchBar searchPuppyHandler={searchPuppyHandler}></SearchBar>
      <PuppyList puppies={filteredPuppies}></PuppyList>
      <NewPlayerForm getPuppyData={getPuppyData}></NewPlayerForm>
    </>
  );
}

export default App;
