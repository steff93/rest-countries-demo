import { useEffect, useState } from "react";
import "./Header.scss";

type Theme = "dark" | "light";

const Header = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeName = theme === "dark" ? "Light Mode" : "Dark Mode";

  const handleThemeChange = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("body")?.classList.add("light");
    } else {
      document.querySelector("body")?.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="header">
      <div>Where in the world?</div>
      <button className="theme-switcher" onClick={handleThemeChange}>
        {themeName}
      </button>
    </div>
  );
};

export default Header;
