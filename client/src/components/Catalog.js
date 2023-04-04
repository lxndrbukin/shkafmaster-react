import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from '../store';
import CatalogItem from './CatalogItem';

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const { data } = useSelector((state) => state.items);
  const { language } = useSelector((state) => state.auth);

  let content;
  if (data) {
    content = data.map((item) => {
      return (
        <CatalogItem
          key={item}
          name={item[language].name}
          desc={item[language].desc}
          image={item.image}
        />
      );
    });
  } else {
    content = 'Loading...';
  }

  return (
    <div className='catalog'>
      <div className='catalog-categories'></div>
      <div className='catalog-items'>{content}</div>
    </div>
  );
}
