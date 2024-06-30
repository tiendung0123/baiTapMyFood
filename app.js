const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const likeRoutes = require('./routes/likeRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', likeRoutes);
app.use('/api', reviewRoutes);
app.use('/api', orderRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
