import Image from "next/image";
import styles from "./page.module.css";
import SplashCursor from "./components/SplashCursor";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import HeroSection from "./components/HeroSection";
import HeroSlider from "./components/HeroSlider";
import CircularLogoComponent from "./components/CircularLogoComponent";
import LogoSlider from "./components/LogoSlider";
import VideoText from "./components/VideoText";
import FeedbackSliders from "./components/FeedbackSliders";
import Counter from "./components/Counter";
import CircleButton from "./components/CircleButton";

export default function Home() {
  return (
   <>
   <SplashCursor />
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
        <img src="/images/creative.svg" alt="image"></img>
      </VideoText>
  <FeedbackSliders />
  <Counter />
  <CircleButton />
   </>
  );
}
