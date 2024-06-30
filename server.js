const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);

const PORT = process.env.PORT || 5000;

sequelize.authenticate().then(() => {
  console.log('Database connected...');
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
