import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] max-w-[80%] m-auto">
      <Navbar />
      <Hero />
      <Section/>
    </div>
  );
}
