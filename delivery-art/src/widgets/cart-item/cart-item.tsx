import "./cart-item.css";

export default function CartItem() {
  return (
    <div className="cart-list__item">
      <img
        src="./images/food-list-1.jpg"
        alt="Food Item"
        className="cart-list__img"
      />
      <p className="cart-list_title">Pizza Hut</p>
      <div className="cart-list__quantity">
        {" "}
        <button className="cart-list__quantity-btn">➕</button>
        <span>1</span>
        <button className="cart-list__quantity-btn">➖</button>
      </div>
      <span className="cart-list__price">1200 руб</span>
      <button className="cart-list__delete">❌</button>
    </div>
  );
}
