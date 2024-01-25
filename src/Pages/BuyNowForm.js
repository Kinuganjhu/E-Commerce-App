// BuyNowForm.js
import React, { useState } from 'react';

const BuyNowForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your buy now logic here
    console.log('Buy Now form submitted:', { name, email, mobile, address, quantity });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />

      <label>
        Mobile:
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </label>
      <br />

      <label>
        Address:
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <br />

      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />
      </label>
      <br />

      <button type="submit">Buy Now</button>
    </form>
  );
};

export default BuyNowForm;
