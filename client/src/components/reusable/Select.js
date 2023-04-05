export default function Select({ name, className, options, ...rest }) {
  const renderedOptions = options.map((option) => {
    return <option>{option}</option>;
  });

  return (
    <div className='error-wrapper'>
      <div className='input-wrapper'>
        <select
          {...rest}
          name={name}
          className={`form-input form-select ${className || ''}`}
        >
          {renderedOptions}
        </select>
      </div>
    </div>
  );
}
