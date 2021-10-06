import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TestimonialCard from 'material-testimonial-card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    color: '#00b0f0',
    marginTop: theme.spacing(5),
    fontWeight: 600,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.heading}
        variant="h4"
        component="div"
        gutterBottom
      >
        Testimonials
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          one
        </Grid>
        <Grid item xs={12} md={4}>
          two
        </Grid>
        <Grid item xs={12} md={4}>
          three
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
