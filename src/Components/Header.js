import { Box, Link, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      <Box
        sx={{
          border: 0,
          borderColor: "blue",
          flex: 2,
        }}
      >
        <Box
          sx={{
            border: 0,
            flexDirection: "row",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Link
            href={personalInfo.linkedIn.link}
            color="inherit"
            underline="hover"
            target="_blank"
            sx={{ marginRight: 1 }}
          >
            <Typography sx={{ fontSize: 14 }}>
              {personalInfo.linkedIn.name}
            </Typography>
          </Link>
          <LinkedInIcon />
        </Box>
        <Box
          sx={{
            border: 0,
            flexDirection: "row",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginTop: 0.5,
          }}
        >
          <Link
            href={personalInfo.github.link}
            color="inherit"
            underline="hover"
            target="_blank"
            sx={{ marginRight: 1 }}
          >
            <Typography sx={{ fontSize: 14 }}>
              {personalInfo.github.name}
            </Typography>
          </Link>
          <GitHubIcon />
        </Box>
        <Box
          sx={{
            border: 0,
            flexDirection: "row",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginTop: 0.5,
          }}
        >
          <Link
            href={personalInfo.stackOverflow.link}
            color="inherit"
            underline="hover"
            target="_blank"
            sx={{ marginRight: 1 }}
          >
            <Typography sx={{ fontSize: 14 }}>
              {personalInfo.stackOverflow.name}
            </Typography>
          </Link>
          <img src="https://img.icons8.com/metro/26/000000/stackoverflow.png" />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
