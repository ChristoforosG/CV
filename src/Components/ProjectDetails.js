import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography } from "@mui/material";
import { Fragment } from "react";

function ProjectDetails({ detail }) {
  return (
    <Box
      sx={{
        border: 0,
        borderColor: "green",
        flexDirection: "row",
        display: "flex",
        marginX: 1.5,
      }}
    >
      <RemoveIcon
        sx={{ width: 7, height: 7, marginRight: 0.4, marginTop: 0.6 }}
      />
      <Box
        sx={{ flexDirection: "row", display: "flex", alignItems: "baseline" }}
        component="span"
      >
        {detail}
      </Box>
    </Box>
  );
}

export default ProjectDetails;
