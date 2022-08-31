import React, { useState, useEffect } from 'react';
import data from './data.json';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );

  const handleFilterbysize = (e) => {
    setSize(e.target.value);

    if (e.target.value === 'ALL') {
      setProducts(data);
    } else {
      let productsClone = [...products];
      let newProducts = productsClone.filter(
        (p) => p.sizes.indexOf(e.target.value) !== -1
      );
      setProducts(newProducts);
    }
  };

  const handleFilterbysort = (e) => {
    let order = e.target.value;
    setSort(order);
    let productClone = [...products];
    let newProducts = productClone.sort(function (a, b) {
      if (order === 'lowest') {
        return a.price - b.price;
      } else if (order === 'highest') {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setCartItems(cartItemsClone);
  };

  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];
    setCartItems(cartItemsClone.filter((p) => p.id != product.id));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className='layout'>
      <Header />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <Products products={products} addToCart={addToCart} />
            </div>
            <div className='col-lg-4'>
              <Filter
                productsNumber={products.length}
                size={size}
                handleFilterbysize={handleFilterbysize}
                sort={sort}
                handleFilterbysort={handleFilterbysort}
              />
            </div>
            <div className='col-lg-12'>
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
