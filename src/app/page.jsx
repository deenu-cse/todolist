"use client"

import HeroPage from "./page-ui/heropage/page";
import FeatureDemo from "./page-ui/whychoose/page";
import Testomonials from "./page-ui/testomonial/page";

export default function Home() {

  return (
    <div>
      <HeroPage />
      <FeatureDemo />
      <Testomonials/>
    </div>
  );
} 
