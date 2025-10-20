import type { FoodItemType } from "../lib/type";

export default function FoodItem({ id, title, desc, img }: FoodItemType) {
  return (
    <div className="food-list__card">
      <img src={img} alt="" className="food-list__img" />
      <div className="food-list__text-wrapper">
        <h4 className="food-list__title">{title}</h4>
        <p className="food-list__desc">{desc}</p>
      </div>
    </div>
  );
}
