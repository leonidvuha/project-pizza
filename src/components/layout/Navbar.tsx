import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold">
            Project Pizza
          </Link>

          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}