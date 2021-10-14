import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { supabase } from '../supabaseClient';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const signUp = async (values) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setMessage(
          'There has been an error. This user may already exist. Please try again.'
        );
      } else {
        setMessage('You have been registered!');
      }
    } catch (error) {
      setMessage('There has been an error. Please try again.');
    }
  };

  const signIn = async (values) => {
    try {
      const { error } = await supabase.auth.signIn({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setMessage(error.message + ', please try again.');
      } else {
        setMessage('You have been logged in!');
      }
    } catch (error) {
      setMessage('There has been an error. Please try again.');
    }
  };

  const signOut = async () => {
    setMessage('');
    await supabase.auth.signOut();
  };

  useEffect(() => {
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
