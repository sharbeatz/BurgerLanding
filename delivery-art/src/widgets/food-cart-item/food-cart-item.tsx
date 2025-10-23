import "./food-cart-item.css";
import type { FoodMenuType } from "../../shared/types/food-types";
import { useAddToCartStore } from "../../shared/stores/add-to-cart";

export function FoodCartItem({ id, title, img, price }: FoodMenuType) {
  const removeItem = useAddToCartStore((state) => state.removeItem);
  // заменить потом string на норм значения типа FoodItemType
  const handleRemoveToCart = (id: string) => {
    removeItem(id);
  };
  return (
    <div className="cart-list__item">
      <img src={img} alt="Food Item" className="cart-list__img" />
      <p className="cart-list_title">{title}</p>
      <div className="cart-list__quantity">
        {" "}
        <button className="cart-list__quantity-btn">➕</button>
        <span>1</span>
        <button className="cart-list__quantity-btn">➖</button>
      </div>
      <span className="cart-list__price">{price} руб.</span>
      <button
        className="cart-list__delete"
        // показываю что id точно будет !
        onClick={() => handleRemoveToCart(id!)}
      >
        ❌
      </button>
    </div>
  );
}
