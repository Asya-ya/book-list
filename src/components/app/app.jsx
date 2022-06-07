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
      name: book.name
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
  const changeBook = (id) => {
    const changeItem = list.find((book) => book.id === id);
    const change = document.querySelector(`.${id}`);

    if (change.hasAttribute(`readonly`)) {
      change.removeAttribute(`readonly`);
      change.focus();
    } else {
      change.setAttribute(`readonly`, `true`);
    }

    changeItem.author = change.value;
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
