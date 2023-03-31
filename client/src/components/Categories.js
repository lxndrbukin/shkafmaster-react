import { useSelector } from 'react-redux';
import categoriesLocalization from '../localization/categories.json';
import categoriesList from './helpers/categories';
import Category from './Category';

export const { categoriesHeader } = categoriesLocalization;

export default function Categories() {
  const { language } = useSelector((state) => state.auth);

  const renderedCategories = categoriesList().map(({ name, path, img }) => {
    return <Category key={name} name={name} path={path} img={img} />;
  });

  return (
    <section className='categories-wrapper'>
      <div className='categories'>
        <h4 className='categories-header'>{categoriesHeader[language]}</h4>
        <div className='categories-list'>{renderedCategories}</div>
      </div>
    </section>
  );
}
