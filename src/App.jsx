import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [puppy, setPuppy] = useState([]);

  useEffect(() => {
    const getPuppyData = async () => {
      try {
        const response = await axios.get(
          "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players"
        );
        const { players } = await response.data.data;
        setPuppy(players);
      } catch (err) {
        console.error(err);
      }
    };
    getPuppyData();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default App;
