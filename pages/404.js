import Head from 'next/head';
import DefaultMeta from '../components/DefaultMeta';

const Custom404 = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found | Website Demo</title>
        <meta name='description' content='' />
        <meta property='og:title' content='Page Not Found' />
        <meta property='og:description' content='' />
      </Head>
      <DefaultMeta />
      <section className='section'>
        <div className='container has-text-centered'>
          <h1 className='title is-1'>Page Not Found</h1>
          <h2 className='subtitle is-2'>
            Sorry, the page you were looking for cannot be found
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Custom404;
