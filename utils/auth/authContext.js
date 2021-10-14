import { createContext, useEffect, useState } from 'react';
import Router from 'next/router';
import { supabase } from '../supabaseClient';

// create context
export const AuthContext = createContext({});

// set up provider
export const AuthProvider = ({ children }) => {
  // global state
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  // signup function
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

  // signin function
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

  // signout function
  const signOut = async () => {
    setMessage('');
    await supabase.auth.signOut();
  };

  // watch for user state change through supabase, redirect on login or signout
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
