import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store';

export default function Signin() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formSubmit = (e) => {
    e.preventDefault();
    const existingUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(existingUser));
  };

  return (
    <div className='box auth'>
      <h6 className='form-header'>Sign In</h6>
      <form className='form' onSubmit={formSubmit}>
        <div className='input-wrapper'>
          <input name='email' type='text' />
          {user && user.errors ? 'Error' : ''}
        </div>
        <div className='input-wrapper'>
          <input name='password' type='password' />
        </div>
        <input type='Submit' />
      </form>
    </div>
  );
}
