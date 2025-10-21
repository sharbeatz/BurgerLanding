import "./cart.css";
import CartItem from "../../widgets/cart-item/cart-item";

export default function Cart() {
  return (
    <main className="cart">
      <section className="cart-list">
        <div className="container cart__container">
          <p className="cart__title">Корзина</p>
          <CartItem />
        </div>
      </section>
    </main>
  );
}
