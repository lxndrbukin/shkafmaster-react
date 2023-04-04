import { useDispatch } from 'react-redux';
import { createItem } from '../store';

export default function AddItem() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      nameRU: e.target.nameRU.value,
      nameRO: e.target.nameRO.value,
      descRU: e.target.descRU.value,
      descRO: e.target.descRO.value,
      category: e.target.category.value,
      image: e.target.image.files[0],
    };
    dispatch(createItem(item));
    // console.log(e.target.image.files);
  };

  return (
    <div className='box'>
      <div className='form-wrapper'>
        <h6 className='form-header'>New Item</h6>
        <form
          onSubmit={handleSubmit}
          // method='POST'
          // action='/api/catalog'
          className='form'
          encType='multipart/form-data'
        >
          <div className='form-cols-wrapper'>
            <div className='form-col'>
              <div className='input-wrapper'>
                <input
                  name='nameRU'
                  placeholder='Название'
                  className='form-input'
                  type='text'
                />
              </div>
              <div className='input-wrapper'>
                <textarea className='form-textarea' name='descRU'></textarea>
              </div>
            </div>
            <div className='form-col'>
              <div className='input-wrapper'>
                <input
                  name='nameRO'
                  placeholder='Nume'
                  className='form-input'
                  type='text'
                />
              </div>
              <div className='input-wrapper'>
                <textarea className='form-textarea' name='descRO'></textarea>
              </div>
            </div>
          </div>
          <div className='input-wrapper'>
            <select name='category' className='form-input form-select'>
              <option>Wardrobes</option>
              <option>Kitchens</option>
              <option>Tables</option>
              <option>Hallways</option>
              <option>Offices</option>
              <option>Livings</option>
            </select>
          </div>
          <div className='input-wrapper'>
            <input name='image' type='file' className='form-input' />
          </div>
          <input type='submit' className='form-submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}
