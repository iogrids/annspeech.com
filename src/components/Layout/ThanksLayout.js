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
    <div className="container">
      <Head>
        <title>Ann Speech</title>
        <meta name="description" content="online speech therapy" />
        <meta name="title" content="Online speech therapy" />
        <meta
          name="description"
          content="Handles conditions such as Speech Delay, Unclear speech, Reading writing difficulties and other communication difficulties in Children and Adults!"
        />
        <meta
          name="keywords"
          content="online speech therapy, speech therapy, speech therapy for kids, speech therapy for adults, speech therapy for children"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English"></meta>
        <link rel="icon" href="/favicon.ico" />

        <script
          async
          src="https://track.annspeech.com/conversion.gif?cid=OPTIONAL&payout=OPTIONAL&txid=OPTIONAL"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-944956101"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-944956101', { page_path: window.location.pathname });
            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-944956101/XNRJCJKRs8sCEMXFy8ID'});
            `,
          }}
        />
      </Head>
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
      </Container>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default ThanksLayout;
