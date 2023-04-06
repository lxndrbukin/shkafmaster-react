import { useDispatch, useSelector } from 'react-redux';
import { createUser, showError } from '../store';
import Input from './reusable/Input';
import authLocalization from '../localization/authForm.json';
import errorsLocalization from '../localization/errors.json';

const { authHeader, authButton } = authLocalization;
const { email, password, confirmPassword } = authLocalization.authForm;
const { emailMsg, passwordMsg, confirmPasswordMsg } = errorsLocalization;

export default function Signup() {
  const { auth } = useSelector((state) => state);
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
      <h6 className='form-header'>{authHeader[language]}</h6>
      <form className='form' onSubmit={formSubmit}>
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
        <Input
          onFocus={(e) => setErrors(e, false)}
          onBlur={(e) => setErrors(e, true)}
          placeholder={confirmPassword[language]}
          name='confirmPassword'
          type='password'
          errorMsg={confirmPasswordMsg[language]}
          required
        />
        <input defaultValue={authButton[language]} type='Submit' />
      </form>
    </div>
  );
}
