import HomeNav from "./components/HomepageNav";
import { Metadata } from "next";
import Hero from "./components/home/hero";
import BodySection from "./components/home/body";
import Footer from "./components/footer";
import AboutUs from "./components/home/aboutUs";
import Features from "./components/home/features";
export const metadata: Metadata = {
  title: "Baxter: Guided Investments for a Better Today",
};

export default function Home() {
  return (
    <div className="grid w-full">
      <HomeNav />
      <Hero />
      <AboutUs />
      <BodySection />
      <Features />
      <Footer />
    </div>
  );
}
