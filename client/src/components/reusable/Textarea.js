import { useSelector } from 'react-redux';

export default function Textarea({
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
        <textarea
          {...rest}
          className={`form-textarea ${className || ''}`}
          placeholder={placeholder}
          name={name}
        ></textarea>
      </div>
      <div className='error-text'>
        {errors && errors[name] && required && errorMsg}
      </div>
    </div>
  );
}
