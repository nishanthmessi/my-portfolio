import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import data from "./data/myProjects"

function App() {
  const [projectData, setProjectData] = useState(data)

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/> 
      <Skills/>
      <MyWork projectData={projectData}/>
      <Marquee/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
