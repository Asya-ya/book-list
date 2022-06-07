import React from "react";

const Book = ({id, author, name, changeBook, deleteBook}) => {
  return (
    <React.Fragment>
      <li>
        <input className={`${id}`} type="text" defaultValue={author} readOnly/>
        <input className={`${id}`} type="text" defaultValue={name} readOnly/>
        <button onClick={() => changeBook(id)}>Редактировать</button>
        <button onClick={() => deleteBook(id)}>Удалить</button>
      </li>
    </React.Fragment>
  );
};

export default Book;
