import Head from 'next/head';
import MetaDefaults from '../../components/MetaDefaults';
import HeroImage from '../../components/HeroImage';
import { FormWizard } from '../../components/FormWizard';
import Loader from '../../components/Loader';

const Form = ({ form }) => {
  if (form) {
    return (
      <div>
        <Head>
          <title>Website Demo Form | Website Demo</title>
          <meta
            name='description'
            content='Use this page to explore form functionality.'
          />
          <meta property='og:title' content='Homepage' />
          <meta
            property='og:description'
            content='Use this page to explore form functionality.'
          />
        </Head>
        <MetaDefaults />
        <HeroImage url={form.heroImage.fields.file.url} />
        <section className='section content'>
          <div className='container'>
            <h2 className='title is-2 has-text-centered'>{form.header}</h2>
          </div>
        </section>
        <FormWizard initialValues={{ name: '' }}></FormWizard>
      </div>
    );
  }
  return <Loader />;
};

export default Form;
