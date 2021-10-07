import Layout from '../components/Layout/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
      <Head>
        <title>annspech.com</title>

        <meta name="description" content="online speech therapy" />
      </Head>

      <Layout></Layout>
    </main>
  );
}
