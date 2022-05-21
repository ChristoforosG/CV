import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

function ListOfSkills({ skillsList }) {
  return (
    <Box sx={{ border: 0, marginX: 1.5 }}>
      {skillsList.map(function (skill, i) {
        return (
          <Box
            key={i}
            sx={{ border: 0, flexDirection: "row", display: "flex" }}
          >
            <Box sx={{ border: 0, flex: 1 }}>
              <Typography sx={{ fontSize: 12 }}>{skill.header}:</Typography>
            </Box>
            <Box sx={{ border: 0, flex: 6 }}>
              <Typography sx={{ fontSize: 12, fontStyle: "italic" }}>
                {skill.data}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default ListOfSkills;
