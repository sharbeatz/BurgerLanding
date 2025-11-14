import type { FoodMenuType } from "../../../shared/types/food-types";

export const FOOD_ITEM: FoodMenuType[] = [
  {
    id: "1",
    title: "Classic Chicken Paella",
    desc: "We just don't make and sell food.Good food warms.",
    img: "./images/food-list-1.jpg",
    price: 1200,
  },
  {
    id: "2",
    title: "Taco Del Mar",
    desc: "Taco Del Mar brings the best out of Mexican cuisine with fresh.",
    img: "./images/food-list-2.jpg",
    price: 800,
  },
  {
    id: "3",
    title: "Pizza Hut",
    desc: "Bon Au Pain is a pioneer in the healthy fast food scene.",
    img: "./images/food-list-3.jpg",
    price: 1500,
  },
  {
    id: "4",
    title: "Chicken Paella",
    desc: "Although the Pizza Hut Menu Prices have tumbled over the years.",
    img: "./images/food-list-4.jpg",
    price: 1100,
  },

  {
    id: "5",
    title: "Куринный пирог",
    desc: "Самый вкусный пирог от Софи",
    img: "./images/pirog_sonya.jpg",
    price: 1000,
  },
  {
    id: "6",
    title: "Яичница «С добрым утром»",
    desc: "Утро добрым не бывает",
    img: "./images/morning.jpg",
    price: 133,
  },
  {
    id: "7",
    title: "Хрустящие баклажаны",
    desc: "Просто, вкусно и сытно",
    img: "./images/ilnara.jpg",
    price: 400,
  },
  {
    id: "8",
    title: "Такояки «Русская рулетка»",
    desc: "Попробуй блюдо родом из Осоки, но с острой русской душой, в одном из шариков с кальмаром",
    img: "./images/andrey.jpg",
    price: 612,
  },
] as const;
