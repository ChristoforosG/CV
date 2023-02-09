import { Box, Typography } from "@mui/material";
import { hiringManagerInfo } from "../../Conf/Info";

function HiringManagerInfo() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date();
  return (
    <Box sx={{ border: 0 }}>
      <Typography sx={{ border: 0, borderColor: "red", marginBottom: 2 }}>
        {today.getDate()} {monthNames[today.getMonth()]}, {today.getFullYear()}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red" }}>
        {hiringManagerInfo.name}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red" }}>
        {hiringManagerInfo.address}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red" }}>
        {hiringManagerInfo.phone}
      </Typography>
      <Typography sx={{ border: 0, borderColor: "red" }}>
        {hiringManagerInfo.email}
      </Typography>
    </Box>
  );
}

export default HiringManagerInfo;
