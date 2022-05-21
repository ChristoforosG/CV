import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ListOfSkills from "./ProgrammingSkills";
import { programmingSkills, communicationSkills } from "../Conf/Info";
function Skills() {
  return (
    <Box>
      <Typography> Tools and Languages</Typography>
      <ListOfSkills skillsList={programmingSkills} />
      <Typography> Communication</Typography>
      <ListOfSkills skillsList={communicationSkills} />
    </Box>
  );
}

export default Skills;
