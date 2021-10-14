import { useState } from 'react';
import Modal from 'react-modal';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../utils/auth/useAuth';
import Input from '../form/components/Input';
import Password from '../form/components/Password';

const UserModal = ({ modalOpen, setModalOpen, modalType }) => {
  // required for react-modal npm package
  Modal.setAppElement('body');

  // set state for modal
  const { signUp, signIn, message, setMessage } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegister, setIsRegister] = useState(
    modalType === 'register' ? true : false
  );

  // handle when user clicks submit
  const handleSubmit = (values) => {
    // set state for button spinner
    setIsSubmitting(true);
    // submit form data
    isRegister ? signUp(values) : signIn(values);
    // stop spinner so user can resubmit if errors
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      {/* set up react-modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => {
          setModalOpen(false);
          setMessage('');
        }}
        className='modal-content'
        preventScroll={true}
      >
        <header>
          <h3 className='title is-3'>{isRegister ? 'Sign Up' : 'Login'}</h3>
          <p>
            {isRegister
              ? 'Since this is a demo site, users will not receive an email validation code when signing up (using silly, fake email addresses here is encouraged!). On any site collecting real user emails, the email validation system would be implemented.'
              : 'Make sure you have signed up previously if this is your first time logging in. If you wish to see any forms you have submitted, use the same email address you added to the form.'}
          </p>
        </header>

        {/* add formik form to modal; form displays different fields depending if register or login */}
        <section>
          <Formik
            initialValues={{ email: '', password: '', confirm_password: '' }}
            validationSchema={Yup.object(
              Object.assign(
                {
                  email: Yup.string()
                    .email('Invalid email address')
                    .trim()
                    .max(320)
                    .required('Required'),
                  password: Yup.string()
                    .trim()
                    .min(6)
                    .max(20)
                    .required('Required'),
                },
                isRegister
                  ? {
                      confirm_password: Yup.string()
                        .trim()
                        .min(6)
                        .max(20)
                        .oneOf(
                          [Yup.ref('password'), null],
                          'Check that your passwords match'
                        )
                        .required('Required'),
                    }
                  : {}
              )
            )}
            onSubmit={handleSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className='columns is-multiline'>
                    <div className='column is-12'>
                      <Input
                        id='modalEmail'
                        name='email'
                        label='Email'
                        type='email'
                      />
                    </div>
                    <div className='column is-12'>
                      <Password name='password' label='Password' />
                    </div>
                    {isRegister ? (
                      <div className='column is-12'>
                        <Password
                          name='confirm_password'
                          label='Confirm Password'
                        />
                      </div>
                    ) : null}

                    <div className='column is-12 mb-3'>
                      <button
                        className={
                          'button is-large is-fullwidth ' +
                          (isSubmitting ? 'is-loading' : '')
                        }
                        disabled={isSubmitting}
                        type='submit'
                      >
                        {isRegister ? 'Sign Up' : 'Login'}
                      </button>
                      {message !== '' ? <p>{message}</p> : null}
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

export default UserModal;
