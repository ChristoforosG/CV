import "./App.css";
import * as React from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Section from "./Components/Section";
import Header from "./Components/Header";
import Experiences from "./Components/Experiences";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Activities from "./Components/Activities";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: [""],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ border: 0, borderColor: "black", marginTop: 2, marginX: 4 }}>
        <Header />
        <Section title="EXPERIENCE" />
        <Experiences />
        <Section title="EDUCATION" />
        <Education />
        <Section title="SKILLS" />
        <Skills />
        <Section title="PROJECTS - ACTIVITIES" />
        <Activities />
      </Box>
    </ThemeProvider>
  );
}

export default App;
