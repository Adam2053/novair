import Image from "next/image";
import { Hero } from "./components/Hero";
import { NavbarTop } from "./components/Navbar";
import { Tools } from "./components/Tools";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Book } from "./components/Book";
import { Grid } from "./components/Grid";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import ServiceSection from "./components/ServiceSection";
import Love from "./components/Love";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavbarTop />
      <Hero />
      <About />
      <ServiceSection />
      {/* <Tools /> */}
      {/* <Services /> */}
      {/* <Portfolio /> */}
      <Grid />
      <Testimonials />
      <Love />

      {/* <Book /> */}
    </main>
  );
}
