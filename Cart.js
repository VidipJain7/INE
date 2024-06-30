import React, { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import api from '../services/api';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const { auth } = useContext(AuthContext);

  const handleAddToCart = (item) => {
    setItems([...items, item]);
  };

  const handleRemoveFromCart = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmitOrder = async () => {
    try {
      const res = await api.post('/order', { tableNumber, items }, {
        headers: { 'x-auth-token': auth }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} placeholder="Table Number" />
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleSubmitOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
