import React from "react";

import Book from "../book/book.jsx";

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

export default List;
