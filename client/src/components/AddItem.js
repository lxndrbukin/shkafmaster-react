import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createItem, showError, fetchCategories } from '../store';
import Input from './reusable/Input';
import Textarea from './reusable/Textarea';
import Select from './reusable/Select';

const options = [
  'Hallways',
  'Wardrobes',
  'Kitchens',
  'Living',
  'Office',
  'Tables',
];

export default function AddItem() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCategories()), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      nameRU: e.target.nameRU.value,
      nameRO: e.target.nameRO.value,
      descRU: e.target.descRU.value,
      descRO: e.target.descRO.value,
      category: e.target.category.value,
      image: e.target.image.files[0] || '',
    };
    dispatch(createItem(item));
  };

  const setError = (e, bool) => {
    if (!e.target.value.length) {
      dispatch(showError({ [e.target.name]: bool }));
    }
  };

  return (
    <div className='box'>
      <div className='form-wrapper'>
        <h6 className='form-header'>New Item</h6>
        <form
          onSubmit={handleSubmit}
          className='form'
          encType='multipart/form-data'
        >
          <div className='form-cols-wrapper'>
            <div className='form-col'>
              <Input
                onBlur={(e) => setError(e, true)}
                onFocus={(e) => setError(e, false)}
                name='nameRU'
                placeholder='Название'
                type='text'
                errorMsg='Please enter a name'
                required
              />
              <Textarea
                onBlur={(e) => setError(e, true)}
                onFocus={(e) => setError(e, false)}
                name='descRU'
                placeholder='Описание'
                errorMsg='Please enter a description'
                required
              />
            </div>
            <div className='form-col'>
              <Input
                onBlur={(e) => setError(e, true)}
                onFocus={(e) => setError(e, false)}
                name='nameRO'
                placeholder='Nume'
                type='text'
                errorMsg='Please enter a name'
                required
              />
              <Textarea
                onBlur={(e) => setError(e, true)}
                onFocus={(e) => setError(e, false)}
                name='descRO'
                placeholder='Descriere'
                errorMsg='Please enter a description'
                required
              />
            </div>
          </div>
          <Select options={options} name='category' />
          <div className='input-wrapper'>
            <input name='image' type='file' className='form-input' />
          </div>
          <input type='submit' className='form-submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}
