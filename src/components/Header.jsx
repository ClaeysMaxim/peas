import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";
import logoImage from "../assets/images/peas-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  // Helper function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="header__top">
        <div className="container header__top-container">
          <Link to="/booking" className="header__book-button">
            {t("header.booking")}
          </Link>
          <div className="header__language">
            <button
              className="header__language-button"
              onClick={toggleLanguage}
            >
              {language === "nl" ? "EN" : "NL"}
            </button>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container header__container">
          <Link to="/" className="header__logo-link">
            <img
              src={logoImage}
              alt="P.E.A.S. - Pan European Airport Service"
              className="header__logo"
            />
          </Link>

          <nav className="nav">
            <button
              className={`mobile-toggle ${
                isMenuOpen ? "mobile-toggle--active" : ""
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="mobile-toggle__line"></span>
              <span className="mobile-toggle__line"></span>
              <span className="mobile-toggle__line"></span>
            </button>

            <ul className={`nav__list ${isMenuOpen ? "nav__list--open" : ""}`}>
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                  onClick={handleLinkClick}
                >
                  {t("header.home")}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/booking"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                  onClick={handleLinkClick}
                >
                  {t("header.booking")}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                  onClick={handleLinkClick}
                >
                  {t("header.services")}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/fleet"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                  onClick={handleLinkClick}
                >
                  {t("header.fleet")}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "nav__link nav__link--active" : "nav__link"
                  }
                  onClick={handleLinkClick}
                >
                  {t("header.contact")}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
