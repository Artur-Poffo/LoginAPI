const express = require("express")
const UserController = require("../controller/UserController")

const router = express.Router()

router.post("/Login", UserController.SignIn)

router.post("/NewUser", UserController.NewUser)

module.exports = router