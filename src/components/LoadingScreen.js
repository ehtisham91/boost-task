import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearIndeterminate() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "270px" }}>
        <LinearProgress />
      </Box>
    </Box>
  );
}
