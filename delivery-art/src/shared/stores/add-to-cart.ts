import { create } from "zustand";
import { FOOD_ITEM } from "../../widgets/food-item/lib/const";
import type { FoodItemType } from "../../widgets/food-item/lib/type";

interface AddToCartStore {
  items: FoodItemType[];
  addItem?: (id: string) => void;
  removeItem: (id: string) => void;
}

export const useAddToCartStore = create<AddToCartStore>((set) => ({
  items: [],
  addItem: (item: FoodItemType) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item !== id),
    })),
}));
