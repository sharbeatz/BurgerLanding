import React from "react";
import { useAddToCartStore } from "../../shared/stores/add-to-cart";
import CartItem from "../cart-item/cart-item";
import Cart from "../../pages/cart/cart";

export default function CartList() {
  const items = useAddToCartStore((state) => state.items);
  return (
    <>
      {items.length === 0 && <p>Пусто, как в холодильнике ночью.</p>}
      {items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </>
  );
}
