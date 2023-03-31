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
    <div className='box auth'>
      <h6 className='form-header'>Sign In</h6>
      <form className='form' onSubmit={formSubmit}>
        <div className='input-wrapper'>
          <input name='email' type='text' />
        </div>
        <div className='input-wrapper'>
          <input name='password' type='password' />
        </div>
        <input type='Submit' />
      </form>
    </div>
  );
}
