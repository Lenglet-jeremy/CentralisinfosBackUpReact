const router = require("express").Router();
const {
  signupUser,
  verifyMail,
  loginUser,
} = require("../controllers/user-controller");

// l'url correspond à localhost:5000/api/users

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.get("/verifyMail/:token", verifyMail);

module.exports = router;
