import "./cart.css";
import CartItem from "../../widgets/cart-item/cart-item";
import CartList from "../../widgets/cart-list/cart-list";

export default function Cart() {
  return (
    <main className="cart">
      <section className="cart-list">
        <div className="container cart__container">
          <p className="cart__title">Корзина</p>
          <CartList />
        </div>
      </section>
    </main>
  );
}
