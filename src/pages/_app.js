import { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    body1: {
      // write global css styles here
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />{' '}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
