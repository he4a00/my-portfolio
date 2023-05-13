import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import TypeWriterEffect from "react-typewriter-effect";

import "./Hero.css";

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "150px",
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#131414",
        opacity: "0.8",
      }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          margin: "auto",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Stack>
            <Typography
              variant="h3"
              className="typewriter main type-writer"
              sx={{
                fontFamily: "Roboto Mono",
                color: "#fff",
                fontSize: "20px",
                margin: "20px",
              }}
            >
              <TypeWriterEffect
                text="Welcome To My Personal Portfolio"
                typeSpeed={300}
                cursorColor="#007fff"
                startDelay={100}
                trackWidth={10}
              />
            </Typography>

            <Typography
              variant="p"
              sx={{
                color: "#fff",
                marginTop: "30px",
                fontSize: "20px",
                fontFamily: "Roboto Mono",
                margin: "20px",
              }}
            >
              Hey There , My Name is{" "}
              <span style={{ color: "#66b2ff", fontWeight: "bold" }}>
                Ahmed Hashem, {""}
              </span>
              {""}
              I'm 19 Years Old {""}
              <br />
              <span style={{ color: "#66b2ff", fontWeight: "bold" }}>
                And I'm Full-Stack Developer
              </span>
            </Typography>
            <button className="landing-btn">Learn More</button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
