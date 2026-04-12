export type PizzaCategory = "Classic" | "Spicy" | "Vegetarian";

export type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: PizzaCategory;
  isAvailable: boolean;
};
