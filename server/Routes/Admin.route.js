const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/Admin.Controller");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.post("/refresh-token", AuthController.refreshToken);

router.delete("/logout", AuthController.logout);

router.post("/addBook", AuthController.addBook);
router.get("/getBook", AuthController.getBook);

module.exports = router;
