import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import "./Footer.css";

const Footer = () => {
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
        opacity: "0.9",
      }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Stack direction="row" sx={{ margin: { xs: "10px" } }}>
          <Grid container rowGap={12}>
            <Grid xs={12} md={4} sm={12}>
              <Stack
                className="footer-effect"
                direction="row"
                sx={{
                  margin: "10px",
                  position: "relative",
                  marginLeft: "50px",
                }}
              >
                <PhoneAndroidIcon
                  style={{
                    color: "#C49B66",
                    position: "relative",
                    fontSize: "35px",
                  }}
                  className="footer-icon"
                />
                <Typography
                  sx={{
                    marginLeft: "20px",
                    marginTop: "6px",
                    color: "#C49B66",
                    fontFamily: "Roboto Mono",
                  }}
                  varinat="p"
                >
                  +20 100368769
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} sm={12}>
              <Stack
                className="footer-effect"
                direction="row"
                sx={{
                  margin: "10px",
                  position: "relative",
                  marginLeft: "50px",
                }}
              >
                <EmailIcon
                  style={{
                    color: "#C49B66",
                    position: "relative",
                    fontSize: "35px",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "20px",
                    marginTop: "6px",
                    color: "#C49B66",
                    fontFamily: "Roboto Mono",
                  }}
                  varinat="p"
                >
                  ahromio123@gmail.com
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} sm={12}>
              <Stack
                className="footer-effect"
                direction="row"
                sx={{
                  margin: "10px",
                  position: "relative",
                  marginLeft: "50px",
                }}
              >
                <EditLocationAltIcon
                  style={{
                    color: "#C49B66",
                    position: "relative",
                    fontSize: "35px",
                  }}
                />
                <Typography
                  sx={{
                    marginLeft: "20px",
                    marginTop: "6px",
                    color: "#C49B66",
                    fontFamily: "Roboto Mono",
                  }}
                  varinat="p"
                >
                  Egypt
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
