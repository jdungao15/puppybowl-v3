import { useState } from "react";
import axios from "axios";

const NewPlayerForm = ({ getPuppyData }) => {
  const [newPlayer, setNewPlayer] = useState({});

  // Handle input change
  const handleChange = (evt) => {
    // Update newPlayer state with the input values
    setNewPlayer({
      ...newPlayer,
      [evt.target.name]: evt.target.value,
    });
  };

  // Handle form submission
  const submitHandler = async (evt) => {
    evt.preventDefault();
    // Here you can do whatever you want with the newPlayer object
    try {
      const response = await axios.post(
        "https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players",
        newPlayer
      );
      getPuppyData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Add New Player</h1>
        <label>
          Name: <input onChange={handleChange} type="text" name="name" />
        </label>
        <label>
          Breed: <input onChange={handleChange} type="text" name="breed" />
        </label>
        <label>
          Status:
          <select onChange={handleChange} name="status">
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <label>
          Image URL:
          <input onChange={handleChange} type="text" name="imageUrl" />
        </label>
        <label>
          Age: <input onChange={handleChange} type="number" name="age" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewPlayerForm;
