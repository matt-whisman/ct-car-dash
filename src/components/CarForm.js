export default function CarForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input type="text" name="year" id="" />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}
