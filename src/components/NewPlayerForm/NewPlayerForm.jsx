const NewPlayerForm = () => {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };
  return (
    <div>
      <form>
        <h1>Add New Player</h1>
        <label>
          Name: <input onChange={handleChange} type="text" name="name"></input>
        </label>
        <label>
          Breed:{" "}
          <input onChange={handleChange} type="text" name="breed"></input>
        </label>
        <label>
          Status:{" "}
          <select onChange={handleChange} type="text" name="status">
            <option value="field">Field</option>
            <option value="bench">Bench</option>
          </select>
        </label>
        <label>
          Image URL:{" "}
          <input onChange={handleChange} type="text" name="imageUrl"></input>
        </label>
        <label>
          Age: <input onChange={handleChange} type="number" name="age"></input>
        </label>
      </form>
    </div>
  );
};
export default NewPlayerForm;
