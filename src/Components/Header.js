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
        <Typography sx={{ fontSize: 14 }}>
          Email: {personalInfo.email}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          Mobile: {personalInfo.mobile}
        </Typography>
        <Typography sx={{ fontSize: 14 }}>
          Date of Birth: {personalInfo.dateOfBirth}
        </Typography>
      </Box>
      <Box sx={{ border: 0, borderColor: "blue", flex: 2, textAlign: "right" }}>
        <Link href={personalInfo.linkedIn} color="inherit" underline="hover">
          <Typography sx={{ fontSize: 14 }}>Linked In</Typography>
        </Link>
        <Link href={personalInfo.github} color="inherit" underline="hover">
          <Typography sx={{ fontSize: 14 }}>Github</Typography>
        </Link>
        <Link
          href={personalInfo.stackOverflow}
          color="inherit"
          underline="hover"
        >
          <Typography sx={{ fontSize: 14 }}>Stack Overflow</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
