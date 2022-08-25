import * as React from "react";
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoverHeader from "../Components/CoverLetter/CoverHeader";
import Section from "../Components/Section";
import HiringManagerInfo from "../Components/CoverLetter/HiringManagerInfo";
import CoverBody from "../Components/CoverLetter/CoverBody";
import Signature from "../Components/CoverLetter/Signature";

function CoverLetter() {
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
        <CoverHeader />
        <Section title="" />
        <HiringManagerInfo />
        <CoverBody />
        <Signature />
      </Box>
    </ThemeProvider>
  );
}

export default CoverLetter;
