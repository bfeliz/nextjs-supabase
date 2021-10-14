import { useEffect, useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import MetaDefaults from '../../components/MetaDefaults';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../../utils/auth/useAuth';
import Card from '../../components/Card';

const Profile = ({ profile }) => {
  const { user, isLoggedIn } = useAuth();
  const [forms, setForms] = useState([]);

  // protect profile from unauthorized users by redirecting to homepage
  useEffect(() => {
    if (!isLoggedIn) {
      Router.push('/');
    }
  }, [isLoggedIn]);

  // fetches any completed forms from database that user submitted
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/get-forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user ? user.email : null),
      });
      const data = await response.json();
      setForms(data);
    })();
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        {/* adds meta tags for SEO purposes */}
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
        {/* displays content pulled from Contentful */}
        <section className='section content'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-12'>
                <h2 className='title is-2 has-text-centered'>
                  {`${profile.header} ${user.email}!`}
                </h2>
                <ReactMarkdown
                  children={profile.content}
                  className='has-text-centered'
                />
              </div>
            </div>
            {/* pass form data to card component */}
            <div className='columns is-centered is-multiline'>
              {forms.map((item, i) => {
                return <Card key={i} {...item} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // display only header and footer before redirect to homepage for unauthorized users
  return <div></div>;
};

export default Profile;
