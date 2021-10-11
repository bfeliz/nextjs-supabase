import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import store from 'store2';

const FormWizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [confirmationMessage, setConfirmationMessage] = useState();

  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = parseInt(stepNumber) === parseInt(totalSteps) - 1;

  const next = (values) => {
    store.set('demo_form', values);
    setSnapshot(values);
    setStepNumber(Math.min(parseInt(stepNumber) + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(parseInt(stepNumber) - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (isLastStep) {
      // save will go here
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      validateOnChange={false}
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            {step}
            <section className='mt-6 mb-6'>
              <div className='container'>
                <div className='columns'>
                  <div className='column'>
                    {stepNumber > 0 && (
                      <button
                        className='button is-light is-large is-pulled-left'
                        onClick={() => previous(formik.values)}
                        type='button'
                      >
                        Previous
                      </button>
                    )}
                    <button
                      className='button is-primary is-large is-pulled-right'
                      disabled={formik.isSubmitting}
                      type='submit'
                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </button>
                  </div>
                </div>
                {confirmationMessage === false ? (
                  <div className='notification is-danger mb-5'>
                    <button className='delete'></button>
                    Submission error, please try again
                  </div>
                ) : null}
              </div>
            </section>
          </Form>
        );
      }}
    </Formik>
  );
};

const WizardStep = ({ children }) => children;

export { FormWizard, WizardStep };
