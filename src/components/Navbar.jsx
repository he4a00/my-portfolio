import React, { useState } from "react";
import "./Navbar.css";
import { Box, Stack, Typography } from "@mui/material";
import AttributionIcon from "@mui/icons-material/Attribution";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [navigation, setNavigation] = useState(true);
  const toggleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <Box>
      {/* Menu Icon To toggle navbar in small devices */}
      <MenuIcon
        sx={{ display: { lg: "none", md: "none", sm: "none" } }}
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
          sx={{ alignItems: "center" }}
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
          <Typography
            sx={{ fontFamily: "Roboto Mono" }}
            className="nav-animation"
          >
            Projects
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto Mono" }}
            className="nav-animation"
          >
            Technologies
          </Typography>
          <Typography
            sx={{ fontFamily: "Roboto Mono" }}
            className="nav-animation"
          >
            About
          </Typography>
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
          <FacebookIcon className="icon-hover" />

          <GitHubIcon className="icon-hover" />

          <LinkedInIcon className="icon-hover" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
