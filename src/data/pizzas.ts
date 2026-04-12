import type { Pizza } from "@/types/pizza.types";

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Margherita",
    description: "Tomato sauce, mozzarella, and fresh basil.",
    price: 8.9,
    imageUrl: "/images/pizzas/margherita.jpg",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, and spicy pepperoni.",
    price: 10.5,
    imageUrl: "/images/pizzas/pepperoni.jpg",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, parmesan, and cheddar.",
    price: 11.9,
    imageUrl: "/images/pizzas/four-cheese.jpg",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Vegetarian",
    description: "Tomato sauce, mozzarella, mushrooms, peppers, and olives.",
    price: 10.9,
    imageUrl: "/images/pizzas/vegetarian.jpg",
    isAvailable: false,
  },
];