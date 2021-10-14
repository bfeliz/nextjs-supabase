import React, { useState } from 'react';
import { Form, Formik } from 'formik';

const FormWizard = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = parseInt(stepNumber) === parseInt(totalSteps) - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(Math.min(parseInt(stepNumber) + 1, totalSteps - 1));
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(Math.max(parseInt(stepNumber) - 1, 0));
  };

  const handleSubmit = async (values, bag) => {
    if (isLastStep) {
      const response = await fetch('/api/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setSubmissionMessage(data.message);
      bag.resetForm();
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
                      className='button is-final is-large is-pulled-right'
                      disabled={formik.isSubmitting}
                      type='submit'
                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </button>
                  </div>
                </div>
                {submissionMessage !== null ? (
                  <div className='notification mb-5'>{submissionMessage}</div>
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
