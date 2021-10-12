import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../form/components/Input';

const RegisterModal = ({ registerOpen, setRegisterOpen }) => {
  Modal.setAppElement('body');

  const handleSubmit = (values, { resetForm }) => {
    console.log('submitted');
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
          <h3 className='title is-3'>Register</h3>
        </header>
        <section>
          <Formik
            initialValues={{ email: '', password: '', confirm_password: '' }}
            onSubmit={handleSubmit}
          >
            {() => {
              return (
                <Form>
                  <div className='columnbs is-multiline'>
                    <div className='column is-12'>
                      <Input name='email' label='Email' type='email' />
                    </div>
                    <div className='column is-12'>
                      <Input name='password' label='Password' type='text' />
                    </div>
                    <div className='column is-12'>
                      <Input
                        name='confirm_password'
                        label='Confirm Password'
                        type='text'
                      />
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
