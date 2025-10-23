import type { FoodMenuType } from "../../../shared/types/food-types";
import "./food-item.css";
import { useAddToCartStore } from "../../../shared/stores/add-to-cart";

export default function FoodItem({
  id,
  title,
  desc,
  img,
  price,
}: FoodMenuType) {
  // Обработчик клика для добавления товара в корзину
  const addItem = useAddToCartStore((state) => state.addItem);
  const handleAddToCart = (
    id: string,
    title: string,
    price: number,
    img: string
  ) => {
    const foodItem = { id, title, price, img };
    addItem(foodItem);
  };
  return (
    <div className="food-list__card">
      <img src={img} alt="" className="food-list__img" />
      <div className="food-list__text-wrapper">
        <h4 className="food-list__title">{title}</h4>
        <p className="food-list__desc">{desc}</p>
        <div className="food-list__cart">
          <span className="food-list__price">{price} руб.</span>
          <button
            className="food-list__cart-btn"
            // даю понять что данные значения точно будут. Потом можно будет убрать, когда буду редактировать типы
            onClick={() => handleAddToCart(id!, title!, price!, img!)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
