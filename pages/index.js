import { Montserrat, Poppins } from "next/font/google";
import Hero from "@/components/Hero";
import NavbarBasic from "@/components/Header";
import About from "@/components/About";
import Token from "@/components/Token";
import Buy from "@/components/Buy";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="w-full relative">
      <video
        src="/tekeV.mp4"
        muted
        autoPlay
        loop
        playsInline={true}
        className="w-full h-screen object-cover fixed z-[-1] inset-0"
      />
      <div
        className={`${montserrat.variable} ${poppins.variable} w-full max-w-[1500px] mx-auto font-mon overflow-hidden`}
      >
        <NavbarBasic />
        <Hero />
        <About />
        <Token />
        <Buy />
      </div>
    </main>
  );
}
