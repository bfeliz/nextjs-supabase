import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';

const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <label className='label' htmlFor={props.name}>
        {label}{' '}
        {meta.touched && meta.error ? (
          <span className='error-message is-danger'>{meta.error}</span>
        ) : null}
      </label>
      <DatePicker
        className={
          'input is-large is-fullwidth ' +
          (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : '')
        }
        name={props.name}
        id={props.name}
        {...props}
        selected={(field.value && new Date(field.value)) || ''}
        onChange={(date, e) => {
          setFieldValue(
            field.name,
            date !== null ? date.toLocaleDateString() : ''
          );
        }}
        maxDate={new Date()}
        minDate={new Date('1900/01/01')}
        showYearDropdown
        scrollableYearDropdown
      />
    </>
  );
};

export default DateInput;
