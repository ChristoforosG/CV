import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

function EducationHeader({ university, degree, location, timePeriod }) {
  return (
    <Box
      sx={{
        border: 0,
        borderColor: "red",
      }}
    >
      <Box
        sx={{
          border: 0,
          borderColor: "green",
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            border: 0,
            borderColor: "Pink",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Box
            sx={{
              border: 0,
              borderColor: "blue",
              flexDirection: "row",
              display: "flex",
              marginTop: 0.8,
              marginRight: 0.4,
            }}
          >
            <CircleIcon sx={{ width: 7, height: 7, border: 0 }} />
          </Box>
          <Box
            sx={{
              border: 0,
              borderColor: "yellow",
            }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
              {degree}
            </Typography>
            <Typography sx={{ fontSize: 13, fontStyle: "italic" }}>
              {university}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ border: 0, textAlign: "right", alignItems: "start" }}>
          <Typography sx={{ fontSize: 14 }}>{location}</Typography>
          <Typography sx={{ fontSize: 13 }}>{timePeriod}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default EducationHeader;
