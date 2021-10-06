import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
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
              <CardMedia
                component="iframe"
                title="test"
                src="https://www.youtube.com/embed/Pz6sle4QxWQ"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ minWidth: 275 }}>
            <CardContent>
              <CardMedia
                component="iframe"
                title="test"
                src="https://www.youtube.com/embed/d7TPbJ6Dtd0"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Video;
