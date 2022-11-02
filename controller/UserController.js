const User = require("../models/UserModel")

const SignIn = async (req,res) => {
  let user = {}
  user.email = req.body.email
  user.password = req.body.password
  console.log(req.body)

  const VerifyAccount = await User.findOne({email: user.email, password: user.password})

  if (VerifyAccount == null) {
    res.status(500).redirect("/LoginError")
  } else {
    res.status(200).redirect("/LoginSuccess")
  }
}

const NewUser = async (req, res) => {
  let user = {}
  user.email = req.body.email
  user.password = req.body.password
  console.log(req.body)

  const InvalidEmail = await User.findOne({ email: user.email })

  if (InvalidEmail === null) {

    let NewUser = new User({
      email: user.email,
      password: user.password
    })

    NewUser.save()
      .then((doc) => {
        res.status(200).send(doc)
      })
      .catch((err) => {
        res.status(500).send(err)
      })

  } else {
    res.status(500).redirect("/NewUserError")
  }
}

module.exports = { NewUser, SignIn, }