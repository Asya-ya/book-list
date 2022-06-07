import React from "react";
import PropTypes from "prop-types";

import Book from "../book/book";

const List = ({list, deleteBook, changeBook}) => {
  return (
    <ul className="list list-book__list">
      {
        list.map((book, i) => {
          return (
            <Book
              key={book.name + i}
              id={book.id}
              author={book.author}
              name={book.name}
              img={book.img}
              deleteBook={deleteBook}
              changeBook={changeBook}
            />
          );
        })
      }
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeBook: PropTypes.func.isRequired,
};

export default List;
