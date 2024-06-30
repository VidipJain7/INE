// src/components/OrderList.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

function OrderList() {
  const { authData } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders', {
          headers: {
            Authorization: `Bearer ${authData.token}`,
          }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [authData.token]);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Menu ID: {order.menu_id}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
