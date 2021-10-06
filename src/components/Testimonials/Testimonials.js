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
  centerGrid: {
    '& div': {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        width: '100%',
        '&:div': {},
      }}
    >
      <Typography
        className={classes.heading}
        variant="h4"
        component="div"
        gutterBottom
      >
        Testimonials
      </Typography>
      <Grid container className={classes.centerGrid}>
        <Grid item xs={12} md={4}>
          <TestimonialCard
            className={classes.testimonialCard}
            name={'Rachel'}
            image={'./no-profile.png'}
            content={
              'I was very disturbed when my child was not able to speak even at the age of three along with difficulties such as poor eating skills and sensory issues. Ms.Ann gave us an insight into oral placement therapy which helped us in understanding the root cause of my child&apos;s issues. Now my child is showing progress in her communication skills.'
            }
            project={'Mother of 3.7 year old'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TestimonialCard
            name={'Fatima'}
            image={'./no-profile.png'}
            content={
              'I had been struggling with stuttering since my childhood. I had low confidence and self esteem due to which I had poor social life. I wanted a cure from this difficulty and that’s when I sought help from Ms.Ann, a very dedicated and passionate speech therapist. She introduced techniques and strategies that helped me to overcome stuttering. I am able to maintain my fluent speech and speak well with others these days.'
            }
            project={'31 years old'}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TestimonialCard
            name={'Joel'}
            image={'./no-profile.png'}
            content={
              'I had speech clarity issues from my childhood. I recently enrolled for speech therapy and I am glad I did. My articulation has improved a lot since then and now I can speak clearly. I must wholeheartedly thank Ms. Ann for all the help she has provided for improving my speech clarity.'
            }
            project={'19 years old'}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Testimonials;
