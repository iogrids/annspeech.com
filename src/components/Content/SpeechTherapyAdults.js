import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    marginBottom: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
    color: '#00b0f0',
    fontWeight: 600,
  },
}));

const Content = () => {
  const classes = useStyles();
  return (
    <Box spacing={3} className={classes.mainDiv}>
      <Typography
        className={classes.title}
        variant="h3"
        component="div"
        gutterBottom
      >
        Online Speech Therapy for Adults
      </Typography>

      <Grid container direction="row" alignItems="center">
        <Typography variant="body1" gutterBottom>
          Speech and language problems in adults may have started in childhood
          (stuttering / pronunciation issues) or developed after an illness or
          injury (stroke, parkinson&apos;s disease, dementia, oral/laryngeal
          cancer, traumatic brain injury, voice disorders etc ). Speech and
          language therapy focuses on improving the speech clarity, impaired
          language, fluency, voice and communication skills in such conditions.
        </Typography>

        <Typography variant="body1" gutterBottom>
          As a Speech Language Pathologist I will provide a complete assessment
          to know if you have any of the conditions listed above, identify the
          reasons for the issues present and provide you with a treatment plan
          to improve your speech and language skills. I will also answer all
          your concerns regarding your speech and give you strategies that has
          worked tremendously well for multiple clients with whom I have worked
          with.
        </Typography>
      </Grid>
    </Box>
  );
};

export default Content;
