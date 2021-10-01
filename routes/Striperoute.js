const stripe = require("stripe")(process.env.STRIPE_SECRET)

exports.module = (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripErr, stripRes) => {
      stripErr ? res.status(500).json(stripErr) : res.status(200).json(stripRes)
    }
  )
}
