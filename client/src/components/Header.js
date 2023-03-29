import { useState } from 'react';
import headerLocalization from '../localization/header.json';

const { home, products, contacts } = headerLocalization.menuButtons;
const { cart, userProfile, login } = headerLocalization.userMenu;

export default function Header() {
  const [auth, setAuth] = useState(false);
  const changeAuth = (e) => {
    e.preventDefault();
    setAuth(!auth);
  };

  const showAuth = () => {
    if (auth) {
      return (
        <li>
          <a href='/' onClick={changeAuth} title={userProfile['en']}>
            {/* <i className='fas fa-user'></i> */}
            Log out
          </a>
        </li>
      );
    }
    return (
      <li>
        <a href='/' onClick={changeAuth} title={userProfile['en']}>
          {/* <i className='fas fa-user'></i> */}
          Log in
        </a>
      </li>
    );
  };

  return (
    <header className='header-wrapper'>
      <div className='header'>
        <div className='logo'>SHKAFMASTER</div>
        <nav className='navbar'>
          <ul className='nav-links'>
            <li>
              <a href='/'>{home['en']}</a>
            </li>
            <li>
              <a href='/'>{contacts['en']}</a>
            </li>
            <li>
              <a href='/'>{products['en']}</a>
            </li>
          </ul>
        </nav>
        <div className='user-nav'>
          <ul className='user-nav-links'>
            {showAuth()}
            <li>
              <select>
                <option>RO</option>
                <option>RU</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
