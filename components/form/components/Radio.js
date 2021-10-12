import { Field } from 'formik';

const Radio = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className='control'>
      <label className='label' htmlFor={name}>
        {label}
      </label>
      <Field name={name} {...rest}>
        {({ field, meta }) => {
          return (
            <>
              {meta.touched && meta.error ? (
                <span className='error-message is-danger'>{meta.error}</span>
              ) : null}
              {options.map((option) => {
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
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default Radio;
