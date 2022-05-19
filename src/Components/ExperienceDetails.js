import { Box, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ProjectDetails from "./ProjectDetails";

function ExperienceDetails({ project }) {
  return (
    <Box sx={{ marginLeft: 1.5 }}>
      <Box
        sx={{
          border: 0,
          borderColor: "green",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
        }}
      >
        <RadioButtonUncheckedIcon
          sx={{ width: 7, height: 7, marginRight: 0.4 }}
        />
        <Typography sx={{ fontSize: 14 }}>{project.title}</Typography>
      </Box>
      <Box>
        {project.details.map(function (detail, i) {
          return <ProjectDetails key={i} detail={detail} />;
        })}
      </Box>
    </Box>
  );
}

export default ExperienceDetails;
