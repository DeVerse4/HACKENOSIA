import { useState } from "react";
import Sponsors from "./components/Sponsors";
import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Tracks from "./components/Tracks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Prizes from "./components/Prizes";
import Judges from "./components/Judges";
import Organizers from "./components/Organizers";
import Schedules from "./components/Schedules";
import FAQ from "./components/FAQ";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <AboutUs />
      <Schedules />
      <Tracks />
      <Prizes />
      <Judges />
      <Sponsors />
      <Organizers />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
