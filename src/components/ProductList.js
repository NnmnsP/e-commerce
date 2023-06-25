import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product.id} className="product">
          <img className="product-image" src={product.image} alt={product.title} />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{product.price}</p>
          <Link to={`/products/${product.id}`}>
            <button className="view-details-button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );  

};

export default ProductList;
