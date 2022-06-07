import React from "react";

import Book from "../book/book.jsx";

const List = ({list, deleteBook, changeBook}) => {
  return (
    <ul>
      {
        list.map((book, i) => {
          return (
            <Book
              key={book.name + i}
              id={book.id}
              author={book.author}
              name={book.name}
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
