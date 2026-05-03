import Starfield from "@/components/starfield";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import Manifesto from "@/components/manifesto";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative" style={{ background: "#000008" }}>
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Manifesto />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
