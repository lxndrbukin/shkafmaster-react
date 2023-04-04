import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, showError } from '../store';
import loginLocalization from '../localization/loginForm.json';
import errorsLocalization from '../localization/errors.json';

const { loginHeader } = loginLocalization;
const { email, password } = loginLocalization.loginForm;
const { loginButton, notSignedUpText, signupLink } = loginLocalization;
const { emailMsg, passwordMsg } = errorsLocalization;

export default function Signin() {
  const { auth, form } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(loginUser(existingUser));
  };

  const setErrors = (e) => {
    if (e.target.value === '') {
      dispatch(showError({ [e.target.name]: true }));
    } else {
      return;
    }
  };

  const removeErrors = (e) => {
    dispatch(showError({ [e.target.name]: false }));
  };

  const { errors } = form;
  const { language } = auth;
  return (
    <div className='box auth'>
      <h6 className='form-header'>{loginHeader[language]}</h6>
      <form className='form' onSubmit={handleSubmit}>
        <div className='error-wrapper'>
          <div className='input-wrapper'>
            <input
              onFocus={removeErrors}
              onBlur={setErrors}
              placeholder={email[language]}
              name='email'
              type='text'
            />
          </div>
          <div className='error-text'>
            {errors && errors.email && emailMsg[language]}
          </div>
        </div>
        <div className='error-wrapper'>
          <div className='input-wrapper'>
            <input
              onFocus={removeErrors}
              onBlur={setErrors}
              placeholder={password[language]}
              name='password'
              type='password'
            />
          </div>
          <div className='error-text'>
            {errors && errors.password && passwordMsg[language]}
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
