import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

function BoardSkelton(props) {
  return (
    <Card sx={{ width: 375, m: 2 }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
      <Skeleton sx={{ height: 110 }} animation="wave" variant="rectangular" />
      <CardContent>
        <Skeleton animation="wave" height={30} />
      </CardContent>
    </Card>
  );
}

export default BoardSkelton;
