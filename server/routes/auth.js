const express = require("express");
const AuthController = require("../controller/auth");

const router = express.Router();

router.post("/singup", AuthController.singup);
router.post("/singin", AuthController.singin);

module.exports = router;
