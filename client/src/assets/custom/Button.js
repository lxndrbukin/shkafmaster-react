export default function Button({ children, className, ...rest }) {
  return (
    <a {...rest} className={`button ${className || ''}`}>
      {children}
    </a>
  );
}
