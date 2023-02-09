import { Box, Link, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ExperienceUnit from "./ExperienceUnit";

function Experiences({ experiences }) {
  return (
    <Box>
      {experiences.map(function (experience, i) {
        return <ExperienceUnit key={i} experience={experience} />;
      })}
    </Box>
  );
}

export default Experiences;
