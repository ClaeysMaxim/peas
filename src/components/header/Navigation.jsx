import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
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
          <Link
            to="/"
            className="nav__link"
            activeProps={{ className: "nav__link nav__link--active" }}
            onClick={closeMobileMenu}
          >
            {t("header.home")}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/services"
            className="nav__link"
            activeProps={{ className: "nav__link nav__link--active" }}
            onClick={closeMobileMenu}
          >
            {t("header.services")}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/fleet"
            className="nav__link"
            activeProps={{ className: "nav__link nav__link--active" }}
            onClick={closeMobileMenu}
          >
            {t("header.fleet")}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/contact"
            className="nav__link"
            activeProps={{ className: "nav__link nav__link--active" }}
            onClick={closeMobileMenu}
          >
            {t("header.contact")}
          </Link>
        </li>
        <li className="nav__item">
          <Link
            to="/booking"
            className="nav__link"
            activeProps={{ className: "nav__link nav__link--active" }}
            onClick={closeMobileMenu}
          >
            {t("header.booking")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
    </nav>
  );
};

export default Navigation;
