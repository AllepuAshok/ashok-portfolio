import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ScrollProgress />
      <Navbar />

      <main>
        <div id="home">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="experience">
          <Experience />
        </div>

        <div id="contact">
          <Contact />
          <BackToTop />
          <CustomCursor />
          <Footer />
          <LoadingScreen />
        </div>
      </main>
    </div>
  );
}

export default App;