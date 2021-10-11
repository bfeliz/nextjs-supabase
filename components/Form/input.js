import { useField } from 'formik';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='field'>
        <label className='label' htmlFor={props.name}>
          {label}{' '}
          {meta.touched && meta.error ? (
            <span className='is-danger'>{meta.error}</span>
          ) : null}
        </label>
        <div className='control'>
          <input
            className={
              'input is-large ' +
              (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : null)
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
