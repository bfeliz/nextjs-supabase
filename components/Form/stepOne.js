import { WizardStep } from './FormWizard';
import Input from './input';

const StepOne = ({ validationSchema }) => {
  return (
    <WizardStep validationSchema={validationSchema}>
      <section>
        <div className='container'>
          <div>
            <h2 className='title is-2'></h2>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-6'>
              <Input name='first_name' label='First Name' type='text' />
            </div>
            <div className='column is-6'>
              <Input name='last_name' label='Last Name' type='text' />
            </div>
          </div>
        </div>
      </section>
    </WizardStep>
  );
};

export default StepOne;
