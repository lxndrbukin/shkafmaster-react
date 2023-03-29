import { useDispatch } from 'react-redux';
import { loginUser } from '../store';

export default function Signin() {
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(user));
  };

  return (
    <form onSubmit={formSubmit}>
      <input name='email' type='text' />
      <input name='password' type='password' />
      <input type='Submit' />
    </form>
  );
}
