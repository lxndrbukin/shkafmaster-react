import { useSelector } from 'react-redux';
import introImg from '../assets/imgs/wardrobe_img.png';
import introLocalization from '../localization/intro.json';
import Button from '../assets/custom/Button';

const { header, orderButton, catalogButton, text } = introLocalization;

export default function Intro() {
  const { language } = useSelector((state) => state.auth);
  return (
    <section className='intro-wrapper'>
      <div className='intro'>
        <div className='intro-left'>
          <h1>{header[language]}</h1>
          <p>{text[language]}</p>
          <div className='button-container'>
            <Button>{orderButton[language]}</Button>
            <Button className='button-transparent'>
              {catalogButton[language]} <i className='fas fa-arrow-right'></i>
            </Button>
          </div>
        </div>
        <div className='intro-right'>
          <img src={introImg} alt='SHKAFMASTER' />
        </div>
      </div>
    </section>
  );
}
