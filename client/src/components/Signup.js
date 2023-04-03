import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../store';
import authLocalization from '../localization/authForm.json';
import errorsLocalization from '../localization/errors.json';

const { authHeader, authButton } = authLocalization;
const { email, password, confirmPassword } = authLocalization.authForm;
const { emailMsg, passwordMsg, confirmPasswordMsg } = errorsLocalization;

export default function Signup() {
  const { authErrors, language } = useSelector((state) => state.auth);
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
      <h6 className='form-header'>{authHeader[language]}</h6>
      <form className='form' onSubmit={formSubmit}>
        <div className='error-wrapper'>
          <div className='input-wrapper'>
            <input placeholder={email[language]} name='email' type='text' />
          </div>
          <div className='error-text'>
            {authErrors.email && emailMsg[language]}
          </div>
        </div>
        <div className='error-wrapper'>
          <div className='input-wrapper'>
            <input
              placeholder={password[language]}
              name='password'
              type='password'
            />
          </div>
          <div className='error-text'>
            {authErrors.password && passwordMsg[language]}
          </div>
        </div>
        <div className='error-wrapper'>
          <div className='input-wrapper'>
            <input
              placeholder={confirmPassword[language]}
              name='confirmPassword'
              type='password'
            />
          </div>
          <div className='error-text'>
            {authErrors.confirmPassword && confirmPasswordMsg[language]}
          </div>
        </div>
        <input defaultValue={authButton[language]} type='Submit' />
      </form>
    </div>
  );
}
