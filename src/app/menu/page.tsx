import Container from "@/components/layout/Container";
import PizzaCard from "@/components/products/PizzaCard";
import { pizzas } from "@/data/pizzas";

export default function MenuPage() {
  return (
    <main className="py-16">
      <Container>
        <section className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
            Our menu
          </p>
          <h1 className="text-4xl font-bold">Choose your favorite pizza</h1>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </section>
      </Container>
    </main>
  );
}