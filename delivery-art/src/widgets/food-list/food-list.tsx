import FoodItem from "../food-item/ui/food-item";
import { FOOD_ITEM } from "../food-item/lib/const";

export default function FoodList() {
  return (
    <section className="food-list">
      <div className="container food-list__container">
        {FOOD_ITEM.map((item) => (
          <FoodItem
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
