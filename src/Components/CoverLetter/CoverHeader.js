import { Box, Typography } from "@mui/material";
import { personalInfo } from "../../Conf/Info";

function CoverHeader() {
  return (
    <Box
      sx={{
        border: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          border: 0,
          borderColor: "red",
          flex: 1,
          fontWeight: "bold",
          fontSize: 32,
        }}
      >
        {personalInfo.name}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red", flex: 1 }}>
        {personalInfo.address}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red", flex: 1 }}>
        {personalInfo.mobile}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red", flex: 1 }}>
        {personalInfo.email}
      </Typography>
    </Box>
  );
}

export default CoverHeader;
