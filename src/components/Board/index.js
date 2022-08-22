import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

import BorderlessInput from "../BorderlessInput";
import Styles from "./styles";
import BoardSkelton from "./Skelton";

export default function Board() {
  const sxStyles = Styles();

  const [loading, setLoading] = React.useState(true);

  const timer = () => {
    setLoading(false);
  };

  React.useEffect(() => {
    const id = setTimeout(timer, 2000);
    return () => clearTimeout(id);
  }, []);

  return loading ? (
    <BoardSkelton />
  ) : (
    <Card sx={sxStyles.card}>
      <CardHeader
        sx={sxStyles.cardHeader}
        avatar={
          <Avatar
            sx={sxStyles.userAvatar}
            src="https://www.pinkvilla.com/imageresize/tom_mission_impossible.jpg?width=752&format=webp&t=pvorg"
          >
            Emiliy
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <CloseIcon sx={sxStyles.closeIcon} />
          </IconButton>
        }
        title={
          <Typography
            variant="h6"
            sx={sxStyles.authorName}
            color="common.white"
          >
            Emiliy Dougrer
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={sxStyles.title}>
            Developer
          </Typography>
        }
      />
      <CardContent sx={sxStyles.cardContent}>
        <Typography
          variant="body2"
          sx={sxStyles.description}
          color="common.white"
        >
          Hi there. 👋 We use Boards to share initial goals and ideas.
        </Typography>
      </CardContent>
      <Box
        mt={2}
        sx={sxStyles.action}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <BorderlessInput title={"Type your message..."} />
        <Typography variant="body2" color="text.secondary">
          Send
        </Typography>
      </Box>
    </Card>
  );
}
