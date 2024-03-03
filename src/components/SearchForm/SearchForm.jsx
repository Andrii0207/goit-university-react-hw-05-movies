export default function SearchForm({ onHandleSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!e.target.query.value) {
      return alert('Please, enter movie name');
    }

    onHandleSubmit(e.target.query.value);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
