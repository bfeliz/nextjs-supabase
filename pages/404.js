import Head from 'next/head';
import MetaDefaults from '../components/MetaDefaults';

const Custom404 = () => {
  return (
    <div>
      {/* adds meta tags for SEO purposes */}
      <Head>
        <title>Page Not Found | Website Demo</title>
        <meta name='description' content='' />
        <meta property='og:title' content='Page Not Found' />
        <meta property='og:description' content='' />
      </Head>
      <MetaDefaults />
      <section className='section'>
        <div className='container has-text-centered'>
          <h2 className='title is-2'>Page Not Found</h2>
          <h4 className='subtitle is-4'>
            Sorry, the page you were looking for cannot be found
          </h4>
        </div>
      </section>
    </div>
  );
};

export default Custom404;
