import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store';
import Button from '../assets/custom/Button';
import Modal from './reusable/Modal';

export default function CatalogItem({ name, desc, image, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const { role } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(id));
    setIsOpen(false);
  };

  let buttons;
  if (role === 'admin') {
    buttons = (
      <div className='item-btns'>
        <button>
          <i className='fas fa-edit'></i>
        </button>
        <button onClick={() => setIsOpen(true)}>
          <i className='fas fa-trash'></i>
        </button>
      </div>
    );
  } else {
    buttons = null;
  }

  return (
    <div className='box'>
      <div className='item'>
        <div className='item-top'>
          {name}
          {buttons}
        </div>
        <img
          alt={name}
          src={`data:image/png;base64, ${image}`}
          style={{ width: '200px' }}
        />
        <div dangerouslySetInnerHTML={{ __html: desc }} />
        {isOpen && (
          <Modal handleOpen={setIsOpen}>
            <div className='modal-text'>Do you want to delete {name}?</div>
            <div className='modal-bottom-btns'>
              <Button onClick={() => handleDelete(id)}>Delete</Button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
