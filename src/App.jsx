import { NavBar } from "./components/NavBar";
import { Landing } from "./components/sections/landing";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/Footer";
import { Animation } from "./components/Animation";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow space-y-10 pt-15">
        <Animation>
          <Landing />
        </Animation>
        <Animation>
          <About />
        </Animation>
        <Animation delay={0.1}>
          <Experience />
        </Animation>
        <Animation delay={0.2}>
          <Projects />
        </Animation>
      </main>
      <Footer />
    </div>
  );
}

export default App;
