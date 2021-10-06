import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginBottom: theme.spacing(5),
  },
  heading: {
    textAlign: 'center',
    color: '#00b0f0',
    fontWeight: 600,
  },
  subHeading: {
    textAlign: 'center',
  },
}));

const Headline = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <Typography
        className={classes.heading}
        variant="h3"
        component="div"
        gutterBottom
      >
        Looking for an Online Speech Therapist?
      </Typography>

      <Typography
        className={classes.subHeading}
        variant="h6"
        component="div"
        gutterBottom
      >
        I handle conditions such as Speech Delay, Stuttering, Cleft Lip &
        Palate, Unclear Speech, Reading & Writing difficulties and other
        communication difficulties in Children and Adults!
      </Typography>
    </Box>
  );
};

export default Headline;
