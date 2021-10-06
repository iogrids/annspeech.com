import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Menu from '../Menu/Menu';
import Headline from '../Headline/Headline';
import Form from '../Form/Form';
import Content from '../Content/Content';
import HeroBanner from '../HeroBanner/HeroBanner';
import Badge from '../Badge/Badge';
import ContentBanner from '../ContentBanner/ContentBanner';
import Faq from '../Faq/Faq';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core';
import Video from '../Video/Video';

const useStyles = makeStyles((theme) => ({
  mainDiv: {},
  testimonials: {
    marginTop: theme.spacing(15),
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Container className={classes.mainDiv} maxWidth="lg">
      <Menu />

      <Headline />
      <Grid container spacing={2}>
        <HeroBanner />

        <Form />
      </Grid>
      <Content />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ContentBanner />
        </Grid>
        <Grid item xs={12} md={8}>
          <Badge />
          <Video />
        </Grid>
      </Grid>
      <Faq />

      <Testimonials />

      <Contact />

      <Footer />
    </Container>
  );
};

export default Layout;
