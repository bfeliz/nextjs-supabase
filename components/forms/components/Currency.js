import { useField, useFormikContext } from 'formik';
import CurrencyInput from 'react-currency-input-field';

const Currency = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <label className='label' htmlFor={props.name}>
        {label}{' '}
        {meta.touched && meta.error ? (
          <span className='error-message is-danger'>{meta.error}</span>
        ) : null}
      </label>
      <CurrencyInput
        className={
          'input is-large ' +
          (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : '')
        }
        name={props.name}
        id={props.name}
        {...props}
        value={values[props.name]}
        placeholder=''
        onValueChange={(e) => {
          setFieldValue(props.name, e);
        }}
        decimalsLimit={2}
        prefix='$'
      />
    </>
  );
};

export default Currency;
