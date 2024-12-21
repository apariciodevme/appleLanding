import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <Hero />
      <Card
        title={"iPhone 16 Pro"}
        text={"Hello, Apple Intelligence."}
        btnLeft={"Learn More"}
        btnRight="Buy"
      />
    </main>
  );
}
