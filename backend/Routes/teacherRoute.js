const router = require("express").Router();

const { Register, Login } = require("../Controller/teacherController");

// api REGISTER -------------------------------------------------------------------
router.post("/register", Register);

// api LOGIN --------------------------------------------------------------
router.post("/login", Login);

module.exports = router;
