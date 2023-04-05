import { useSelector } from 'react-redux';

export default function Input({
  name,
  placeholder,
  className,
  errorMsg,
  required,
  ...rest
}) {
  const { errors } = useSelector((state) => state.form);

  return (
    <div className='error-wrapper'>
      <div className='input-wrapper'>
        <input
          {...rest}
          name={name}
          placeholder={placeholder}
          className={`form-input ${className || ''}`}
        />
      </div>
      <div className='error-text'>
        {errors && errors[name] && required && errorMsg}
      </div>
    </div>
  );
}
