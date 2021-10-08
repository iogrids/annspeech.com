import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    color: '#00b0f0',
    fontWeight: 600,
  },
  button: {
    margin: '0 auto',
    display: 'block',
    width: '160px',
    height: '46px',
    lineHeight: '46px',
    color: '#fff',
    background: 'green',
    textAlign: 'center',
    borderRadius: '6px',
    fontSize: '18px',
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <Typography
        className={classes.heading}
        variant="h3"
        component="div"
        gutterBottom
      >
        Online Speech Therapy for Children & Adults
      </Typography>
      <Button className={classes.button} variant="contained" size="large">
        Contact Me
      </Button>
    </Box>
  );
};

export default Contact;
