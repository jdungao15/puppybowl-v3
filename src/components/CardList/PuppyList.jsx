import { Link } from "react-router-dom";
const PuppyList = ({ puppies, deletePuppy }) => {
  return (
    <div className="grid grid-cols-5 gap-3 md:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1">
      {puppies.map((puppy) => {
        return (
          <div className="mx-auto marker:basis-auto" key={puppy.id}>
            <h1 className="text-2xl text-center">{puppy.name}</h1>
            <img
              className="size-96 rounded-3xl shadow-xl hover:scale-105 duration-500"
              src={puppy.imageUrl}
              name={puppy.name}
            ></img>
            <div className="flex justify-between">
              <Link to={`/players/${puppy.id}`}>
                <button className="bg-amber-200 hover:bg-amber-300 text-black font-bold py-1 px-2 my-4 rounded">
                  See More
                </button>
              </Link>
              <button
                className="text-black py-1 px-2 my-4 rounded bg-amber-400 hover:bg-amber-500"
                id={puppy.id}
                onClick={deletePuppy}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
