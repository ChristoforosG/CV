import * as React from "react";
import { Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoverHeader from "../Components/CoverLetter/CoverHeader";
import Section from "../Components/Section";
import HiringManagerInfo from "../Components/CoverLetter/HiringManagerInfo";
import CoverBody from "../Components/CoverLetter/CoverBody";
import Signature from "../Components/CoverLetter/Signature";
import {
  personalInfo,
  hiringManagerInfo,
  coverBodyInfo,
  coverSignatureInfo,
} from "../Conf/InfoSecret";

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
        <CoverHeader personalInfo={personalInfo} />
        <Section title="" />
        <HiringManagerInfo hiringManagerInfo={hiringManagerInfo} />
        <CoverBody coverBodyInfo={coverBodyInfo} />
        <Signature coverSignatureInfo={coverSignatureInfo} />
      </Box>
    </ThemeProvider>
  );
}

export default CoverLetter;
