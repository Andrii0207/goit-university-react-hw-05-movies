import Notiflix from 'notiflix';

export default function SearchForm({ onHandleSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    if (!e.target.query.value) {
      return Notiflix.Notify.info('Please, enter movie name', {
        timeout: 3000,
      });
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
