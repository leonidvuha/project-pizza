import type { Pizza } from "@/types/pizza.types";

type PizzaCardProps = {
  pizza: Pizza;
};

export default function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="mb-4 h-40 rounded-lg bg-gray-100"></div>

      <div className="mb-3 flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold">{pizza.name}</h2>
        <span className="text-lg font-bold">€{pizza.price.toFixed(2)}</span>
      </div>

      <p className="mb-4 text-sm text-gray-600">{pizza.description}</p>

      <div className="flex items-center justify-between">
        <span
          className={`text-sm font-medium ${
            pizza.isAvailable ? "text-green-600" : "text-red-500"
          }`}
        >
          {pizza.isAvailable ? "Available" : "Not available"}
        </span>

        <button
          type="button"
          disabled={!pizza.isAvailable}
          className="rounded-md bg-black px-4 py-2 text-sm text-white disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}