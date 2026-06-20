import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white justify-between">
      <div className="flex flex-col flex-1">
        <Header />
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
