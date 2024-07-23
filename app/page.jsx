import Brands from "./components/Brands";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Package from "./components/Package";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="max-w-[1536px] mx-auto min-h-screen flex flex-col gap-5">
      <Hero />
      <Brands />
      <Package />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
