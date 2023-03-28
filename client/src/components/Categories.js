import livingImg from '../assets/imgs/menu_living.png';
import kitchenImg from '../assets/imgs/menu_kitchen.png';
import hallwayImg from '../assets/imgs/menu_hallway.png';
import officeImg from '../assets/imgs/menu_office.png';
import tableImg from '../assets/imgs/menu_table.png';
import wardrobeImg from '../assets/imgs/menu_wardrobe.png';
import categoriesLocalization from '../localization/categories.json';
import Category from './Category';

const { categoriesHeader } = categoriesLocalization;
const { kitchen, hallways, wardrobes, office, tables, living } =
  categoriesLocalization.categoryNames;

const categoriesList = [
  {
    name: kitchen['en'],
    path: 'kitchen',
    img: kitchenImg,
  },
  {
    name: wardrobes['en'],
    path: 'wardrobes',
    img: wardrobeImg,
  },
  {
    name: hallways['en'],
    path: 'hallways',
    img: hallwayImg,
  },
  {
    name: office['en'],
    path: 'office',
    img: officeImg,
  },
  {
    name: tables['en'],
    path: 'tables',
    img: tableImg,
  },
  {
    name: living['en'],
    path: 'living',
    img: livingImg,
  },
];

export default function Categories() {
  const renderedCategories = categoriesList.map(({ name, path, img }) => {
    return <Category name={name} path={path} img={img} />;
  });

  return (
    <section className='categories-wrapper'>
      <div className='categories'>
        <h3 className='categories-header'>{categoriesHeader['en']}</h3>
        <div className='categories'>{renderedCategories}</div>
      </div>
    </section>
  );
}
