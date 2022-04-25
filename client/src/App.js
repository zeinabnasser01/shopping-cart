import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';

import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  console.log(products);
  return (
    <div className='layout'>
      <Header />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <Products products={products} />
            </div>
            <div className='col-lg-4'>Filter</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
