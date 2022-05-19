import { Typography, Box } from "@mui/material";
import EducationUnit from "./EducationUnit";
import { education } from "../Conf/Info";
function Education() {
  return (
    <Box>
      {education.map(function (study, i) {
        return <EducationUnit key={i} study={study} />;
      })}
    </Box>
  );
}

export default Education;
