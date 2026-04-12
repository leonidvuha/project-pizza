import Container from "@/components/layout/Container";
import PizzaCard from "@/components/products/PizzaCard";
import { pizzas } from "@/data/pizzas";

const categories = ["All", "Classic", "Spicy", "Vegetarian"];

export default function MenuPage() {
  return (
    <main className="py-16">
      <Container>
        <section className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
            Our menu
          </p>

          <h1 className="mb-6 text-4xl font-bold">
            Choose your favorite pizza
          </h1>

          <p className="max-w-2xl text-lg text-gray-600">
            Explore our pizza menu and choose the option that fits your taste.
          </p>
        </section>

        <section className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === "All"
                  ? "border-black bg-black text-white"
                  : "border-gray-300 bg-white text-black hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
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
