import "./main.css";

export const Main = () => {
  return (
    <div>
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
          <a href="#!" className="btn">
            Order now
          </a>
        </div>
      </header>

      <main className="main">
        <section className="welcome">
          <div className="container welcome__container">
            <div className="welcome__inner-wrapper">
              <h4 className="welcome__subtitle">FAST FOOD BURGERS</h4>
              <h1 className="welcome__title">
                The fastest food, for instant hunger.
              </h1>
              <p className="welcome__desc">
                Some food has looked so awful that it's looked like something
                that the dog's brought home, yet after one mouthful I've been
                left eating my thoughts, my words & my food and gone back for
                seconds.
              </p>
              <a href="#!" className="btn">
                Order now
              </a>
            </div>
          </div>
        </section>

        <section className="food-list">
          <div className="container food-list__container">
            <div className="food-list__card">
              <img
                src="./images/food-list-1.jpg"
                alt=""
                className="food-list__img"
              />
              <div className="food-list__text-wrapper">
                <h4 className="food-list__title">Chicken Paella</h4>
                <p className="food-list__desc">
                  We just don't make and sell food.Good food warms.
                </p>
              </div>
            </div>

            <div className="food-list__card">
              <img
                src="./images/food-list-2.jpg"
                alt=""
                className="food-list__img"
              />
              <div className="food-list__text-wrapper">
                <h4 className="food-list__title">Taco Del Mar</h4>
                <p className="food-list__desc">
                  Taco Del Mar brings the best out of Mexican cuisine with
                  fresh.
                </p>
              </div>
            </div>

            <div className="food-list__card">
              <img
                src="./images/food-list-3.jpg"
                alt=""
                className="food-list__img"
              />
              <div className="food-list__text-wrapper">
                <h4 className="food-list__title">Pizza Hut</h4>
                <p className="food-list__desc">
                  Bon Au Pain is a pioneer in the healthy fast food scene.
                </p>
              </div>
            </div>

            <div className="food-list__card">
              <img
                src="./images/food-list-4.jpg"
                alt=""
                className="food-list__img"
              />
              <div className="food-list__text-wrapper">
                <h4 className="food-list__title">Chicken Paella</h4>
                <p className="food-list__desc">
                  Although the Pizza Hut Menu Prices have tumbled over the
                  years.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
