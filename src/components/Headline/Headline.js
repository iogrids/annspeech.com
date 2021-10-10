import { makeStyles } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  mainDiv: {},
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
  const { query } = useRouter();
  let headline;

  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  if (query.headline) {
    headline = toTitleCase(query.headline);
  } else {
    headline = 'Looking for an Online Speech Therapist?';
  }
  const classes = useStyles();
  return (
    <Box spacing={3} className={classes.mainDiv}>
      <Typography
        className={classes.heading}
        variant="h3"
        component="div"
        gutterBottom
      >
        {headline}
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
