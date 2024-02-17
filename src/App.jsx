import { useEffect, useState } from "react";
import axios from "axios";
import PuppyList from "./components/CardList/PuppyList";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm/NewPlayerForm";
import Nav from "./components/Nav/Nav";

function App() {
  //States
  const [puppies, setPuppies] = useState([]);
  const [searchPuppy, setSearchPuppy] = useState("");
  const API_URL =
    "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players";

  //Search Handler
  const searchPuppyHandler = (e) => {
    setSearchPuppy(e.target.value);
  };

  //Delete Handler
  const deletePuppyHandler = async (e) => {
    const puppyId = e.target.id;
    try {
      const response = await axios.delete(`${API_URL}/${puppyId}`);
      getPuppyData();
    } catch (err) {
      console.error(err);
    }
  };

  // call api function
  const getPuppyData = async () => {
    try {
      const response = await axios.get(API_URL);
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
    <div className="bg-amber-50 font-riot font-extralight">
      <Nav searchPuppyHandler={searchPuppyHandler}></Nav>

      <PuppyList
        deletePuppy={deletePuppyHandler}
        puppies={filteredPuppies}
      ></PuppyList>
      <div id="puppy-form">
        <NewPlayerForm getPuppyData={getPuppyData}></NewPlayerForm>
      </div>
    </div>
  );
}

export default App;
