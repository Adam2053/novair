import Image from "next/image";
import { Hero } from "./components/Hero";
import { NavbarTop } from "./components/Navbar";
import { Tools } from "./components/Tools";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Book } from "./components/Book";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavbarTop />
      <Hero />
      <Tools />
      <Services />
      <Portfolio />
      <Book />
    </main>
  );
}
