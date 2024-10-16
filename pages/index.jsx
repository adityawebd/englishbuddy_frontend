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
import { getServerIP } from "@/lib/getServerIP";
export default function Home({serverIP}) {
  return (
    <Layout>
      <HeroSection />
      <OfferBanner serverIP={serverIP} />
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



export async function getServerSideProps() {
  const serverIP = getServerIP();


  // console.log("hellow",serverIP)

  return {
    props: {
      serverIP,
    },
  };
}

