import { useDispatch } from 'react-redux';
import { createCategory } from '../store';

export default function AddCategory() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = {
      nameRU: e.target.nameRU.value,
      nameRO: e.target.nameRO.value,
      nameEN: e.target.nameEN.value,
    };
    dispatch(createCategory(category));
  };

  return (
    <div className='box'>
      <div className='form-wrapper'>
        <h6 className='form-header'>Add Category</h6>
        <form onSubmit={handleSubmit} className='form'>
          <div className='error-wrapper'>
            <div className='input-wrapper'>
              <input type='text' name='nameRU' placeholder='Название RU' />
            </div>
          </div>
          <div className='error-wrapper'>
            <div className='input-wrapper'>
              <input type='text' name='nameRO' placeholder='Nume RO' />
            </div>
          </div>
          <div className='error-wrapper'>
            <div className='input-wrapper'>
              <input type='text' name='nameEN' placeholder='Name EN' />
            </div>
          </div>
          <input type='submit' className='form-submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}
