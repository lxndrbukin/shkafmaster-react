import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, logoutUser } from '../store';
import { Link } from 'react-router-dom';
import Logo from '../assets/custom/Logo';
import headerLocalization from '../localization/header.json';

const { home, products, contacts } = headerLocalization.menuButtons;
const { cart, userProfile, login } = headerLocalization.userMenu;

const languages = ['ro', 'ru', 'en'];
const menuButtons = [home, products, contacts];

export default function Header() {
  const dispatch = useDispatch();
  const { status, user, language } = useSelector((state) => state.auth);

  const setLangauge = (e) => {
    dispatch(changeLanguage(e.target.value.toLowerCase()));
  };

  const changeLogin = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  const showAuth = () => {
    if (status) {
      return (
        <li className='user-nav-link'>
          <Link
            title={userProfile[language]}
            onClick={changeLogin}
            to='/profile'
          >
            <i className='fas fa-user'></i>
          </Link>
        </li>
      );
    }
    return (
      <li className='user-nav-link'>
        <Link title={login[language]} to='/signin'>
          <i className='fas fa-sign-in-alt'></i>
        </Link>
      </li>
    );
  };

  const showAdmin = () => {
    if (status && user.role === 'admin') {
      return (
        <li className='user-nav-link'>
          <Link title='Admin' to='/admin'>
            <i className='fas fa-tools'></i>
          </Link>
        </li>
      );
    } else {
      return null;
    }
  };

  const renderedMenuButtons = menuButtons.map((button) => {
    return (
      <li key={button['en']}>
        <Link
          to={`/${button['en'] === 'Home' ? '' : button['en'].toLowerCase()}`}
        >
          {button[language]}
        </Link>
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
            {showAdmin()}
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
