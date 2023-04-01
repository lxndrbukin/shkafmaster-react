import { useDispatch, useSelector } from 'react-redux';
import { changeAuth, changeLanguage } from '../store';
import { Link } from 'react-router-dom';
import Logo from '../assets/custom/Logo';
import headerLocalization from '../localization/header.json';

const { home, products, contacts } = headerLocalization.menuButtons;
const { cart, userProfile, login } = headerLocalization.userMenu;

const languages = ['ro', 'ru', 'en'];
const menuButtons = [home, products, contacts];

export default function Header() {
  const dispatch = useDispatch();
  const { user, language } = useSelector((state) => state.auth);

  const setLangauge = (e) => {
    dispatch(changeLanguage(e.target.value.toLowerCase()));
  };

  const showAuth = () => {
    if (user) {
      return (
        <li className='user-nav-link'>
          <Link to='/profile'>
            <i className='fas fa-user'></i>
          </Link>
        </li>
      );
    }
    return (
      <li className='user-nav-link'>
        <Link to='/signin'>
          <i className='fas fa-sign-in-alt'></i>
        </Link>
      </li>
    );
  };

  const renderedMenuButtons = menuButtons.map((button) => {
    return (
      <li key={button['en']}>
        <a href='/'>{button[language]}</a>
      </li>
    );
  });

  const renderedOptions = languages.map((lang) => {
    return <option key={lang}>{lang.toUpperCase()}</option>;
  });

  return (
    <header className='header-wrapper'>
      <div className='header'>
        <Logo />
        <nav className='navbar'>
          <ul className='nav-links'>{renderedMenuButtons}</ul>
        </nav>
        <div className='user-nav'>
          <ul className='user-nav-links'>
            {showAuth()}
            <li className='user-nav-link'>
              <select
                className='lang-selector'
                defaultValue={language.toUpperCase()}
                onChange={setLangauge}
              >
                {renderedOptions}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
