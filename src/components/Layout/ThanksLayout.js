import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Testimonials from '../Testimonials/Testimonials';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: '#00b0f0',
    fontWeight: 600,
  },
  body: {
    textAlign: 'center',
  },
}));

const ThanksLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.mainDiv} maxWidth="lg">
      <Menu />
      <Typography
        className={classes.title}
        variant="h4"
        gutterBottom
        component="div"
      >
        THANK YOU!
      </Typography>
      <Typography
        className={classes.body}
        variant="h5"
        gutterBottom
        component="p"
      >
        In response to your inquiry, I have send the necessary information to
        your email. If you cannot see it in your inbox, kindly check your
        promotions folder.
      </Typography>
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default ThanksLayout;
