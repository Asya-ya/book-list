import React, {useState} from "react";

const AddForm = ({addBook}) => {
  const [book, setBook] = useState({
    author: ``,
    name: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addBook(book);
    setBook({author: ``, name: ``});
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setBook({...book, [name]: value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="author">Автор книги</label>
      <input
        id = 'author'
        name='author'
        type = 'text'
        value = {book.author}
        placeholder = 'Пушкин А.С.'
        aria-label = 'author'
        onChange = {handleChange}
        required
      />

      <label htmlFor="name">Название книги</label>
      <input
        id = 'name'
        name = 'name'
        type = 'text'
        value = {book.name}
        placeholder = 'Евгений Онегин'
        aria-label = 'name'
        onChange = {handleChange}
        required
      />

      <button type='input'>Добавить книгу</button>
    </form>
  );
};

export default AddForm;
