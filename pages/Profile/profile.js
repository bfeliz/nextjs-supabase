import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import MetaDefaults from '../../components/MetaDefaults';
import { useAuth } from '../../utils/auth/useAuth';

const Profile = () => {
  const { user, isLoggedIn } = useAuth();

  // protect profile from unauthorized users
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <div>
        <Head>
          <title>Website Demo Profile Page | Website Demo</title>
          <meta
            name='description'
            content='This profile page is only accessible if a user is logged in.'
          />
          <meta property='og:title' content='Profile' />
          <meta
            property='og:description'
            content='This profile page is only accessible if a user is logged in.'
          />
        </Head>
        <MetaDefaults />
        <section className='section content'>
          <div className='container'>
            <h2 className='title is-2 has-text-centered'>
              {`Hello ${user.email}!`}
            </h2>
            <p className='has-text-centered'>
              Glad you made it! This is a sample profile page, see your
              personalized welcome up above?
            </p>
            <p className='has-text-centered'>
              If you submitted a form and logged in with the same email address
              you input within the form, you can see that data here. If you
              haven't used the form yet, go ahead and try it out!
            </p>
          </div>
        </section>
      </div>
    );
  }

  return <div></div>;
};

export default Profile;
