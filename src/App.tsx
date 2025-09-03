import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import DraggableCard from "./components/DraggableCard";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DraggableCard />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}