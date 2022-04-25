import React from 'react';
import '../../css/Products/Products.css';

function Products(props) {
  return (
    <div className='row'>
      {props.products.map((product) => (
        <div className='col-lg-4' key={product.id}>
          <div className='card product-card'>
            <div className='card-header'>
              <img src={product.imageUrl} alt={product.title} />
            </div>
            <div className='card-body'>
              <h5 className='card-title'>{product.title}</h5>
              <span className='price'>{product.price}</span>
            </div>
            <div className='card-footer'>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
