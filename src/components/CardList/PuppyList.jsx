import { Link } from "react-router-dom";
const PuppyList = ({ puppies }) => {
  return (
    <div className="grid grid-cols-5 gap-3 md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1">
      {puppies.map((puppy) => {
        return (
          <div className="mx-auto marker:basis-auto" key={puppy.id}>
            <h1 className="text-2xl text-center">{puppy.name}</h1>
            <img
              className="size-96 rounded-3xl shadow-2x hover:scale-110 duration-500"
              src={puppy.imageUrl}
              name={puppy.name}
            ></img>
            <Link
              className="rounded-3xl shadowl-md"
              to={`/players/${puppy.id}`}
            >
              See more
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
