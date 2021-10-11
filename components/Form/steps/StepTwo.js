import { WizardStep } from '../FormWizard';
import Select from '../components/Select';

const StepTwo = ({ validationSchema }) => {
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
              <Select
                name='favorite_pizza'
                label='What is your favorite type of pizza?'
              >
                <option value={''}> - Pick a Type - </option>
                <option value='cheese'>Cheese</option>
                <option value='pepperoni'>Pepperoni</option>
                <option value='supreme'>Supreme</option>
                <option value='veggie'>Veggie</option>
                <option value='hawaiian'>Hawaiian</option>
              </Select>
            </div>
          </div>
        </div>
      </section>
    </WizardStep>
  );
};

export default StepTwo;
