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
        Speech therapy for Down’s Syndrome
      </Typography>

      <Grid container direction="row" alignItems="center">
        <Box spacing={3} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
            In my clinical practice I have provided speech therapy for numerous
            children with Down’s Syndrome (DS) . In fact my first independent
            therapy session was for a child with Down’s Syndrome. All these
            children had something in common. It was their typical facial
            features.These included tongue resting outside their mouth giving
            the impression that their tongue is too big for their mouth, an open
            mouth with mouth breathing, high narrow palate etc. These facial
            features made them stand apart from other children with
            communication difficulties. Another thing that they all had in
            common was poor speech clarity. Though they were talking, it was
            difficult to understand their speech. It didn't come as a surprise
            for me as being a Speech and Language Pathologist I knew good speech
            clarity required structurally and functionally normal speech
            articulators ( jaw, lips, tongue, palate etc) . Though with intense
            speech therapy and exercises, better clarity could be achieved at
            single word level, these children continued to have affected clarity
            of speech in phrases and longer sentences.
          </Typography>
        </Box>
        <Box spacing={1} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
            A major breakthrough in this scenario happened with Oral Placement
            Therapy (OPT) developed by Sarah Rosenfield Johnson. Her intense
            work among children with Down’s Syndrome proved that children with
            Down's Syndrome do not exhibit these features at birth but it is the
            events that follow after the birth that cause these features and
            difficulties to develop. However, the good news is that development
            of these features can be prevented and children can develop speech
            with better quality through Oral Placement Therapy.
            (Rosenfield-Johnson, 1997)
          </Typography>
        </Box>
        <Box spacing={1} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
            With intervention provided as early as possible OPT helps in
            preventing these features from developing in infants and young
            children. Correcting the posture while breastfeeding itself will
            bring about changes in tongue protrusion ( tongue coming outside the
            mouth). Facial massages with and without tools, choosing appropriate
            toys for mouthing, improving chewing skills etc are some of the
            things that are taken care of as part of OPT in babies. In older
            children OPT focuses on building muscle strength, stability and
            endurance for improving the clarity of speech. This is done
            systematically through exercises using specific tools and finally
            transitioning these muscle movements to speech.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Content;
