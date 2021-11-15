import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { makeStyles } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: '#00b0f0',
    fontWeight: 600,
  },
}));

const Video = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        component="div"
      >
        Holistic Solutions That Empower You
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <LiteYouTubeEmbed
                id="jzguMS69R3I"
                title="Cure for stuttering in adults"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <LiteYouTubeEmbed
                id="d7TPbJ6Dtd0"
                title="Online speech therapy for adults"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Video;
