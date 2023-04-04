export default function CatalogItem({ name, desc, image }) {
  return (
    <div className='box'>
      <div>{name}</div>
      <img
        alt={name}
        src={`data:image/png;base64, ${image}`}
        style={{ width: '200px' }}
      />
      <div dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}
