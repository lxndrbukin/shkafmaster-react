import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../store';
import Spinner from '../assets/custom/Spinner';
import CatalogItem from './CatalogItem';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { data } = useSelector((state) => state.items);
  const { language } = useSelector((state) => state.auth);

  let content;
  if (!data.length) {
    content = <Spinner />;
  } else {
    const items = data.map((item) => {
      return (
        <CatalogItem
          key={item['ro'].name}
          name={item[language].name}
          desc={item[language].desc}
          image={item.image}
        />
      );
    });
    content = <div className='catalog-items'>{items}</div>;
  }

  return (
    <div className='catalog'>
      <div className='catalog-categories'></div>
      {content}
    </div>
  );
}
