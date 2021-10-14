import { useField } from 'formik';

const Select = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {/* set label and error span */}
      <label className='label' htmlFor={props.name}>
        {label}{' '}
        {meta.touched && meta.error ? (
          <span className='error-message is-danger'>{meta.error}</span>
        ) : null}
      </label>

      {/* use formik npm package to create select field */}
      <div
        className={
          'select is-large is-fullwidth ' +
          (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : '')
        }
      >
        <select id={props.name} name={props.name} {...field} {...props}>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
