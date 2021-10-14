import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { animateScroll as Scroll } from 'react-scroll';

const FormWizard = ({ children, initialValues }) => {
  // set wizard state for wizard
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const [submissionMessage, setSubmissionMessage] = useState(null);

  // manage step position
  const steps = React.Children.toArray(children);
  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = parseInt(stepNumber) === parseInt(totalSteps) - 1;

  // handle when user clicks next
  const next = (values) => {
    // set snapshot so user data remains while clicking between next and previous
    setSnapshot(values);
    // update step number
    setStepNumber(Math.min(parseInt(stepNumber) + 1, totalSteps - 1));
    // return user to top of form
    Scroll.scrollToTop();
  };

  // handle when user clicks previous
  const previous = (values) => {
    // set snapshot so user data remains while clicking between next and previous
    setSnapshot(values);
    // update step number
    setStepNumber(Math.max(parseInt(stepNumber) - 1, 0));
    // return user to top of form
    Scroll.scrollToTop();
  };

  // handle when user clicks submit
  const handleSubmit = async (values, bag) => {
    if (isLastStep) {
      // submit form data if is last step
      const response = await fetch('/api/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setSubmissionMessage(data.message);
      response.status === 401 ? null : (bag.resetForm(), setStepNumber(0));
    } else {
      // pass user to the function 'next' if is not last step
      bag.setTouched({});
      next(values);
      // clear previous message if they are entering a new form or fixing a failed submission
      setSubmissionMessage(null);
    }
  };

  return (
    // initialize formik form
    <Formik
      validateOnChange={false}
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            {/* form components rendered here */}
            {step}

            {/* add previous and next/submit buttons */}
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
