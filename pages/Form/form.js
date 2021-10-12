import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import * as Yup from 'yup';
import MetaDefaults from '../../components/MetaDefaults';
import HeroImage from '../../components/HeroImage';
import { FormWizard } from '../../components/forms/FormWizard';
import Loader from '../../components/Loader';
import StepOne from '../../components/forms/steps/StepOne';
import StepTwo from '../../components/forms/steps/StepTwo';
import regex from '../../components/forms/utils/regex';

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
            <ReactMarkdown children={form.subHeader} />
          </div>
        </section>
        <FormWizard
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            favorite_pizza: '',
            pizza_date: '',
            pizza_cost: '',
            delicious: '',
          }}
        >
          <StepOne
            validationSchema={Yup.object({
              first_name: Yup.string()
                .trim()
                .max(64)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s]+$/.test(value);
                  }
                )
                .required('Required'),
              last_name: Yup.string()
                .trim()
                .max(64)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s]+$/.test(value);
                  }
                )
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .trim()
                .max(320)
                .required('Required'),
              phone: Yup.string()
                .trim()
                .min(4)
                .max(16)
                .test('numeric', 'Please enter only numbers, 0-9', (value) => {
                  return /^[0-9]+$/.test(value);
                })
                .required('Required'),
            })}
          />
          <StepTwo
            validationSchema={Yup.object({
              favorite_pizza: Yup.string()
                .trim()
                .max(32)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s\-]+$/.test(value);
                  }
                )
                .required('Required'),
              pizza_date: Yup.string()
                .trim()
                .matches(regex.date, 'Please enter a correct date')
                .max(10)
                .test('numeric', 'Please enter only numbers, 0-9', (value) => {
                  return /^[0-9\/]+$/.test(value);
                })
                .required('Required'),
              pizza_cost: Yup.string()
                .trim()
                .matches(regex.currency, 'Please enter a correct dollar amount')
                .max(64)
                .required('Required'),
              delicious: Yup.string()
                .trim()
                .max(32)
                .test(
                  'alphabetic',
                  'Please enter only unaccented alphabetical letters, A-Z or a-z',
                  (value) => {
                    return /^[A-Za-z\s\!\'\,]+$/.test(value);
                  }
                )
                .required('Required'),
            })}
          />
        </FormWizard>
      </div>
    );
  }
  return <Loader />;
};

export default Form;
