import OrderButton from "../order-button/order-button";

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
              <a href="#!" className="header__link header__link--active">
                HOME
              </a>
            </li>
            <li className="header__item">
              <a href="#!" className="header__link">
                PAGES
              </a>
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
