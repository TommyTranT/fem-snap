import "../scss/header.scss";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="/" className="header__logo">
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
