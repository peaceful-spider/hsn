import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import HeroSection from "./components/HeroSection";
import HeroSlider from "./components/HeroSlider";
import CircularLogoComponent from "./components/CircularLogoComponent";
import LogoSlider from "./components/LogoSlider";
import VideoText from "./components/VideoText";
import FeedbackSliders from "./components/FeedbackSliders";
import Counter from "./components/Counter";
import CircleButton from "./components/CircleButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
   <ResponsiveNavbar />
   <HeroSection />
   <HeroSlider />
   <CircularLogoComponent />
   <LogoSlider />
   <VideoText
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        fontSize={20}
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        <img src="/images/creative2.svg" alt="image"></img>
      </VideoText>
  <FeedbackSliders />
  <Counter />
  <CircleButton />
  <Footer />
   </>
  );
}
