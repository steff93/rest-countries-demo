import "./Header.scss";

interface HeaderProps {
  themeName: "Light Mode" | "Dark Mode";
}

const Header = ({ themeName }: HeaderProps) => {
  return (
    <div className="header">
      <div>Where in the world?</div>
      <div className="theme-switcher">{themeName}</div>
    </div>
  );
};

export default Header;
