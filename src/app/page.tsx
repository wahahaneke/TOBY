import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Music from "@/components/Music";
import HowToBuy from "@/components/HowToBuy";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Journey />
      <Music />
      <HowToBuy />
      <Roadmap />
      <Footer />
    </main>
  );
}
