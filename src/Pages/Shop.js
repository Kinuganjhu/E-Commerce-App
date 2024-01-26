import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

export default function Shop({title}) {
  const [details, setDetails] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        alert(error.name);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>E-COMMERCE APP</h3>
      {details.map((item, index) => (
        <div key={index}className =' product-container '>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <h4>${item.price}</h4>
          <Link to={`/Product/${item.id}`}className= 'btn'>View Details>>></Link>
        
        </div>
      ))}
    </>
  );
}
