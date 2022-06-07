import React, {useState} from "react";

const AddForm = ({addBook}) => {
  const [book, setBook] = useState({
    author: ``,
    name: ``,
    img: ``
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    document.querySelector(`.form__input-file`).value = ``;

    addBook(book);
    setBook({author: ``, name: ``, img: ``});
  };

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setBook({...book, [name]: value});
  };

  const fileChange = (evt) => {
    const FILE_TYPES = [`image/jpeg`, `image/jpg`, `image/png`, `image/webp`];
    const file = evt.target.files[0];

    if (FILE_TYPES.includes(file.type)) {
      const reader = new FileReader();

      reader.addEventListener(`load`, () => {
        setBook({...book, img: reader.result});
      });

      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="form list-book__form" onSubmit={handleSubmit}>
      <p className="form__wrapper">
        <label className="form__label" htmlFor="author">Автор книги</label>
        <input
          className='form__input'
          id = 'author'
          name='author'
          type = 'text'
          value = {book.author}
          placeholder = 'Пушкин А.С.'
          aria-label = 'author'
          onChange = {handleChange}
          required
        />
      </p>

      <p className="form__wrapper">
        <label className="form__label" htmlFor="name">Название книги</label>
        <input
          className='form__input'
          id = 'name'
          name = 'name'
          type = 'text'
          value = {book.name}
          placeholder = 'Евгений Онегин'
          aria-label = 'name'
          onChange = {handleChange}
          required
        />
      </p>

      <p className="form__wrapper">
        <input className="form__input-file" type="file" onChange={fileChange}/>
      </p>

      <button className="form__button" type='input'>Добавить книгу</button>
    </form>
  );
};

export default AddForm;
