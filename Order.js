// src/components/Order.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Order() {
  const { authData } = useContext(AuthContext);
  const [menuId, setMenuId] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/order', {
        menu_id: menuId,
        quantity,
      }, {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        }
      });
      alert('Order placed successfully');
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <form onSubmit={handleOrder}>
        <div>
          <label>Menu ID:</label>
          <input
            type="text"
            value={menuId}
            onChange={(e) => setMenuId(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Order;
