import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Product from '../components/Product/Product';

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className='product-header'>Our Products</h1>
      <Product />
      <Footer />
    </div>
  );
}

export default ProductPage;