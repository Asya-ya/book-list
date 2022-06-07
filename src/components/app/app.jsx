import React, {useState, useEffect} from "react";

import AddForm from "../add-form/add-form";
import List from "../list/list";


const App = () => {
  // Получение данных
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem(`list`);
    const initialList = JSON.parse(storedList);
    return initialList || [];
  });

  // Сохранение книги
  const addBook = (book) => {
    const newBook = {
      id: Math.random().toString(36).substr(2, 9),
      author: book.author,
      name: book.name,
      img: book.img
    };

    if (newBook) {
      setList([...list, newBook]);
    }
  };

  // Удаление книги
  const deleteBook = (id) => {
    setList([...list.filter((book) => book.id !== id)]);
  };

  // Редактирование книги
  const changeBook = (id, item) => {
    const editBook = list.find((book) => book.id === id);
    const changeItem = document.querySelector(`#${item}-${id}`);

    if (changeItem.hasAttribute(`readonly`)) {
      changeItem.removeAttribute(`readonly`);
      changeItem.classList.add(`card__text--changed`);
      changeItem.focus();
    } else {
      changeItem.setAttribute(`readonly`, `true`);
      changeItem.classList.remove(`card__text--changed`);
    }

    if (item === `author`) {
      editBook.author = changeItem.value || `Автор`;
      changeItem.value = editBook.author;
    } else if (item === `name`) {
      editBook.name = changeItem.value || `Название`;
      changeItem.value = editBook.name;
    }

    localStorage.setItem(`list`, JSON.stringify(list));
  };

  // Сохранение данных
  useEffect(() => {
    localStorage.setItem(`list`, JSON.stringify(list));
  }, [list]);

  return (
    <React.Fragment>
      <AddForm addBook={addBook} />
      <List list={list} deleteBook={deleteBook} changeBook={changeBook} />
    </React.Fragment>
  );
};

export default App;
