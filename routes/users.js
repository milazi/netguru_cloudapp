var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const {_raw, _json, ...userProfile } = req.user;
  console.log(userProfile);
  res.render('user', {
    title: "Profile",
    userProfile: userProfile
  });
  
});

module.exports = router;
