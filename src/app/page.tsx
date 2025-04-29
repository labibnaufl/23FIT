import { CallToAction } from "@/components/Landing Page/CTA";
import { Hero } from "@/components/Landing Page/Hero";
import { Product } from "@/components/Landing Page/Product";
import { Testimonials } from "@/components/Landing Page/Testimonial";
import { TextScroll } from "@/components/Landing Page/Textscroll";

export default async function Home() {
  return (
    <>
      <Hero/>
      <TextScroll/>
      <Product/>
      <Testimonials/>
      <CallToAction/>
    </>
  );
}
