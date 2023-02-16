import { Box, Typography } from "@mui/material";

function Signature({ coverSignatureInfo }) {
  const margin = 2;
  return (
    <Box sx={{ border: 0, marginTop: 2 }}>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverSignatureInfo.outro}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverSignatureInfo.greet}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverSignatureInfo.name}</Typography>
      </Box>
    </Box>
  );
}

export default Signature;
