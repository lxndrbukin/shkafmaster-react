import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../store';
import loginLocalization from '../localization/loginForm.json';
import errorsLocalization from '../localization/errors.json';

const { loginHeader } = loginLocalization;
const { email, password } = loginLocalization.loginForm;
const { loginButton, notSignedUpText, signupLink } = loginLocalization;
const { emailMsg, passwordMsg } = errorsLocalization;

export default function Signin() {
  const { authErrors, language } = useSelector((state) => state.auth);
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
      <h6 className='form-header'>{loginHeader[language]}</h6>
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
        <input defaultValue={loginButton[language]} type='Submit' />
      </form>
      <div className='signup-link'>
        <span>{notSignedUpText[language]}</span>
        <Link to='/signup'>{signupLink[language]}</Link>
      </div>
    </div>
  );
}
