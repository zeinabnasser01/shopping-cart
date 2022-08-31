import React from 'react';

const Cart = (props) => {
  const { cartItems, removeFromCart } = props;

  return (
    <div className='cart mt-4'>
      <h4 className='cart-title'>
        Cart ({cartItems.length === 0 ? 'Empty' : cartItems.length})
      </h4>
      {cartItems.map((item) => (
        <div className='d-flex align-items-center' key={item.id}>
          <div className='flex-shrink-0'>
            <img
              src={item.imageUrl}
              alt={item.title}
              width='100'
              height='100'
            />
          </div>
          <div className='flex-grow-1 ms-3'>
            <h5 className='product-title'>Title: {item.title}</h5>
            <p className='quantity'>Quantity: {item.qty}</p>
            <h6 className='price'>Price: {item.price}</h6>
          </div>
          <div>
            <button
              className='btn btn-danger'
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
