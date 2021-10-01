const router = require("express").Router()
const StripePayment = require("./Striperoute")

router.post("/payment", (req, res) => {
  StripePayment(req, res)
})

module.exports = router
