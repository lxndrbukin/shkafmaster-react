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
    <div className='box auth'>
      <h6 className='form-header'>Sign Up</h6>
      <form className='form' onSubmit={formSubmit}>
        <div className='input-wrapper'>
          <input name='email' type='text' />
        </div>
        <div className='input-wrapper'>
          <input name='password' type='password' />
        </div>
        <div className='input-wrapper'>
          <input name='confirmPassword' type='password' />
        </div>
        <input type='Submit' />
      </form>
    </div>
  );
}
