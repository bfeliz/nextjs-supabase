import { supabase } from './utils/supabaseApiClient';

const getForms = async ({ body }, res) => {
  if (body !== null && body !== undefined) {
    const { data, error } = await supabase
      .from('forms')
      .select()
      .eq('email', body);

    if (error)
      return res
        .status(401)
        .json({ message: 'Something went wrong, please try again later.' });
    return res.status(200).json(data);
  } else {
    return res
      .status(401)
      .json({ message: 'Something went wrong, please try again later.' });
  }
};

export default getForms;
