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
    const bodyNode = document.querySelector("body");

    if (theme === "light") {
      bodyNode?.classList.add("theme-light");
      bodyNode?.classList.remove("theme-dark");
    } else {
      bodyNode?.classList.add("theme-dark");
      bodyNode?.classList.remove("theme-light");
    }
  }, [theme]);

  return (
    <div className="header">
      <div className="logo">Where in the world?</div>
      <button className="theme-switcher" onClick={handleThemeChange}>
        {themeName}
      </button>
    </div>
  );
};

export default Header;
