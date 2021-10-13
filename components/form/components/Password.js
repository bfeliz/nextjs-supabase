import { useState } from 'react';
import { useField } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Password = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className='field'>
        <label className='label' htmlFor={props.name}>
          {label}{' '}
          {meta.touched && meta.error ? (
            <span className='error-message is-danger'>{meta.error}</span>
          ) : null}
        </label>
        <div className='control has-icons-right'>
          <input
            className={
              'input is-large ' +
              (meta.touched ? (meta.error ? 'is-danger' : 'is-success') : '')
            }
            name={props.name}
            id={props.name}
            type={showPassword ? 'text' : 'password'}
            {...field}
            {...props}
          />
          <span className='icon is-right has-text-grey-light'>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className='is-password'
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Password;
