import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GlobalScale from "@/components/GlobalScale";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import { MeshBackground } from "@/components/MeshGradientBg";
import Navbar from "@/components/Navbar";
import { SplitScroll } from "@/components/SplitScrolling";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute z-0 w-full bg_wrapper h-[43lvh] md:h-[55lvh] lg:h-[67lvh]">
          {/* <GradientBackground /> */}
          <MeshBackground />
        </div>
        <div className="main_container z-10">
          <div className="section_container border-0! pb-0! relative">
            <Navbar />
          </div>
          <div className="section_container">
            <Hero />
          </div>
          <div className="section_container">
            <Brands />
          </div>
          <div className="bg-[#f5f9fc]">
            <div className="section_container  py-20 md:py-0! md:pb-20 md:pt-20! px-4">
              <SplitScroll />
              <Features />
            </div>
          </div>
          <div className="bg-[#0a2540]">
            <GlobalScale />
          </div>
          <div className="section_container py-20">
            <Footer />
          </div>
        </div>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </div>
    </main>
  );
}
