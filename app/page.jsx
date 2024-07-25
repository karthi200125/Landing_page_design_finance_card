'use client';

import Brands from './components/Brands';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Package from './components/Package';
import Testimonial from './components/Testimonial';

export default function Home() {

  return (
    <main className="max-w-[1440px] mx-auto min-h-screen flex flex-col gap-5 mb-[50px]">
      <Hero />
      <Brands />
      <Package />
      <Testimonial />
      <FAQ />
      <Footer />
    </main>
  );
}
