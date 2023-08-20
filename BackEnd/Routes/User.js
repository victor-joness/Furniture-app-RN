const router = require('express').Router();

const UserController = require('../Controllers/UserController');

router.get('/:id', UserController.getUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;