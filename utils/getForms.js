import { supabase } from './supabaseClient';

const getForms = async (email) => {
  try {
    const { data, error } = await supabase
      .from('forms')
      .select()
      .eq('email', email);
    if (error) {
      console.log(error.message);
    } else {
      return [data];
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default getForms;
