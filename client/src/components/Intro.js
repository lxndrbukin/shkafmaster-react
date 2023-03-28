import introImg from '../assets/imgs/wardrobe_img.png';
import introLocalization from '../localization/intro.json';
import Button from '../assets/custom/Button';

const { header, orderButton, catalogButton, text } = introLocalization;

export default function Intro() {
  return (
    <section className='intro-wrapper'>
      <div className='intro'>
        <div className='intro-left'>
          <h1>{header['en']}</h1>
          <p>{text['en']}</p>
          <div className='button-container'>
            <Button>{orderButton['en']}</Button>
            <Button>{catalogButton['en']}</Button>
          </div>
        </div>
        <div className='intro-right'>
          <img src={introImg} alt='SHKAFMASTER' />
        </div>
      </div>
    </section>
  );
}
