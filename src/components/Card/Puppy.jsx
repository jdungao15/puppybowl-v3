import "./Puppy.css";
const Puppy = ({ puppy }) => {
  const { breed, name, status, imageUrl, teamId } = puppy;
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <h2>{status}</h2>
      <h3>{breed}</h3>
    </div>
  );
};

export default Puppy;
