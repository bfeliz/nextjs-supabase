import { useState } from 'react';
import Modal from 'react-modal';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { supabase } from '../../utils/supabaseClient';
import Input from '../form/components/Input';
import Password from '../form/components/Password';

const RegisterModal = ({ registerOpen, setRegisterOpen }) => {
  Modal.setAppElement('body');
  const [registerMessage, setRegisterMessage] = useState('');

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      if (error) {
        setRegisterMessage('There has been an error. Please try again.');
        resetForm();
      } else {
        setRegisterMessage('You have been registered!');
        resetForm();
      }
    } catch (error) {
      setRegisterMessage('There has been an error. Please try again.');
      resetForm();
    }
  };

  return (
    <div>
      <Modal
        isOpen={registerOpen}
        onRequestClose={() => setRegisterOpen(false)}
        className='modal-content'
        preventScroll={true}
      >
        <header>
          <h3 className='title is-3'>Sign Up</h3>
          <p>
            Since this is a demo site, users will not receive an email
            validation code when registering (using silly, fake email addresses
            here is encouraged!). On any site collecting real user emails, the
            email validation system would be implemented.
          </p>
        </header>
        <section>
          <Formik
            initialValues={{ email: '', password: '', confirm_password: '' }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .trim()
                .max(320)
                .required('Required'),
              password: Yup.string().trim().min(6).max(20).required('Required'),
              confirm_password: Yup.string()
                .trim()
                .min(6)
                .max(20)
                .oneOf(
                  [Yup.ref('password'), null],
                  'Check that your passwords match'
                )
                .required('Required'),
            })}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className='columnbs is-multiline'>
                    <div className='column is-12'>
                      <Input name='email' label='Email' type='email' />
                    </div>
                    <div className='column is-12'>
                      <Password name='password' label='Password' />
                    </div>
                    <div className='column is-12'>
                      <Password
                        name='confirm_password'
                        label='Confirm Password'
                      />
                    </div>
                    <div className='column is-12 mb-3'>
                      <button
                        className={
                          'button is-large is-fullwidth ' +
                          (formik.isSubmitting ? 'is-loading' : '')
                        }
                        disabled={formik.isSubmitting}
                        type='submit'
                      >
                        Sign Up
                      </button>
                      {registerMessage !== '' ? <p>{registerMessage}</p> : null}
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </section>
      </Modal>
    </div>
  );
};

export default RegisterModal;
