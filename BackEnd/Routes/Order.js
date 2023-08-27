const router = require("express").Router();

const OrdersController = require("../Controllers/OrdersController");

router.get("/:id", OrdersController.getUserOrders);

module.exports = router;