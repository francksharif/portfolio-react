import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-[#0a192f] pb-4">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
