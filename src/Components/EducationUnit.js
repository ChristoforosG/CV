import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import EducationHeader from "./EducationHeader";
import ProjectDetails from "./ProjectDetails";

function EducationUnit({ study }) {
  return (
    <Box>
      <EducationHeader
        university={study.university}
        degree={study.degree}
        location={study.location}
        timePeriod={study.timePeriod}
      />
      <Box sx={{ marginLeft: 1.5 }}>
        <Typography sx={{ fontSize: 12 }}>GPA: {study.GPA}</Typography>
        <Typography sx={{ fontSize: 12 }}>
          Diploma Thesis: {study.thesisTitle}
        </Typography>
        <Box>
          {study.thesisDetails.map(function (detail, i) {
            return <ProjectDetails key={i} detail={detail} />;
          })}
        </Box>
        <Typography sx={{ fontSize: 12 }}>
          Diploma GPA: {study.thesisGPA}
        </Typography>
      </Box>
    </Box>
  );
}

export default EducationUnit;
