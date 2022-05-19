import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Section from "./Components/Section";
import Header from "./Components/Header";
import ExperienceUnit from "./Components/ExperienceUnit";
import Experiences from "./Components/Experiences";
import { experiences } from "./Conf/Info";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["serif"].join(","),
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
        <Section title="SKILLS" />
        <Section title="ACTIVITIES" />
      </Box>
    </ThemeProvider>
  );
}

export default App;
