const express = require('express');
const router = express.Router();
const userService = require('../../services/user');

router.get('/login', (req, res, next) => {
    res.status(200).json({
        message: 'login response'
    });
});

router.get('/signup', (req, res, next) => {
  const role = req.body.accountType // UserRoles.Vendor = "vendor" || UserRoles.Customer = "customer"

  // validasi role harus valid


  const data = {
      email: req.body.email,
      name: req.body.name,
      role: role
  }

  // validasi


  res.status(200).json({
      message: 'Sign up response'
  });
});


module.exports = router;