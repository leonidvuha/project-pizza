import type { Pizza } from "@/types/pizza.types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type PizzaCardProps = {
  pizza: Pizza;
};

export default function PizzaCard({ pizza }: PizzaCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl transition hover:shadow-md">
      <div className="h-40 bg-gray-100"></div>

      <CardContent className="pt-5">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
            {pizza.category}
          </span>

          <span className="text-lg font-bold">€{pizza.price.toFixed(2)}</span>
        </div>

        <h2 className="mb-2 text-xl font-semibold">{pizza.name}</h2>

        <p className="text-sm text-gray-600">{pizza.description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span
          className={`text-sm font-medium ${
            pizza.isAvailable ? "text-green-600" : "text-red-500"
          }`}
        >
          {pizza.isAvailable ? "Available" : "Not available"}
        </span>

        <Button type="button" disabled={!pizza.isAvailable}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
