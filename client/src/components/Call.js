import callImg from '../assets/imgs/callback_hallway.png';
import callLocalization from '../localization/call.json';

const { header, nameField, phoneField, submitButton } = callLocalization;

export default function Call() {
  return (
    <section className='call-wrapper'>
      <div className='call'>
        <div className='call-form'>
          <h4>{header['en']}</h4>
          <form>
            <input type='text' placeholder={nameField['en']} name='name' />
            <input type='text' placeholder={phoneField['en']} name='phone' />
            <input type='submit' value={submitButton['en']} />
          </form>
        </div>
        <div className='call-img'>
          <img src={callImg} alt='Request a call' />
        </div>
      </div>
    </section>
  );
}
