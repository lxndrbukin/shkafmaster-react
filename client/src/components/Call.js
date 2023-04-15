import { useSelector } from 'react-redux';
import callImg from '../assets/imgs/callback_hallway.png';
import callLocalization from '../localization/call.json';
import Input from './reusable/Input';

const { header, nameField, phoneField, submitButton } = callLocalization;

export default function Call() {
  const { language } = useSelector((state) => state.auth);
  return (
    <section className='call-wrapper'>
      <div className='call'>
        <div className='call-form'>
          <h4 className='call-header'>{header[language]}</h4>
          <form>
            <Input
              type='text'
              placeholder={nameField[language]}
              name='name'
              errorMsg={`Please enter your name`}
              required
            />
            <Input
              type='text'
              placeholder={phoneField[language]}
              name='phone'
              errorMsg={`Please enter your phone number`}
              required
            />
            <input type='submit' value={submitButton[language]} />
          </form>
        </div>
        <div className='call-img'>
          <img src={callImg} alt='Request a call' />
        </div>
      </div>
    </section>
  );
}
