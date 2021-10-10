import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter();
  let headline;
  const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  if (query.headline) {
    headline = toTitleCase(query.headline);
  } else {
    headline = 'Looking for an Online Speech Therapist?';
  }
  return (
    <main>
      <Head>
        <title>annspech.com</title>

        <meta name="description" content={headline} />
      </Head>

      <Layout></Layout>
    </main>
  );
}
