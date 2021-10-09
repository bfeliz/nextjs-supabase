import Homepage from './homepage';
import contentfulClient from '../../utils/contentfulClient';
import { pageRevalidate } from '../../utils/config';

export const getStaticProps = async () => {
  // fetch data from contentful
  const res = await contentfulClient().getEntries({
    content_type: 'homepage',
  });

  // reduce returned object to wanted fields only
  const homepage = await res.items[0].fields;

  return {
    // set amount in seconds after which a page re-generation can occur
    revalidate: pageRevalidate,
    // pass data as props to page
    props: {
      homepage,
    },
  };
};

export default Homepage;
