import FoodList from "../../widgets/food-list/food-list";
import Filter from "../../widgets/filter/filter";

export default function Menu() {
  return (
    <section className="menu">
      <div className="container menu__container">
        <Filter />

        <FoodList />
      </div>
    </section>
  );
}
