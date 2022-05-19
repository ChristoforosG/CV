import { Box, Link, Typography } from "@mui/material";
import { personalInfo } from "../Conf/Info";

function Header({}) {
  return (
    <Box
      sx={{
        border: 0,
        borderColor: "red",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <Box sx={{ border: 0, borderColor: "blue", flex: 2 }}>
        <Typography variant="h4">{personalInfo.name}</Typography>
        <Typography>Email: {personalInfo.email}</Typography>
        <Typography>Mobile: {personalInfo.mobile}</Typography>
      </Box>
      <Box sx={{ border: 0, borderColor: "blue", flex: 2, textAlign: "right" }}>
        <Link href={personalInfo.linkedIn} color="inherit" underline="hover">
          <Typography>Linked In</Typography>
        </Link>
        <Link href={personalInfo.github} color="inherit" underline="hover">
          <Typography>Github</Typography>
        </Link>
        <Link
          href={personalInfo.stackOverflow}
          color="inherit"
          underline="hover"
        >
          <Typography>Stack Overflow</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
