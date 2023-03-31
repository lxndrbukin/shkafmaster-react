import { useSelector } from 'react-redux';
import livingImg from '../../assets/imgs/menu_living.png';
import kitchenImg from '../../assets/imgs/menu_kitchen.png';
import hallwayImg from '../../assets/imgs/menu_hallway.png';
import officeImg from '../../assets/imgs/menu_office.png';
import tableImg from '../../assets/imgs/menu_table.png';
import wardrobeImg from '../../assets/imgs/menu_wardrobe.png';
import categoriesLocalization from '../../localization/categories.json';

const { kitchen, hallways, wardrobes, office, tables, living } =
  categoriesLocalization.categoryNames;

export default function CategoriesList() {
  const { language } = useSelector((state) => state.auth);
  return [
    {
      name: kitchen[language],
      path: 'kitchen',
      img: kitchenImg,
    },
    {
      name: wardrobes[language],
      path: 'wardrobes',
      img: wardrobeImg,
    },
    {
      name: hallways[language],
      path: 'hallways',
      img: hallwayImg,
    },
    {
      name: office[language],
      path: 'office',
      img: officeImg,
    },
    {
      name: tables[language],
      path: 'tables',
      img: tableImg,
    },
    {
      name: living[language],
      path: 'living',
      img: livingImg,
    },
  ];
}
