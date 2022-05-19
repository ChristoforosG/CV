import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EducationHeader from "./EducationHeader";

function EducationUnit({ study }) {
  return (
    <Box>
      <EducationHeader
        university={study.university}
        degree={study.degree}
        location={study.location}
        timePeriod={study.timePeriod}
      />
    </Box>
  );
}

export default EducationUnit;
