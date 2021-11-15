import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';


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
        Online Speech Therapy for Stuttering
      </Typography>

      <Grid container direction="row" alignItems="center">
        <Box spacing={3} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
          In my clinical practice I have dealt with many clients who had struggled with stammering/stuttering all their life.  If you are someone who frequently stutter then you are sure to have experienced one or all of the following; frequently getting stuck at sounds or words, feeling embarrassed to speak in front of others, often teased by friends and colleagues, failing in performing well in interviews which leads to anxiety and low confidence.
          </Typography>
        </Box>
        <Box spacing={3} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
          Well, your problem must have started all of a sudden or during childhood which could have become better or worse over a period of time, or you must have had periods of stutter- free speech only for it to reappear later. Now, if you are someone who stutter the good news is, you can get rid of these issues that you have been facing all your life and learn to successfully manage stuttering and be more confident while speaking to others within a span of 20 hours.
          </Typography>
        </Box>
        <Box spacing={3} className={classes.mainDiv}>
          <Typography variant="body1" gutterBottom>
          I have been successfully using a techinique called &quot;Camperdown Program Treatment&quot;, developed by the Australian Stuttering Research centre, on my clients with severe stuttering and have seen great success so far. It is a speech restructuring program that helps in achieving stutter-free speech not just in therapy but also in reducing stuttering in everyday speaking situations. You will attain stutter free speech in just a few sessions when the new technique is put to use. The following therapy sessions would focus on training you to use the new technique in day to day communications while focusing more on the naturalness of speech. The program also helps you to self manage stuttering even when the therapy ends to reduce the risk of stuttering appearing later. 
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Content;
