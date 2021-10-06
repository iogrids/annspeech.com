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
    <Box className={classes.mainDiv}>
      <Typography
        className={classes.title}
        variant="h3"
        component="div"
        gutterBottom
      >
        Why should you seek help at the earliest?
      </Typography>

      <Typography variant="body1" gutterBottom>
        It is very important that your child's communication difficulties are
        identified and treated at the earliest. Younger the age, better the
        positive outcomes from the treatment. This is because the human brain is
        developing at a much faster rate during the first 3 years of life and
        slows down after 6 years of age. During these initial years of life, the
        brain has the maximum capacity to adapt and grow. Hence, any
        intervention provided during these initial years will give maximum
        benefits.
      </Typography>
      <Typography variant="body1" gutterBottom>
        It is common for toddlers and young children to have SPEECH AND LANGUAGE
        DELAY, also associated with conditions such as AUTISM, ATTENTION DEFICIT
        HYPERACTIVITY DISORDER, CHILDHOOD APRAXIA OF SPEECH, DOWN'S SYNDROME,
        CEREBRAL PALSY, HEARING LOSS, CLEFT LIP AND PALATE etc. Reading and
        writing disorders associated with LEARNING DISABILITY, childhood
        STUTTERING, UNCLEAR SPEECH, ORO MOTOR AND FEEDING ISSUES are also
        common.
      </Typography>
      <Typography variant="body1" gutterBottom>
        As a Speech Language Pathologist I will provide a complete assessment to
        know if your child has any of the conditions listed above, identify the
        reasons for the issues present and provide you with a treatment plan to
        improve your child's speech, language and feeding skills. I will also
        answer all your concerns regarding your child's speech, language and
        feeding issues and give you strategies that has worked tremendously well
        for the kids I have given speech therapy in various established speech
        therapy centres.
      </Typography>

      <Typography variant="h6" component="div" gutterBottom>
        Speech Therapy for Adults
      </Typography>
      <Typography variant="body1" gutterBottom>
        Speech and language problems in adults may have started in childhood
        (stuttering / pronunciation issues) or developed after an illness or
        injury (stroke, parkinson's disease, dementia, oral/laryngeal cancer,
        traumatic brain injury, voice disorders etc ). Speech and language
        therapy focuses on improving the speech clarity, impaired language,
        fluency, voice and communication skills in such conditions.
      </Typography>
    </Box>
  );
};

export default Content;
