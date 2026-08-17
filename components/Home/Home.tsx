import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default Home;
