import { Component } from 'react';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Component {
  render() {
    return (
      <Html lang="en" class="notranslate" translate="no">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          {/* bemob tag start */}
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* bemob tag end */}

          {/* Google Analytics tag start */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-DFRW4CQGQW"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DFRW4CQGQW');`,
            }}
          />
          {/* Google Analytics tag end */}

          {/* Google Adwords tag start */}
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
              gtag('config', 'AW-944956101');
            `,
            }}
          />
          {/* Google Adwords tag end */}

          {/* smartlook tag code start */}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '071fd941a7c95879c99665dd2b8a735c5a67fd3d');`,
            }}
          />
          {/* smartlook tag end */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () => {
    return originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  };
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
