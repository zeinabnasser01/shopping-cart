import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function ProductModal(props) {
  const { product, closeModal } = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal} className='modal'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>{product.title}</h5>
            <button type='button' className='close' onClick={closeModal}>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <img src={product.imageUrl} />
            <p>{product.desc}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;
