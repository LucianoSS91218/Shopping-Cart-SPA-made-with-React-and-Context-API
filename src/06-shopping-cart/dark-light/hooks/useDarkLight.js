import { useEffect } from "react";
import { useState } from "react";

export default function useDarkLight(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      let currentValue = localStorage.getItem(key);
      return currentValue ? JSON.parse(currentValue) : defaultValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
