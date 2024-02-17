import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Puppy.css";

const Puppy = () => {
  const [puppy, setPuppy] = useState(null); // Initialize puppy state
  const { puppyId } = useParams();

  //Get random name
  const randomName = async () => {
    let name = "";
    try {
      const response = await axios.get("https://randomuser.me/api/");
      name = response.data.results[0].name.first;
    } catch (error) {
      console.error(error);
    }
    return name;
  };
  //Fetch puppy data
  useEffect(() => {
    const getSinglePuppy = async () => {
      try {
        const response = await axios.get(
          `https://fsa-puppy-bowl.herokuapp.com/api/2308-acc-et-web-pt-b/players/${puppyId}`
        );
        const { player } = response.data.data;
        //Get random name from API and add the player data
        console.log(player);
        const newObj = { ...player, owner: await randomName() };
        setPuppy(newObj);
      } catch (err) {
        console.error(err);
      }
    };
    getSinglePuppy();
  }, [puppyId]); // Ensure useEffect runs when puppyId changes

  return (
    <div>
      {puppy && (
        <div className="min-h-screen bg-amber-100 flex justify-center items-center">
          <div className="max-w-xs container bg-amber-200 rounded-xl shadow-lg transform transition duration-500 hover:scale-125 hover:shadow-2xl">
            <div>
              <Link to="/">
                <span className="text-white text-xs font-bold rounded-lg bg-amber-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">
                  Home
                </span>
              </Link>
              <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                {puppy.name}
              </h1>
              <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline">
                <span className="font-medium">Breed:</span> {puppy.breed}
              </p>
              <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline">
                <span className="font-medium">Status: </span>
                {puppy.status}
              </p>
              <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline">
                <span className="font-medium">Cohort ID: </span>
                {puppy.cohortId}
              </p>
              <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline">
                <span className="font-medium">Team ID: </span>
                {puppy.teamId}
              </p>
            </div>
            <img
              className="w-full cursor-pointer"
              src={puppy.imageUrl}
              alt=""
            />
            <div className="flex p-4 justify-between">
              <div className="flex items-center space-x-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
                <h2 className="text-gray-800 font-bold cursor-pointer">
                  {puppy.owner}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Puppy;
