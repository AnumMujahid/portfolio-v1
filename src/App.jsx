import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <AnimatedCursor
        color="220, 220, 220"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
      />
      <Navbar />
      <Header />
      <Clients />
      <Projects />
      <Testimonials />
      {/* <Blogs /> */}
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
