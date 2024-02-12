import { Link } from "react-router-dom";
import Puppy from "../Card/Puppy";
const PuppyList = ({ puppies }) => {
  console.log(puppies);
  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <div key={puppy.id}>
            <h1>{puppy.name}</h1>
            <img src={puppy.imageUrl} name={puppy.name}></img>
            <Link to={`/players/${puppy.id}`}>See more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
