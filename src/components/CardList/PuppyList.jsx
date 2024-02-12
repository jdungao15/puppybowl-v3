import Puppy from "../Card/Puppy";
const PuppyList = ({ puppies }) => {
  console.log(puppies);
  return (
    <div>
      {puppies.map((puppy) => {
        return (
          <div key={puppy.id}>
            <Puppy puppy={puppy}></Puppy>
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
