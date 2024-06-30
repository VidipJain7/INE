import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await api.get('/menu');
        setMenu(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      {menu.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
