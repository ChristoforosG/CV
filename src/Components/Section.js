import { Box, Typography } from "@mui/material";

function Section({ title }) {
  return (
    <Box sx={{ border: 0, borderColor: "green" }}>
      <Typography>{title}</Typography>
      <Box sx={{ border: 1, borderColor: "#006BA4", borderRadius: 1 }} />
    </Box>
  );
}

export default Section;
