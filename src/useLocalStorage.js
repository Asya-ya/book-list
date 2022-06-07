import {useState, useEffect} from "react";

const getStorageValue = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  const initialValue = JSON.parse(storedValue);
  return initialValue || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  // Получение данных
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // Сохранение данных
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
