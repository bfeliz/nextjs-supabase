import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      {/* set label and error span */}
      <div className='field'>
        <label className='label' htmlFor={props.name}>
          {label}{' '}
          {meta.touched && meta.error ? (
            <span className='error-message is-danger'>{meta.error}</span>
          ) : null}
        </label>

        {/* use formik npm package to create standard input */}
        <div className='control'>
          <input
            className={
              'input is-large ' +
              (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : '')
            }
            name={props.name}
            id={props.name}
            {...field}
            {...props}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
