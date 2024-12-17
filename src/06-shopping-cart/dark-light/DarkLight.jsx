import { useEffect } from "react";
import useDarkLight from "./hooks/useDarkLight";
import "./DarkLight.css";
export default function DarkMode() {
  const [theme, setTheme] = useDarkLight("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  //console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="dmcontainer">
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
