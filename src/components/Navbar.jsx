import React, { useState } from "react";
import "./Navbar.css";
import { Box, Stack } from "@mui/material";
import AttributionIcon from "@mui/icons-material/Attribution";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { navlinks } from "./constants";

const Navbar = () => {
  const [navigation, setNavigation] = useState(true);
  const [after, setAfter] = useState("Home");

  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#131414",
        position: "sticky",
        top: 0,
        zIndex: "1",
      }}
    >
      {/* Menu Icon To toggle navbar in small devices */}
      <MenuIcon
        sx={{
          display: { lg: "none", md: "none", sm: "none" },
        }}
        onClick={toggleNavigation}
        style={{
          color: "#fff",
          padding: "10px",
        }}
      />

      <Box
        sx={[
          navigation && {
            display: { xs: "none", md: "flex", lg: "flex", sm: "flex" },
          },
          {
            maxWidth: "1128px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          },
        ]}
      >
        {/* portfolio icon and text */}
        <Stack
          direction={{ md: "row", lg: "row", xs: "column", sm: "row" }}
          sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}
        >
          <AttributionIcon
            style={{ color: "#fff", margin: "10px", fontSize: "35px" }}
          />{" "}
          <span style={{ color: "#fff", fontsize: "25px" }}>Portfolio</span>
        </Stack>
        {/* navbar links */}
        <Stack
          direction={{ md: "row", lg: "row", xs: "column", sm: "row" }}
          sx={{
            margin: "20px",
            color: "#fff",
            cursor: "pointer",
            gap: { xs: "50px" },
          }}
        >
          {navlinks.map((link, idx) => (
            <a
              href={`#${link.goal}`}
              key={idx}
              style={{
                fontFamily: "Roboto Mono",
                color: "#fff",
                textDecoration: "none",
              }}
              className={link.navName === after && "nav-animation"}
              onClick={() => setAfter(link.navName)}
            >
              {link.navName}
            </a>
          ))}
        </Stack>
        <Stack
          direction={{ md: "row", lg: "row", xs: "column", sm: "row" }}
          sx={{
            margin: "20px",
            gap: { xs: "50px" },
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {/* social media icons */}
          <a
            href="https://www.facebook.com/ahmmedhashem0/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon style={{ color: "#fff" }} className="icon-hover" />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-hashem-8434b7269/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ color: "#fff" }} className="icon-hover" />
          </a>

          <a href="https://github.com/he4a00" target="_blank" rel="noreferrer">
            <GitHubIcon style={{ color: "#fff" }} className="icon-hover" />
          </a>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
