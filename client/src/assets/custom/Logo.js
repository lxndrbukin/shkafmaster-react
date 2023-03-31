import { Link } from 'react-router-dom';

export default function Logo({ className }) {
  return (
    <Link to='/' className={`logo ${className || ''}`}>
      SHKAF<span>MASTER</span>
    </Link>
  );
}
