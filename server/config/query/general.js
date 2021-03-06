const sequelize = require('sequelize')

module.exports = {
  Comment: {
    RestaurantId: '(SELECT COUNT(*) FROM Comments WHERE Comments.RestaurantId = Restaurant.id)'
  },
  Order: {
    UserId: '(SELECT COUNT(*) FROM Orders WHERE Orders.UserId = User.id)'
  },
  char: {
    date: [sequelize.fn('date_format', sequelize.col('require_date'), '%Y%c%d'), 'date'],
    time: [sequelize.fn('date_format', sequelize.col('require_date'), '%H:%i'), 'time'],
    date_for_dashboard: [sequelize.fn('DATE_FORMAT', sequelize.col('require_date'), '%m/%d'), 'date'],
    date_for_admin_dashboard: [sequelize.fn('DATE_FORMAT', sequelize.col('createdAt'), '%m/%d'), 'date']
  },
  geo: {
    geometry: 'ST_Distance_Sphere',
    random: 'rand()'
  },
  literal: {
    name: [sequelize.literal('(SELECT name FROM Users WHERE Users.id = Comment.UserId)'), 'name'],
    subscribeUsers: function (now) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Users WHERE Users.role ='User' AND Users.expired_date > '${now}')`), 'subscribeUsers']
    },
    nonsubscribeUsers: function (now) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Users WHERE Users.role ='User' AND (Users.expired_date < '${now}' OR Users.expired_date IS NULL))`), 'nonsubscribeUsers']
    },
    userIncreased: function (end, start) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Users WHERE Users.createdAt < '${end}' AND Users.role ='User')-(SELECT COUNT(*) FROM Users WHERE Users.createdAt < '${start}' AND Users.role ='User')`), 'userIncreased']
    },
    restIncreased: function (end, start) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Restaurants WHERE Restaurants.createdAt < '${end}')-(SELECT COUNT(*) FROM Restaurants WHERE Restaurants.createdAt < '${start}')`), 'restIncreased']
    },
    subtIncreased: function (end, start) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Subscriptions WHERE Subscriptions.sub_date < '${end}')-(SELECT COUNT(*) FROM Subscriptions WHERE Subscriptions.sub_date < '${start}')`), 'subtIncreased']
    },
    todayOrders: function (start, end) {
      return [sequelize.literal(`(SELECT COUNT(*) FROM Orders WHERE Orders.require_date > '${start}' AND Orders.require_date < '${end}')`), 'todayOrders']
    }
  },
}