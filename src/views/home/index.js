import * as React from "react";
import Container from "@mui/material/Container";
import Board from "../../components/Board";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ViewCard } from "../../components/ViewCard";
import LinearIndeterminate from "../../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  const timer = () => {
    setLoading(false);
  };

  React.useEffect(() => {
    const id = setTimeout(timer, 2000);
    return () => clearTimeout(id);
  }, []);

  return loading ? (
    <LinearIndeterminate />
  ) : (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Box mt={5}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ViewCard title={"Total Views"} subtitle={304.5} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ViewCard title={"Total Products"} subtitle={14.5} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ViewCard title={"Total Users"} subtitle={160} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <ViewCard title={"Total Sells"} subtitle={90} />
          </Grid>
        </Grid>
      </Box>
      <Box
        mt={5}
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Board />
      </Box>
    </Container>
  );
}
