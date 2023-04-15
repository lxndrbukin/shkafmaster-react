import ReactDOM from 'react-dom';

export default function Modal({ handleOpen, children }) {
  return ReactDOM.createPortal(
    <div className='modal-bg'>
      <div className='box'>
        <div className='modal-top-btns'>
          <button className='modal-close' onClick={() => handleOpen(false)}>
            <i className='fas fa-times'></i>
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}
