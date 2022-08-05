import React, { useState } from 'react';
import '../../css/Products/Products.css';
import ProductModal from './ProductModal';

function Products(props) {
  const [product, setProduct] = useState('');

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };

  return (
    <div className='row'>
      {props.products.map((product) => (
        <ul className='list-unstyled col-lg-4' key={product.id}>
          <div className='card product-card'>
            <div className='card-header' onClick={() => openModal(product)}>
              {/* <a href='#' > */}
              <img src={product.imageUrl} alt={product.title} />
              {/* </a> */}
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <span className='price'>{product.price}</span>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
        </ul>
      ))}

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
}

export default Products;
