import { supabase } from './utils/supabaseApiClient';

// posts forms to supabase Postgres database, returns status to frontend
const saveForm = async (req, res) => {
  const { error } = await supabase
    .from('forms')
    .insert(req.body, { returning: 'minimal' });

  if (error)
    return res
      .status(401)
      .json({ message: 'Something went wrong, please try again later.' });
  return res.status(200).json({
    message:
      'Your form has been submitted! Sign up or log in with the same email address you entered here to view your data in your profile.',
  });
};

export default saveForm;
