import OrderButton from "../order-button/order-button";
export default function Welcome() {
  return (
    <section className="welcome">
      <div className="container welcome__container">
        <div className="welcome__inner-wrapper">
          <h4 className="welcome__subtitle">FAST FOOD BURGERS</h4>
          <h1 className="welcome__title">
            The fastest food, for instant hunger.
          </h1>
          <p className="welcome__desc">
            Some food has looked so awful that it's looked like something that
            the dog's brought home, yet after one mouthful I've been left eating
            my thoughts, my words & my food and gone back for seconds.
          </p>
          <OrderButton />
        </div>
      </div>
    </section>
  );
}
