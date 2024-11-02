import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

type Theme = "dark" | "light";

const Header = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeName = theme === "dark" ? "Light Mode" : "Dark Mode";
  const themeIcon = theme === "dark" ? solidMoon : regularMoon;
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate("/");
  };

  useLayoutEffect(() => {
    document
      .querySelector("body")
      ?.style.setProperty(
        "--headerHeight",
        ` ${headerRef.current?.clientHeight || 0}px `
      );
  });

  return (
    <div className="header" ref={headerRef}>
      <h1 className="logo" onClick={handleClick}>
        Where in the world?
      </h1>
      <button className="theme-switcher" onClick={handleThemeChange}>
        <div className="theme-switcher__holder">
          <FontAwesomeIcon className="theme-switcher__icon" icon={themeIcon} />
          {themeName}
        </div>
      </button>
    </div>
  );
};

export default Header;
