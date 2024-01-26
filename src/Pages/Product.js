import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        alert(error.name);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className =' product-container '>
     <Link to="/">Back to Shop</Link>
    
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <h6>{product.description}</h6>
      <h6>Category: <b>{product.category}</b></h6>
      
      
      <h3>Rating: {product.rating?.rate}</h3>
      <Link to ='/BuyNowForm'>BUY NOW</Link>
    </div>
  );
}