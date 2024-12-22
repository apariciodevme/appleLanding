import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import CardDynamic from "./components/CardDynamicEnd";
import CardDynamicStart from "./components/CardDynamicStart";
import CardDynamicEnd from "./components/CardDynamicEnd";
import CardImgTitle from "./components/CardImgTitle";
import CardDarkText from "./components/CardDarkText";
import CardDisplay from "./components/CardDisplay";

export default function Home() {
  return (
    <main>
      <Hero />
  
    <CardDisplay/>
     
    <Carousel/>
    </main>
  );
}
