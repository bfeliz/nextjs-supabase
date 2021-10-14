import { useField } from 'formik';

const Radio = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='field'>
        <label className='label' htmlFor={props.name}>
          {label}{' '}
          {meta.touched && meta.error ? (
            <span className='error-message is-danger'>{meta.error}</span>
          ) : null}
        </label>
        <div className='control'>
          {props.options.map((option) => {
            return (
              <label
                key={option.key}
                className='radio form-radio mr-2'
                htmlFor={option.id}
              >
                <input
                  className='mr-2'
                  type='radio'
                  id={option.id}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                {option.key}
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Radio;
