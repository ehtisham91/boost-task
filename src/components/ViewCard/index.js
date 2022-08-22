import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Styles from "./styles";

export const ViewCard = ({ title, subtitle }) => {
  const sxStyles = Styles();

  return (
    <Card sx={sxStyles.card}>
      <CardContent>
        <Box mb={2}>
          <Grid container spacing={3} sx={sxStyles.mainSub}>
            <Grid item>
              <Box
                sx={sxStyles.eyeIcon}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <RemoveRedEyeIcon color="action" />
              </Box>
            </Grid>
            <Grid item>
              <ShowChartIcon color="warning" sx={sxStyles.showChartIcon} />
            </Grid>
          </Grid>
          <Typography color="textSecondary" gutterBottom variant="body2">
            {title}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {subtitle}
          </Typography>
        </Box>
        <Divider />
        <Box sx={sxStyles.lastHeading}>
          <Typography color="textSecondary" variant="body2">
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
