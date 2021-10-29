import Head from 'next/head';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';
import Menu from '../components/Menu/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from '../components/Form/Form';
import DownSyndrome from '../components/Content/DownSyndrome';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Badge from '../components/Badge/Badge';
import ContentBanner from '../components/ContentBanner/ContentBanner';
import Faq from '../components/Faq/Faq';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Video from '../components/Video/Video';
import Pricing from '../components/Pricing/Pricing';

const useStyles = makeStyles((theme) => ({
  mainDiv: {},
  testimonials: {
    marginTop: theme.spacing(15),
  },
  heading: {
    textAlign: 'center',
    color: '#00b0f0',
    fontWeight: 600,
  },
  subHeading: {
    textAlign: 'center',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <main>
      <Head>
        <title>annspech.com</title>

        <meta name="description" content="speech therapy" />
        <meta name="keywords" content="speech therapy" />
      </Head>

      <Container className={classes.mainDiv} maxWidth="lg">
        <Menu />

        <Box spacing={3} className={classes.mainDiv}>
          <Typography
            className={classes.heading}
            variant="h3"
            component="div"
            gutterBottom
          >
            Looking for a Speech Therapist for Down Syndrome?
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
        <Grid container spacing={2}>
          <HeroBanner />

          <Form />
        </Grid>
        <DownSyndrome />
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
    </main>
  );
}
