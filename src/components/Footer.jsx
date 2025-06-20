import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <h3 className="footer__title">{t("footer.sitemap")}</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <Link to="/" className="footer__link">
                  {t("header.home")}
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/booking" className="footer__link">
                  {t("header.booking")}
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/services" className="footer__link">
                  {t("header.services")}
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/fleet" className="footer__link">
                  {t("header.fleet")}
                </Link>
              </li>
              <li className="footer__item">
                <Link to="/contact" className="footer__link">
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">{t("footer.contact")}</h3>
            <address className="footer__address">
              <p>{t("contact.info.company")}</p>
              <p>{t("contact.info.street")}</p>
              <p>{t("contact.info.city")}</p>
              <p>
                <a href="tel:+32475786048" className="footer__link">
                  GSM: +32 475 78 60 48
                </a>
              </p>
              <p>
                <a
                  href="mailto:peas@peas.be"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  peas@peas.be
                </a>
              </p>
            </address>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">{t("footer.social")}</h3>
            <div className="footer__social">
              <a
                href="https://facebook.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="visually-hidden">Facebook</span>
                <i className="footer__social-icon">FB</i>
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">{t("footer.credits")}</h3>
            <p>
              {t("footer.copyright")} {currentYear}
            </p>
            <p>P.E.A.S. bvba</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} P.E.A.S. - {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
