import Head from 'next/head';
import DefaultMeta from '../components/defaultMeta';

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Website Demo Homepage | Website Demo</title>
        <meta
          name='description'
          content='Welcome to this website demo. Please explore and test out the functionality!'
        />
        <meta property='og:title' content='Homepage' />
        <meta
          property='og:description'
          content='Welcome to this website demo. Please explore and test out the functionality!'
        />
      </Head>
      <DefaultMeta />
      <section className='section'>
        <div className='container'>
          <h1>Hello World</h1>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
