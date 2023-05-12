import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Services from "./components/Services";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
      className="App"
    >
      <Navbar />

      <Hero />

      <Technologies />

      <Skills />

      <Services />

      <Projects />

      <Footer />
    </Box>
  );
}

export default App;
