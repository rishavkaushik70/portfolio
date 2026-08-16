import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
