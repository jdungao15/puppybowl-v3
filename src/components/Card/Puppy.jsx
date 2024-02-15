import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Puppy.css";

const Puppy = () => {
  const [puppy, setPuppy] = useState(null); // Initialize puppy state
  const { puppyId } = useParams();

  useEffect(() => {
    const getSinglePuppy = async () => {
      try {
        const response = await axios.get(
          `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players/${puppyId}`
        );
        const { player } = response.data.data; // No need for await here
        setPuppy(player);
      } catch (err) {
        console.error(err);
      }
    };
    getSinglePuppy();
  }, [puppyId]); // Ensure useEffect runs when puppyId changes

  return (
    <div>
      {puppy && ( // Check if puppy is available before rendering
        <div>
          <img src={puppy.imageUrl} alt={puppy.name} />
          <h1 className="">{puppy.name}</h1>
          <h2>{puppy.status}</h2>
          <h3>{puppy.breed}</h3>
        </div>
      )}
    </div>
  );
};

export default Puppy;
