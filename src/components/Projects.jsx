import React from "react";
import {
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { projects } from "./constants";
import Grid from "@mui/material/Grid";
import { Bounce } from "react-reveal";

const Projects = () => {
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
      id="projects"
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
            marginLeft: "50px",
            fontFamily: "Roboto Mono",
          }}
          className="servtitle"
        >
          My Projects
        </Typography>
        <Box sx={{ maxWidth: "1128px", width: "100%", margin: "auto" }}>
          <Bounce>
            <Stack direction="row" rowGap={10}>
              <Grid container>
                {projects.map((project) => (
                  <Grid xs={12} md={6} sm={6} key={project.id}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        margin: "50px",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                        backgroundColor: "transparent",
                      }}
                    >
                      <CardMedia sx={{ height: 200 }} image={project.image} />
                      <CardContent>
                        <Typography
                          sx={{ color: "#077fff", fontFamily: "Roboto Mono" }}
                          gutterBottom
                          variant="h5"
                          component="div"
                        >
                          {project.projTitle}
                        </Typography>
                        <Typography
                          sx={{ color: "#C49B66", fontFamily: "Roboto Mono" }}
                          variant="body2"
                          color="text.secondary"
                        >
                          {project.desc}
                        </Typography>
                        <Box
                          sx={{
                            marginLeft: { md: "100px", xs: "70px", sm: "30px" },
                            marginTop: "30px",
                          }}
                        >
                          <Stack direction="row">
                            <a href={`${project.source}`}>
                              <Button>Source</Button>
                            </a>

                            <a href={`${project.visit}`}>
                              <Button>Visit</Button>
                            </a>
                          </Stack>
                        </Box>
                      </CardContent>
                      <CardActions>
                        <Typography sx={{ margin: "10px" }} variant="p">
                          {project.tags.map((tag, idx) => (
                            <Typography
                              key={idx}
                              sx={{
                                color: "white",
                                marginLeft: "10px",
                                fontSize: "13px",
                              }}
                              variant="p"
                            >
                              {tag} |
                            </Typography>
                          ))}
                        </Typography>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Bounce>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
