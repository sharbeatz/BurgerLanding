import { Link } from "react-router-dom";
import OrderButton from "../order-button/order-button";
import { routes } from "../../app/routes";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <img
          src="./images/icons/logo.png"
          alt="Логотип"
          className="header__logo"
        />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link
                to={routes.main}
                className="header__link header__link--active"
              >
                ГЛАВНАЯ
              </Link>
            </li>
            <li className="header__item">
              <Link to={routes.menu} className="header__link">
                МЕНЮ
              </Link>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                OUR OFFER
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                PRICING
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                SHOP
              </a>
            </li>
          </ul>
        </nav>
        <OrderButton />
      </div>
    </header>
  );
}
