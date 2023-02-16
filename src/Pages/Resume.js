import * as React from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Section from "../Components/Section";
import Header from "../Components/Header";
import Experiences from "../Components/Experiences";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Activities from "../Components/Activities";
import {
  sectionTitles,
  personalInfo,
  experiences,
  education,
  programmingTitle,
  programmingSkills,
  communicationTitle,
  communicationSkills,
  activities,
} from "../Conf/InfoSecret";

function Resume() {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: [""],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ border: 0, borderColor: "black", marginTop: 2, marginX: 4 }}>
        <Header personalInfo={personalInfo} />
        <Section title={sectionTitles[0]} />
        <Experiences experiences={experiences} />
        <Section title={sectionTitles[1]} />
        <Education education={education} />
        <Box sx={{ marginTop: 0 }}>
          <Typography></Typography>
        </Box>
        <Box marginBottom={5}></Box>
        <Section title={sectionTitles[2]} />
        <Skills
          programmingTitle={programmingTitle}
          communicationTitle={communicationTitle}
          programmingSkills={programmingSkills}
          communicationSkills={communicationSkills}
        />
        <Section title={sectionTitles[3]} />
        <Activities activities={activities} />
      </Box>
    </ThemeProvider>
  );
}

export default Resume;
