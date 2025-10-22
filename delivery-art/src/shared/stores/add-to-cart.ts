import { create } from "zustand";
import { FOOD_ITEM } from "../../widgets/food-item/lib/const";
import type { FoodItemType } from "../../widgets/food-item/lib/type";

interface AddToCartStore {
  items: FoodItemType[];
  addItem: (item: FoodItemType) => void;
  removeItem: (id: string) => void;
}

export const useAddToCartStore = create<AddToCartStore>((set) => ({
  items: [],
  addItem: (item) => {
    console.log(item);
    set((state) => ({ items: [...state.items, item] }));
  },
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item !== id),
    })),
}));
