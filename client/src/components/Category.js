export default function Category({ name, img, path }) {
  return (
    <a href={`/catalog/${path}`} className='category'>
      <img src={img} className='category-bg' />
      <h4 className='category-header'>{name}</h4>
    </a>
  );
}
