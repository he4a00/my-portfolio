import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./Technologies.css";
import { techs } from "./constants";
import { Zoom } from "react-reveal";

const Technologies = () => {
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "150px",
        marginBottom: "150px",
        paddingTop: "0px",
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
          paddingTop: "50px",
          backgroundColor: "#131414",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#007fff",
            fontFamily: "Roboto Mono",
            position: "relative",
            margin: { xs: "15px" },
          }}
          className="skills"
        >
          My Skills
        </Typography>
        <Box
          sx={{
            maxWidth: "1128px",
            width: "100%",
            margin: "auto",
            paddingTop: "100px",
            paddingBottom: "300px",
            display: "flex",
          }}
        >
          <Zoom>
            <Grid container>
              {techs.map((tech) => (
                <Grid xs={12} md={4} sm={6}>
                  <Box>
                    <Stack
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        textAlign: "center",
                        margin: "100px",
                      }}
                    >
                      <i
                        style={{ fontSize: "50px", marginBottom: "20px" }}
                        className={tech.icon}
                      ></i>

                      <Typography
                        variant="p"
                        sx={{ color: "#fff", fontSize: "18px" }}
                      >
                        {tech.name}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Zoom>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
