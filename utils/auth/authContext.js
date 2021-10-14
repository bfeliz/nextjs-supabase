import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { supabase } from '../supabaseClient';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const signUp = async (values, { resetForm }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setMessage(
          'There has been an error. This user may already exist. Please try again.'
        );
        resetForm();
      } else {
        setMessage('You have been registered!');
        resetForm();
      }
    } catch (error) {
      setMessage('There has been an error. Please try again.');
      resetForm();
    }
  };

  const signIn = async (values, { resetForm }) => {
    try {
      const { error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setMessage(error.message + ', please try again.');
        resetForm();
      } else {
        setMessage('You have been logged in!');
        resetForm();
      }
    } catch (error) {
      setMessage('There has been an error. Please try again.');
      resetForm();
    }
  };

  const signOut = async () => {
    setMessage('');
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) {
      setUser(user);
      setIsLoggedIn(true);
      Router.push('/profile');
    }

    supabase.auth.onAuthStateChange(async (event, session) => {
      const user = session?.user ?? null;
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        Router.push('/profile');
      } else {
        setUser(null);
        setIsLoggedIn(false);
        Router.push('/');
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        signUp,
        signIn,
        signOut,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
