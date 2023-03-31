export default function Button({ children, className }) {
  return <a className={`button ${className || ''}`}>{children}</a>;
}
