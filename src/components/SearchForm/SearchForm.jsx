import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchForm.styled';

export const SearchForm = ({ setSearchParams }) => {
  const [movieInput, setMovieInput] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setMovieInput(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams(movieInput!==""?{ query: movieInput.trim() }:{});
    setMovieInput('');
  };

  return (
    <>
      <Form onSubmit={onFormSubmit}>
        <Input
          onChange={onInputChange}
          type="text"
          name="searchInput"
          value={movieInput}
          placeholder="Введіть назву фільму"
        />
        <Button>Пошук</Button>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
