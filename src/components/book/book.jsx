import React from "react";
import PropTypes from "prop-types";

const Book = ({id, author, name, img, changeBook, deleteBook}) => {
  return (
    <React.Fragment>
      <li className="card list__item">
        <img className="card__cover" src={img || `img/cover.jpg`} alt="Обложка книги" width="145" height="205"/>

        <p className="card__input">
          <input className="card__text" id={`author-${id}`} type="text" defaultValue={author} readOnly />
          <button className="card__button card__button--change" aria-label="Редактировать" onClick={() => changeBook(id, `author`)}></button>
        </p>

        <p className="card__input">
          <input className="card__text" id={`name-${id}`} type="text" defaultValue={name} readOnly />
          <button className="card__button card__button--change" aria-label="Редактировать" onClick={() => changeBook(id, `name`)}></button>
        </p>


        <button className="card__button card__button--delete" aria-label="Удалить" onClick={() => deleteBook(id)}></button>
      </li>
    </React.Fragment>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  changeBook: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
