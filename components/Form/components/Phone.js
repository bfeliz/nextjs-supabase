import { useField, useFormikContext } from 'formik';
import PhoneInput from 'react-phone-input-2';

const Phone = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue, handleBlur, values } = useFormikContext();

  return (
    <>
      <label className='label' htmlFor={props.name}>
        {label}{' '}
        {meta.touched && meta.error ? (
          <span className='error-message is-danger'>{meta.error}</span>
        ) : null}
      </label>
      <PhoneInput
        inputProps={{
          name: props.name,
          id: props.name,
          className:
            'input is-large phone-input ' +
            (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : ''),
        }}
        {...props}
        country='us'
        value={values[props.name]}
        placeholder=''
        onChange={(e) => {
          setFieldValue(props.name, e);
        }}
        onBlur={handleBlur}
        enableSearch={true}
        countryCodeEditable={false}
      />
    </>
  );
};

export default Phone;
