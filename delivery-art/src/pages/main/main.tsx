import "./main.css";
import Header from "../../widgets/header/header";
import Welcome from "../../widgets/welcome/welcome";
import FoodList from "../../widgets/food-list/food-list";
import OrderSection from "../../widgets/order-section/order-section";

export const Main = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Welcome />
        <FoodList />
        <OrderSection />
      </main>
    </>
  );
};
