import Head from 'next/head';
import MetaDefaults from '../../components/MetaDefaults';
import ReactMarkdown from 'react-markdown';
import MarkdownLink from '../../components/MarkdownLink';
import Loader from '../../components/Loader';

const Homepage = ({ homepage }) => {
  if (homepage) {
    return (
      <div>
        {/* adds meta tags for SEO purposes */}
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
        <MetaDefaults />
        {/* displays content pulled from Contentful */}
        <section className='section content'>
          <div className='container'>
            <h2 className='title is-2 has-text-centered'>{homepage.header}</h2>
            <ReactMarkdown
              children={homepage.content}
              components={{ a: MarkdownLink }}
            />
          </div>
        </section>
      </div>
    );
  }
  // displays spinner while waiting for page to load
  return <Loader />;
};

export default Homepage;
