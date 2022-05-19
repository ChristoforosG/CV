import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceDetails from "./ExperienceDetails";

function ExperienceUnit({ experience }) {
  return (
    <Box>
      <ExperienceHeader
        company={experience.company}
        role={experience.role}
        location={experience.location}
        timePeriod={experience.timePeriod}
      />

      <Box>
        {experience.projects.map(function (project, i) {
          return <ExperienceDetails key={i} project={project} />;
        })}
      </Box>
    </Box>
  );
}

export default ExperienceUnit;
