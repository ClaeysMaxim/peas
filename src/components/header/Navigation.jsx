import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

const Navigation = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle body scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [mobileMenuOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="nav">
      <button
        className={`mobile-toggle ${mobileMenuOpen ? "mobile-toggle--active" : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className="mobile-toggle__line"></span>
        <span className="mobile-toggle__line"></span>
        <span className="mobile-toggle__line"></span>
      </button>
      <ul className={`nav__list ${mobileMenuOpen ? "nav__list--open" : ""}`}>
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMobileMenu}
          >
            {t("header.home")}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
          >
            {t("header.contact")}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "nav__link nav__link--active" : "nav__link"
            }
            onClick={closeMobileMenu}
          >
            {t("header.booking")}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
