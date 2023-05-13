import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Services from "./components/Services";
import ScrolltoTop from "./components/ScrolltoTop";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function App() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
      className="App"
    >
      <ArrowCircleUpIcon
        style={{
          position: "fixed",
          right: "0",
          bottom: "0",
          fontSize: "40px",
          color: "#077fff",
          zIndex: "2",
          cursor: "pointer",
          margin: "20px",
        }}
        onClick={handleScroll}
      />
      <Navbar />

      <ScrolltoTop />
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
