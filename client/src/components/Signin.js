import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, showError } from '../store';
import Input from './reusable/Input';
import loginLocalization from '../localization/loginForm.json';
import errorsLocalization from '../localization/errors.json';

const { loginHeader } = loginLocalization;
const { email, password } = loginLocalization.loginForm;
const { loginButton, notSignedUpText, signupLink } = loginLocalization;
const { emailMsg, passwordMsg } = errorsLocalization;

export default function Signin() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(existingUser));
  };

  const setErrors = (e, bool) => {
    if (e.target.value === '') {
      dispatch(showError({ [e.target.name]: bool }));
    } else {
      return;
    }
  };

  const { language } = auth;
  return (
    <div className='box auth'>
      <h6 className='form-header'>{loginHeader[language]}</h6>
      <form className='form' onSubmit={handleSubmit}>
        <Input
          onFocus={(e) => setErrors(e, false)}
          onBlur={(e) => setErrors(e, true)}
          placeholder={email[language]}
          name='email'
          type='text'
          errorMsg={emailMsg[language]}
          required
        />
        <Input
          onFocus={(e) => setErrors(e, false)}
          onBlur={(e) => setErrors(e, true)}
          placeholder={password[language]}
          name='password'
          type='password'
          errorMsg={passwordMsg[language]}
          required
        />
        <input defaultValue={loginButton[language]} type='Submit' />
      </form>
      <div className='signup-link'>
        <span>{notSignedUpText[language]}</span>
        <Link to='/signup'>{signupLink[language]}</Link>
      </div>
    </div>
  );
}
