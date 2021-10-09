import Head from 'next/head';

// set up default meta tags used on every page so they don't have to be re-entered separately for each page
const DefaultMeta = () => {
  return (
    <Head>
      {/* General */}
      <meta property='og:site_name' content='Website Demo' />
      <meta property='og:type' name='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta name='language' content='en-US' />
      <meta name='rating' content='general' />
      <meta name='copyright' content='Brittany Crosthwait' />
      {/* Apple */}
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-touch-fullscreen' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
    </Head>
  );
};

export default DefaultMeta;
