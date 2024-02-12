import { useEffect, useState } from "react";
import axios from "axios";
import PuppyList from "./components/CardList/PuppyList";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState([]);

  useEffect(() => {
    const getPuppyData = async () => {
      try {
        const response = await axios.get(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players"
        );
        const { players } = await response.data.data;
        setPuppies(players);
      } catch (err) {
        console.error(err);
      }
    };
    getPuppyData();
  }, []);

  return (
    <>
      <PuppyList puppies={puppies}></PuppyList>
    </>
  );
}

export default App;
