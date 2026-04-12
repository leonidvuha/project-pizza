import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main className="py-16">
      <Container>
        <section className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
            Pizza ordering web app
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Fresh pizza for your evening.
          </h1>

          <p className="mb-8 text-lg text-gray-600">
            A modern pizza ordering website for a small business with menu,
            cart, checkout, order tracking, and admin panel.
          </p>

          <div className="flex gap-4">
            <Link
              href="/menu"
              className="rounded-md bg-black px-5 py-3 text-white"
            >
              Order now
            </Link>

            <Link
              href="/login"
              className="rounded-md border border-gray-300 px-5 py-3"
            >
              Login
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}