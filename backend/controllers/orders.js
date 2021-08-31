const Order = require("../models/orders");
const moment = require("moment-timezone");

exports.makeOrder = function (req, res, next) {
  const orderData = { ...req.body, userId: req.user.id };
  console.log(orderData);

  const order = new Order(orderData);

  order.save((err, order) => {
    if (order) {
      res.send({
        order: {
          ...order._doc,
          createdAt: moment(order.createdAt)
            .tz("Africa/Kampala")
            .format("MMMM Do YYYY, h:mm:ss a"),
        },
      });
    } else console.log(err, 'failed to save to db')
  });   
};
