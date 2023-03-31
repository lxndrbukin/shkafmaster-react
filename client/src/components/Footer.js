import { Link } from 'react-router-dom';
import Logo from '../assets/custom/Logo';
import categorieList from './helpers/categories';

export default function Footer() {
  const renderedCategories = categorieList().map((category) => {
    return (
      <li key={category.name}>
        <Link to={category.path}>{category.name}</Link>
      </li>
    );
  });
  return (
    <footer className='footer-wrapper'>
      <div className='footer'>
        <div className='footer-col'>
          <Logo className='logo-dark' />
        </div>
        <div className='footer-col'>
          <h6>Catalog</h6>
          <nav className='nav'>
            <ul className='nav-links'>{renderedCategories}</ul>
          </nav>
        </div>
        <div className='footer-col'>
          <h6>Information</h6>
          <nav className='nav'>
            <ul className='nav-links'>
              <li>
                <a href='/'>Wardrobes</a>
              </li>
              <li>
                <a href='/'>Kitchens</a>
              </li>
              <li>
                <a href='/'>Offices</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer-col'>
          <ul>
            <li>+373 69 923 028</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
