import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../store';
import headerLocalization from '../localization/header.json';

const { home, products, contacts } = headerLocalization.menuButtons;
const { cart, userProfile, login } = headerLocalization.userMenu;

export default function Header() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const setAuth = (e) => {
    e.preventDefault();
    dispatch(changeAuth(!status));
  };

  const showAuth = () => {
    if (status) {
      return (
        <li>
          <a href='/' onClick={(e) => setAuth(e)} title={userProfile['en']}>
            {/* <i className='fas fa-user'></i> */}
            Log out
          </a>
        </li>
      );
    }
    return (
      <li>
        <a href='/' onClick={(e) => setAuth(e)} title={userProfile['en']}>
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
