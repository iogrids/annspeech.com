import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu/Menu';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Head>
        <title>annspech.com</title>

        <meta name="description" content="Thank you page" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-944956101/XNRJCJKRs8sCEMXFy8ID'});
            `,
          }}
        />
        <script
          async
          src="https://track.annspeech.com/conversion.gif?cid=OPTIONAL&payout=OPTIONAL&txid=OPTIONAL"
        />
      </Head>
      <Container maxWidth="lg">
        <Menu />
        <Box
          sx={{
            width: 3 / 4,
            margin: '0 auto',
            textAlign: 'center',
            marginTop: '10rem',
            minHeight: '30vh',
          }}
        >
          <Typography variant="h6" component="div" gutterBottom>
            In response to your inquiry, I have send the necessary information
            to your email. If you cannot see it in your inbox, kindly check your
            promotions folder.
          </Typography>
        </Box>
        <Testimonials />
        <Footer />
      </Container>
    </main>
  );
}
