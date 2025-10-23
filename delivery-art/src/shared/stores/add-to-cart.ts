import { create } from "zustand";
import type { FoodMenuType } from "../types/food-types";

interface AddToCartStore {
  items: FoodMenuType[];
  addItem: (item: FoodMenuType) => void;
  removeItem: (id: string) => void;
}
// переименовать переменные
export const useAddToCartStore = create<AddToCartStore>((set) => ({
  items: [],
  addItem: (item) => {
    console.log(item);
    set((state) => ({ items: [...state.items, item] }));
  },
  removeItem: (id: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
}));
