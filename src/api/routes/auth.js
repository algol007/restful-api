const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.status(200).json({
        message: 'login response'
    });
});

router.get('/signup', (req, res, next) => {
  res.status(200).json({
      message: 'Sign up response'
  });
});


module.exports = router;