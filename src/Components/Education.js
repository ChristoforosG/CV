import { Box } from "@mui/material";
import EducationUnit from "./EducationUnit";

function Education({ education }) {
  return (
    <Box>
      {education.map(function (study, i) {
        return <EducationUnit key={i} study={study} />;
      })}
    </Box>
  );
}

export default Education;
