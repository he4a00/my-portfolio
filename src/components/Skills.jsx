import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import "./Education.css";
import { LinearProgressWithLabel } from "./LinearProgress";
import LayersIcon from "@mui/icons-material/Layers";
import { skills } from "./constants";

const Skills = () => {
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#131414",
        opacity: "0.7",
      }}
      id="skills"
    >
      <Box
        sx={{
          maxWidth: "1128px",
          width: "100%",
          margin: "auto",
        }}
      >
        {/* The Stack That Wrap the whole Component */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          sx={{ margin: { xs: "20px" } }}
        >
          {/* The Stack That Wrap The First column {Education} */}
          <Stack direction="column">
            <CreateIcon
              style={{
                color: "#007fff",
                fontSize: "50px",
                marginBottom: "10px",
              }}
            />
            <Typography
              sx={{ color: "#fff", fontFamily: "Roboto Mono" }}
              variant="h4"
              className="education"
            >
              Education
            </Typography>
            <Stack direction="column" sx={{ marginTop: "40px" }}>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono",
                  color: "#fff",
                  fontSize: "16px",
                }}
                variant="h6"
              >
                Faculty of Computers and Informatics
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Roboto Mono",
                  color: "#077fff",
                  fontSize: "16px",
                }}
                variant="p"
              >
                Zagazig Universty
              </Typography>
            </Stack>
            <Stack direction="column" sx={{ marginTop: "100px" }}>
              <Typography
                sx={{ fontFamily: "Roboto Mono", color: "#fff" }}
                variant="h6"
              >
                Faculty of Computer Science
              </Typography>
              <Typography
                sx={{ fontFamily: "Roboto Mono", color: "#077fff" }}
                variant="p"
              >
                Computer Science
              </Typography>
            </Stack>
          </Stack>
          {/* The Stack That Wrap The Second column {Skills} */}
          <Stack
            direction="column"
            sx={{
              marginLeft: { md: "200px" },
              marginTop: { xs: "70px", md: "0px" },
            }}
          >
            <LayersIcon
              style={{
                color: "#007fff",
                fontSize: "50px",
                marginBottom: "10px",
              }}
            />
            <Typography
              sx={{ color: "#fff", fontFamily: "Roboto Mono" }}
              variant="h4"
              className="education"
            >
              Skills
            </Typography>
            <Stack direction="column" sx={{ marginTop: "30px" }}>
              {skills.map((skill) => (
                <Stack direction="column" sx={{ margin: "10px" }}>
                  <Typography
                    sx={{ color: "#077fff", fontFamily: "Roboto Mono" }}
                    variant="p"
                  >
                    {skill.name}
                  </Typography>
                  <Box sx={{ width: { md: "500px" } }}>
                    <LinearProgressWithLabel
                      color={skill.color}
                      value={skill.percent}
                    />
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Skills;
