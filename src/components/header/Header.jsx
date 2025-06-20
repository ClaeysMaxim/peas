import Navigation from "./Navigation";
import logo from "../../assets/logo.png";
import { Link } from "@tanstack/react-router";


const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="PEAS Logo" />
          </Link>
        </div>
        <div className="header__nav">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
