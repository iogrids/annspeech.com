import ThanksLayout from '../components/Layout/ThanksLayout';
import Head from 'next/head';

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
      <ThanksLayout></ThanksLayout>
    </main>
  );
}
