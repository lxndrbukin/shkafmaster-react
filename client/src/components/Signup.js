import { useDispatch } from 'react-redux';
import { createUser } from '../store';

export default function Signup() {
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
    };
    dispatch(createUser(user));
  };

  return (
    <form onSubmit={formSubmit}>
      <input name='email' type='text' />
      <input name='password' type='password' />
      <input name='confirmPassword' type='password' />
      <input type='Submit' />
    </form>
  );
}
