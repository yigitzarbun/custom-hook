import React, { useState, useEffect } from "react";

function getLocalData(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getLocalData(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
};
