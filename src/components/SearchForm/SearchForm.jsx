import Notiflix from 'notiflix';
import { FormStyled, Input } from './SearchForm.styled';
import { IoSearch } from 'react-icons/io5';

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
    <FormStyled onSubmit={handleSubmit}>
      <Input type="text" name="query" placeholder="enter movie name" />
      <button type="submit">
        <IoSearch />
      </button>
    </FormStyled>
  );
}
