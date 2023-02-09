import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListOfSkills from "./ProgrammingSkills";

function Skills({
  programmingTitle,
  communicationTitle,
  programmingSkills,
  communicationSkills,
}) {
  return (
    <Box>
      <Typography> {programmingTitle}</Typography>
      <ListOfSkills skillsList={programmingSkills} />
      <Typography> {communicationTitle}</Typography>
      <ListOfSkills skillsList={communicationSkills} />
    </Box>
  );
}

export default Skills;
