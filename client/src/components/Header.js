import headerLocalization from '../localization/header.json';

const { home, products, contacts } = headerLocalization.menuButtons;
const { cart, userProfile, login } = headerLocalization.userMenu;

export default function Header() {
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
            <li>
              <a href='/' title={userProfile['en']}>
                <i className='fas fa-user'></i>
              </a>
            </li>
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
