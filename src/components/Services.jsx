import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CodeIcon from "@mui/icons-material/Code";
import Grid from "@mui/material/Grid";
import { Bounce } from "react-reveal";
import "./Services.css";

const Services = () => {
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
      }}
    >
      <Box
        sx={{
          maxWidth: "1128px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            color: "#C49B66",
            textAlign: "center",
            fontFamily: "Roboto Mono",
          }}
          className="servtitle"
        >
          My Services
        </Typography>

        <Box
          sx={{
            maxWidth: "1128px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Bounce>
            <Stack direction="row" sx={{ marginTop: "180px" }}>
              <Grid container spacing={2} rowGap={10}>
                <Grid xs={12} md={4} sm={12}>
                  <Box sx={{ textAlign: "center" }}>
                    <ComputerIcon
                      style={{ fontSize: "70px", color: "#C49B66" }}
                    />
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Roboto Mono",
                        marginTop: "10px",
                      }}
                      variant="h5"
                    >
                      Web Developer
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} md={4} sm={12}>
                  <Box
                    className="servBox"
                    sx={{ textAlign: "center", position: "relative" }}
                  >
                    <SmartphoneIcon
                      style={{
                        fontSize: "70px",
                        color: "#C49B66",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Roboto Mono",
                        marginTop: "10px",
                      }}
                      variant="h5"
                    >
                      Responsive
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} md={4} sm={12}>
                  <Box sx={{ textAlign: "center" }}>
                    <CodeIcon style={{ fontSize: "70px", color: "#C49B66" }} />
                    <Typography
                      sx={{
                        color: "#fff",
                        fontFamily: "Roboto Mono",
                        marginTop: "10px",
                      }}
                      variant="h5"
                    >
                      Clean Code
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Bounce>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
