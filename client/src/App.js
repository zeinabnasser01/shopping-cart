import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Filter from './components/Filter/Filter';

import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

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
  return (
    <div className='layout'>
      <Header />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <Products products={products} />
            </div>
            <div className='col-lg-4'>
              <Filter
                size={size}
                handleFilterbysize={handleFilterbysize}
                sort={sort}
                handleFilterbysort={handleFilterbysort}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
