const sequelize = require('../config/database');

const User = require('./user');
const Restaurant = require('./restaurant');
const Like = require('./like');
const Review = require('./review');
const Order = require('./order');

// Define associations
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Like, { foreignKey: 'userId' });
Like.belongsTo(User, { foreignKey: 'userId' });

Restaurant.hasMany(Order, { foreignKey: 'restaurantId' });
Order.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

Restaurant.hasMany(Review, { foreignKey: 'restaurantId' });
Review.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

Restaurant.hasMany(Like, { foreignKey: 'restaurantId' });
Like.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

module.exports = {
  sequelize,
  User,
  Restaurant,
  Like,
  Review,
  Order
};
