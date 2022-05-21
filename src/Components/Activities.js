import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProjectDetails from "./ProjectDetails";
import { activities } from "../Conf/Info";

function Activities() {
  return activities.map(function (activity, i) {
    return <ProjectDetails detail={activity} />;
  });
}

export default Activities;
