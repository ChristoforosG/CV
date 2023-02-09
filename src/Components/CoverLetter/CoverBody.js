import { Box, Typography } from "@mui/material";
import { coverBodyInfo } from "../../Conf/Info";

function CoverBody() {
  const margin = 2;
  return (
    <Box sx={{ border: 0, marginTop: 2 }}>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverBodyInfo.intro}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverBodyInfo.past_experience}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverBodyInfo.career_keypoints}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverBodyInfo.conclusion}</Typography>
      </Box>
      <Box sx={{ marginTop: margin }}>
        <Typography>{coverBodyInfo.outro}</Typography>
      </Box>
    </Box>
  );
}

export default CoverBody;
