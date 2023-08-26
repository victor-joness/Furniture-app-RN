const router = require("express").Router();
const cartController = require("../Controllers/CartController");

router.post("/", cartController.addToCart);
router.get("/find/:id", cartController.getCart);
router.post("/quantity", cartController.decrementCartItem);
router.delete("/:cartItemId", cartController.deleteCartItem);

module.exports = router;
