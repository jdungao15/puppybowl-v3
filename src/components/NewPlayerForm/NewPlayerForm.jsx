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
    <div className="w-full mt-10">
      <h1 className="text-center mb-10">New Player</h1>
      <form
        id="#puppy-form"
        onSubmit={submitHandler}
        className="max-w-md mx-auto"
      >
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-black text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-amber-300 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            required
          />
          <label
            for="name"
            className="peer-focus:font-medium absolute text-lg text-gray-800 dark:text-amber-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={handleChange}
            type="text"
            name="breed"
            className="block py-2.5 px-0 w-full text-black text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-amber-300 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
            required
          />
          <label
            for="breed"
            className="peer-focus:font-medium absolute text-lg text-gray-800 dark:text-amber-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Breed
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <div className="relative z-0 w-full mb-5 group">
              <input
                onChange={handleChange}
                type="text"
                name="imageUrl"
                className="block py-2.5 px-0 w-full text-black text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-amber-300 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                required
              />
              <label
                for="imageUrl"
                className="peer-focus:font-medium absolute text-lg text-gray-800 dark:text-amber-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image URL
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <div className="relative z-0 w-full mb-5 group">
              <select
                onChange={handleChange}
                type="select"
                name="status"
                className="block py-3.5 px-0 w-full text-black text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-amber-300 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
                required
              >
                <option value="field">Field</option>
                <option value="bench">Bench</option>
              </select>

              <label
                for="name"
                className="peer-focus:font-medium absolute text-lg text-gray-800 dark:text-amber-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Status
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
