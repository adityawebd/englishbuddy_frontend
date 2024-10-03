import HeroSection from "@/components/HeroSection";
import Layout from "../components/Layout";
import HomeAbout from "@/components/HomeAbout";
import HomeWhyChoose from "@/components/HomeWhyChoose";
import OurMentors from "@/components/OurMentors";
import Tests from "@/components/Tests";
import Testimonials from "@/components/Testimonials";
import ConnectLeaders from "@/components/ConnectLeaders";
import LatestNews from "@/components/LatestNews";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import OfferBanner from "@/components/OfferBanner";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <OfferBanner />
      <HomeAbout />
      <HomeWhyChoose />
      <OurMentors />
      <Tests /> 
      <Testimonials />
      <ConnectLeaders />
      <LatestNews />
      <Faq />
    </Layout>
  );
}
