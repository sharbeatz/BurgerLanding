import React from "react";
import { useAddToCartStore } from "../../shared/stores/add-to-cart";
import CartItem from "../cart-item/cart-item";

export default function CartList() {
  const items = useAddToCartStore((state) => state.items);
  return (

  )
}
