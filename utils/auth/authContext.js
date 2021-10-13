import { createContext, useState } from 'react';
import { supabase } from '../supabaseClient';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [message, setMessage] = useState('');

  const signUp = async (values, { resetForm }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setMessage('There has been an error. Please try again.');
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
        setMessage('There has been an error. Please try again.');
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

  return (
    <AuthContext.Provider value={{ signUp, signIn, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};
